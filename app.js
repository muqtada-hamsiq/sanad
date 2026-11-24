/* سند SANAD — أدوات مشتركة */
(function () {
  'use strict';

  /* ===== عميل Supabase (مرة واحدة) ===== */
  var supa = null;
  try {
    if (window.supabase && window.SANAD_CONFIG) {
      supa = window.supabase.createClient(window.SANAD_CONFIG.supabaseUrl, window.SANAD_CONFIG.supabaseAnonKey);
    }
  } catch (e) { supa = null; }

  /* ===== تقارير أخطاء المتصفح (اختياري — يعمل فقط بعد إنشاء جدول client_errors) =====
     يرسل اسم الصفحة ورسالة الخطأ ونوع المتصفح فقط، دون أي بيانات شخصية.
     فشل صامت إن لم يوجد الجدول بعد أو كان المستخدم دون اتصال.
     حدّ أقصى: 5 تقارير في كل تحميل صفحة. */
  var errorReportCount = 0;
  var MAX_ERROR_REPORTS = 5;
  function reportClientError(message, source, lineno, colno, errorObj) {
    try {
      if (errorReportCount >= MAX_ERROR_REPORTS) return;
      if (!supa) return;
      errorReportCount++;
      var stack = '';
      try { stack = (errorObj && errorObj.stack) ? String(errorObj.stack).slice(0, 2000) : ''; } catch (e) { stack = ''; }
      var page = '';
      try { page = window.location.pathname + window.location.search; } catch (e) { page = ''; }
      var ua = '';
      try { ua = String(window.navigator.userAgent || '').slice(0, 500); } catch (e) { ua = ''; }
      var msg = String(message == null ? '' : message).slice(0, 1000);
      if (source) msg += ' @ ' + String(source).slice(0, 500) + ':' + (lineno || '') + ':' + (colno || '');
      var req = supa.from('client_errors').insert({ page: page, message: msg, stack: stack, user_agent: ua });
      if (req && typeof req.then === 'function') {
        req.then(function () {}, function () { /* فشل صامت — الجدول غير موجود بعد أو لا اتصال */ });
      }
    } catch (e) { /* فشل صامت تماماً — المُبلِّغ نفسه لا يرمي أخطاء */ }
  }
  try {
    window.onerror = function (message, source, lineno, colno, errorObj) {
      reportClientError(message, source, lineno, colno, errorObj);
      return false; /* دع المعالجة الافتراضية تستمر */
    };
  } catch (e) { /* تجاهل */ }

  function authUnavailable() {
    toast('تعذر الاتصال بخدمة الحسابات — تحقق من اتصالك بالإنترنت وحاول مجدداً');
  }

  var K_FAVS = 'sanad_favs';
  var K_OFFLINE = 'sanad_offline';
  var K_POINTS = 'sanad_points';
  var K_BADGES = 'sanad_badges';
  var K_EXAMS = 'sanad_exam_history';

  var BADGE_RULES = [
    { id: 'first-lesson', name: 'أول درس', test: function (total, reason) { return reason === 'lesson'; } },
    { id: 'first-exam', name: 'أول اختبار', test: function (total, reason) { return reason === 'exam'; } },
    { id: 'points-100', name: '100 نقطة', test: function (total) { return total >= 100; } },
    { id: 'exams-5', name: '5 اختبارات', test: function (total, reason, ctx) { return ctx && ctx.examCount >= 5; } }
  ];

  function safeGet(key, fallback) {
    try {
      var raw = window.localStorage.getItem(key);
      if (raw === null || raw === undefined) return fallback;
      return JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  }

  function safeSet(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      return false;
    }
  }

  function getBadges() {
    var b = safeGet(K_BADGES, []);
    return Array.isArray(b) ? b : [];
  }

  function awardBadge(name) {
    var badges = getBadges();
    if (badges.indexOf(name) === -1) {
      badges.push(name);
      safeSet(K_BADGES, badges);
      toast('مبروك! حصلت على شارة: ' + name);
    }
    return badges;
  }

  function toast(msg) {
    if (!msg) return;
    var old = document.querySelector('.sanad-toast');
    if (old) old.remove();
    var el = document.createElement('div');
    el.className = 'sanad-toast';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 3000);
  }

  var SANAD = {
    /* ===== الحساب (Supabase Auth) ===== */
    supabase: supa,
    getSessionUser: async function () {
      if (!supa) { authUnavailable(); return null; }
      try {
        var res = await supa.auth.getUser();
        return (res && res.data) ? (res.data.user || null) : null;
      } catch (e) { return null; }
    },
    signOut: async function () {
      if (!supa) { authUnavailable(); return false; }
      try { await supa.auth.signOut(); return true; } catch (e) { return false; }
    },
    onAuthChange: function (cb) {
      if (!supa) { authUnavailable(); return null; }
      try { return supa.auth.onAuthStateChange(cb); } catch (e) { return null; }
    },

    /* ===== التنبيهات ===== */
    toast: toast,

    /* ===== المفضلة ===== */
    saveFav: function (type, id) {
      var favs = this.getFavs();
      var exists = favs.some(function (f) { return f.type === type && f.id === id; });
      if (!exists) {
        favs.push({ type: type, id: id, at: new Date().toISOString() });
        safeSet(K_FAVS, favs);
        toast('أضيف إلى المفضلة');
      }
      return favs;
    },
    getFavs: function () {
      var f = safeGet(K_FAVS, []);
      return Array.isArray(f) ? f : [];
    },

    /* ===== الحفظ دون اتصال ===== */
    saveOffline: function (type, id, title) {
      var items = this.getOffline();
      var exists = items.some(function (it) { return it.type === type && it.id === id; });
      if (!exists) {
        items.push({ type: type, id: id, title: title || '', at: new Date().toISOString() });
        safeSet(K_OFFLINE, items);
        toast('حُفظ للقراءة دون اتصال');
      }
      return items;
    },
    getOffline: function () {
      var o = safeGet(K_OFFLINE, []);
      return Array.isArray(o) ? o : [];
    },

    /* ===== النقاط والشارات ===== */
    addPoints: function (n, reason) {
      var pts = this.getPoints();
      var amount = parseInt(n, 10);
      if (isNaN(amount)) amount = 0;
      pts += amount;
      safeSet(K_POINTS, pts);
      var history = this.getExamHistory();
      var examCount = Array.isArray(history) ? history.length : 0;
      var self = this;
      BADGE_RULES.forEach(function (rule) {
        if (rule.test(pts, reason, { examCount: examCount })) {
          awardBadge(rule.name);
        }
      });
      return pts;
    },
    getPoints: function () {
      var p = safeGet(K_POINTS, 0);
      return (typeof p === 'number' && !isNaN(p)) ? p : 0;
    },
    getBadges: getBadges,

    /* ===== سجل الاختبارات ===== */
    recordExam: function (examId, score, total) {
      var history = this.getExamHistory();
      history.push({
        examId: examId,
        score: Number(score) || 0,
        total: Number(total) || 0,
        at: new Date().toISOString()
      });
      safeSet(K_EXAMS, history);
      return history;
    },
    getExamHistory: function (examId) {
      var h = safeGet(K_EXAMS, []);
      if (!Array.isArray(h)) return [];
      if (examId) {
        return h.filter(function (r) { return r.examId === examId; });
      }
      return h;
    },

    /* ===== الحماية ===== */
    requireLogin: async function () {
      var user = await this.getSessionUser();
      if (!user) {
        window.location.href = 'login.html';
        return false;
      }
      return true;
    }
  };

  window.SANAD = SANAD;

  /* ===== طبقة تخزين الطالب (Supabase مع رجوع صامت إلى localStorage للضيوف) =====
     عقد ثابت تستدعيه الصفحات الأخرى عبر window.SANAD.store.
     - الضيف (غير مسجّل الدخول) يعمل تماماً كما قبل، عبر localStorage فقط.
     - المسجّل: كل القراءات تُصفّى بـ user_id، وكل الكتابات تتضمن user_id.
     - كل استدعاء Supabase يفشل بصمت (catch + فحص error) ولا يرمي أبداً للصفحة.
     - لا مفاتيح سرية هنا — عميل Supabase العام (anon) نفسه المستخدم أعلاه. */
  var K_LESSON_LOG = 'sanad_lesson_log';
  var K_SCHEDULE = 'sanad_schedule';
  var K_SCHEDULE_DONE = 'sanad_schedule_done';
  var K_MIGRATED = 'sanad_migrated_v2';

  var store; /* يُعرَّف أدناه؛ الدوال المساعدة تقرأه وقت الاستدعاء فقط */

  var STORE_BADGE_BY_NAME = {
    'أول درس': 'first-lesson',
    'أول اختبار': 'first-exam',
    '100 نقطة': 'points-100',
    '5 اختبارات': 'exams-5',
    '10 دروس': 'lessons-10'
  };

  function badgeIdForName(name) {
    if (STORE_BADGE_BY_NAME[name]) return STORE_BADGE_BY_NAME[name];
    var found = null;
    BADGE_RULES.forEach(function (rule) { if (rule.name === name) found = rule.id; });
    return found || String(name || '');
  }

  function currentUid() {
    return (store && store.user && store.user.id) ? store.user.id : null;
  }

  function pctOf(score, total) {
    var s = Number(score) || 0;
    var t = Number(total) || 0;
    return t > 0 ? Math.round((s / t) * 100) : 0;
  }

  async function fetchProgressRow(uid) {
    try {
      if (!supa || !uid) return null;
      var res = await supa.from('student_progress')
        .select('user_id,points,lessons_completed,exams_completed,best_pct')
        .eq('user_id', uid).maybeSingle();
      if (!res || res.error) return null;
      return res.data || null;
    } catch (e) { return null; }
  }

  /* زيادة تراكمية في student_progress (نقاط/دروس/اختبارات، وأفضل نسبة كحد أقصى). */
  async function upsertProgress(uid, delta) {
    try {
      if (!supa || !uid) return null;
      var cur = await fetchProgressRow(uid);
      var row = {
        user_id: uid,
        points: Math.max(0, (cur && cur.points || 0) + (delta.points || 0)),
        lessons_completed: Math.max(0, (cur && cur.lessons_completed || 0) + (delta.lessons || 0)),
        exams_completed: Math.max(0, (cur && cur.exams_completed || 0) + (delta.exams || 0)),
        best_pct: Math.max(cur && cur.best_pct || 0, delta.bestPct || 0),
        updated_at: new Date().toISOString()
      };
      var res = await supa.from('student_progress').upsert(row, { onConflict: 'user_id' }).select().maybeSingle();
      if (!res || res.error) return null;
      return res.data || row;
    } catch (e) { return null; }
  }

  async function logPoints(uid, n, reason, refType, refId) {
    try {
      if (!supa || !uid) return false;
      var res = await supa.from('points_log').insert({
        user_id: uid,
        points: Number(n) || 0,
        reason: reason || '',
        ref_type: refType || '',
        ref_id: (refId === null || refId === undefined) ? '' : String(refId)
      });
      return !(res && res.error);
    } catch (e) { return false; }
  }

  /* شارة في الخادم + مرآة محلية (toast عبر awardBadge) — خطأ مكرر يُتجاهل بصمت. */
  async function awardServerBadge(uid, badgeId, badgeName) {
    try {
      if (supa && uid) {
        await supa.from('achievements').insert({
          user_id: uid, badge_id: badgeId, badge_name: badgeName,
          awarded_at: new Date().toISOString()
        });
      }
    } catch (e) { /* تجاهل — قد تكون الشارة ممنوحة أصلاً */ }
    try { awardBadge(badgeName); } catch (e) { /* تجاهل */ }
    return true;
  }

  /* ترحيل لمرة واحدة: localStorage -> جداول الخادم، بأفضل جهد، دون مسح المحلي.
     يُضبط العلم فقط عند نجاح دفعة واحدة على الأقل (أو عدم وجود ما يُرحَّل)،
     فإذا كانت الجداول غير مطبَّقة بعد تُعاد المحاولة عند تسجيل الدخول التالي. */
  async function migrateLocalData(uid) {
    try {
      if (!supa || !uid) return;
      if (safeGet(K_MIGRATED, false)) return;
      var favs = safeGet(K_FAVS, []);
      var exams = safeGet(K_EXAMS, []);
      var lessons = safeGet(K_LESSON_LOG, []);
      var points = safeGet(K_POINTS, 0);
      var badges = getBadges();
      if (!Array.isArray(favs)) favs = [];
      if (!Array.isArray(exams)) exams = [];
      if (!Array.isArray(lessons)) lessons = [];
      if (!Array.isArray(badges)) badges = [];
      if (typeof points !== 'number' || isNaN(points)) points = 0;
      if (!favs.length && !exams.length && !lessons.length && !points && !badges.length) {
        safeSet(K_MIGRATED, true);
        return;
      }
      var anyOk = false;
      var anyAttempt = false;
      var i, res;
      for (i = 0; i < favs.length; i++) {
        anyAttempt = true;
        try {
          res = await supa.from('saved_books').upsert({
            user_id: uid, item_type: String(favs[i].type || ''),
            item_id: String(favs[i].id || ''), title: ''
          }, { onConflict: 'user_id,item_type,item_id' });
          if (res && !res.error) anyOk = true;
        } catch (e) { /* تجاهل */ }
      }
      for (i = 0; i < exams.length; i++) {
        anyAttempt = true;
        try {
          res = await supa.from('exam_results').insert({
            user_id: uid, exam_id: String(exams[i].examId || ''),
            score: Number(exams[i].score) || 0, total_marks: Number(exams[i].total) || 0,
            pct: pctOf(exams[i].score, exams[i].total),
            answers: [], duration_seconds: null,
            finished_at: exams[i].at || new Date().toISOString()
          });
          if (res && !res.error) anyOk = true;
        } catch (e) { /* تجاهل */ }
      }
      for (i = 0; i < lessons.length; i++) {
        anyAttempt = true;
        try {
          res = await supa.from('completed_lessons').upsert({
            user_id: uid, lesson_key: String(lessons[i].key || ''),
            title: lessons[i].title || '', grade: lessons[i].grade || '',
            subject: lessons[i].subject || '', youtube_id: '', playlist_id: '',
            completed_at: lessons[i].at || new Date().toISOString()
          }, { onConflict: 'user_id,lesson_key' });
          if (res && !res.error) anyOk = true;
        } catch (e) { /* تجاهل */ }
      }
      for (i = 0; i < badges.length; i++) {
        anyAttempt = true;
        try {
          res = await supa.from('achievements').insert({
            user_id: uid, badge_id: badgeIdForName(badges[i]), badge_name: badges[i],
            awarded_at: new Date().toISOString()
          });
          if (res && !res.error) anyOk = true;
        } catch (e) { /* تجاهل — شارة موجودة أصلاً */ }
      }
      if (points > 0 || lessons.length || exams.length) {
        anyAttempt = true;
        try {
          var bestLocal = 0;
          exams.forEach(function (r) {
            var p = pctOf(r.score, r.total);
            if (p > bestLocal) bestLocal = p;
          });
          var cur = await fetchProgressRow(uid);
          var merged = {
            user_id: uid,
            points: Math.max(0, (cur && cur.points || 0) + points),
            lessons_completed: Math.max(cur && cur.lessons_completed || 0, lessons.length),
            exams_completed: Math.max(cur && cur.exams_completed || 0, exams.length),
            best_pct: Math.max(cur && cur.best_pct || 0, bestLocal),
            updated_at: new Date().toISOString()
          };
          res = await supa.from('student_progress').upsert(merged, { onConflict: 'user_id' });
          if (res && !res.error) {
            anyOk = true;
            if (points > 0) await logPoints(uid, points, 'ترحيل النقاط المحلية', 'migration', null);
          }
        } catch (e) { /* تجاهل */ }
      }
      if (anyOk || !anyAttempt) safeSet(K_MIGRATED, true);
    } catch (e) { /* فشل صامت تماماً — الترحيل اختياري */ }
  }

  store = {
    user: null,
    ready: null,
    isLoggedIn: function () { return !!store.user; },

    /* ===== نتائج الاختبارات ===== */
    saveExamResult: async function (examId, score, totalMarks, detail) {
      var sc = Number(score) || 0;
      var tot = Number(totalMarks) || 0;
      var pct = pctOf(sc, tot);
      var uid = currentUid();
      if (!uid) {
        try { SANAD.recordExam(examId, sc, tot); } catch (e) { /* تجاهل */ }
        return null;
      }
      try {
        var d = detail || {};
        var dur = (d.durationSeconds !== null && d.durationSeconds !== undefined)
          ? d.durationSeconds : d.duration_seconds;
        var attemptId = (d.attemptId !== null && d.attemptId !== undefined && d.attemptId !== '')
          ? String(d.attemptId) : null;
        var row = {
          user_id: uid, exam_id: String(examId), score: sc, total_marks: tot, pct: pct,
          answers: Array.isArray(d.answers) ? d.answers : [],
          duration_seconds: (dur === null || dur === undefined) ? null : (Number(dur) || null),
          finished_at: new Date().toISOString()
        };
        if (attemptId) row.attempt_id = attemptId;
        /* إعادة حفظ نفس المحاولة (بعد التقييم الذاتي): حدّث الصف نفسه
           بدل إنشاء صف مكرر — النقاط والشارات تُمنح مرة واحدة فقط. */
        var existing = null;
        if (attemptId) {
          try {
            var ex = await supa.from('exam_results').select('id')
              .eq('user_id', uid).eq('attempt_id', attemptId).maybeSingle();
            if (ex && !ex.error && ex.data) existing = ex.data;
          } catch (e) { /* تجاهل */ }
        }
        var ins;
        if (existing) {
          ins = await supa.from('exam_results').update(row).eq('id', existing.id).select().maybeSingle();
        } else {
          ins = await supa.from('exam_results').insert(row).select().maybeSingle();
        }
        if (!ins || ins.error || !ins.data) {
          /* فشل الخادم: يعيد null فقط — المتصل (exam.html) هو المسؤول
             الوحيد عن النسخة المحلية، حتى لا تُسجَّل المحاولة مرتين. */
          return null;
        }
        if (!existing) {
          var before = await fetchProgressRow(uid);
          var prevExams = before ? (before.exams_completed || 0) : 0;
          await logPoints(uid, 10, 'إنهاء اختبار', 'exam', examId);
          await upsertProgress(uid, { points: 10, exams: 1, bestPct: pct });
          if (prevExams === 0) await awardServerBadge(uid, 'first-exam', 'أول اختبار');
          if (prevExams + 1 === 5) await awardServerBadge(uid, 'exams-5', '5 اختبارات');
        }
        return ins.data;
      } catch (e) {
        /* فشل الخادم: يعيد null فقط — المتصل هو المسؤول عن النسخة المحلية. */
        return null;
      }
    },
    getExamResults: async function (examId) {
      var uid = currentUid();
      if (!uid) {
        try {
          return SANAD.getExamHistory(examId).map(function (r) {
            return { examId: r.examId, score: r.score, total: r.total, at: r.at, date: r.at };
          });
        } catch (e) { return []; }
      }
      try {
        var q = supa.from('exam_results')
          .select('exam_id,score,total_marks,finished_at')
          .eq('user_id', uid).order('finished_at', { ascending: false });
        if (examId) q = q.eq('exam_id', String(examId));
        var res = await q;
        if (!res || res.error || !Array.isArray(res.data)) return [];
        return res.data.map(function (r) {
          return { examId: r.exam_id, score: r.score, total: r.total_marks, at: r.finished_at, date: r.finished_at };
        });
      } catch (e) { return []; }
    },

    /* ===== العناصر المحفوظة (كتب/ملازم/دروس/اختبارات/مراجعات) ===== */
    saveItem: async function (type, id, title) {
      var uid = currentUid();
      if (!uid) {
        try { SANAD.saveFav(type, id); } catch (e) { /* تجاهل */ }
        return true;
      }
      try {
        var row = { user_id: uid, item_type: String(type), item_id: String(id), title: title || '' };
        var res = await supa.from('saved_books').upsert(row, { onConflict: 'user_id,item_type,item_id' });
        if (res && res.error) {
          var ins = await supa.from('saved_books').insert(row);
          if (ins && ins.error) {
            try { SANAD.saveFav(type, id); } catch (e) { /* تجاهل */ }
          }
        }
        return true;
      } catch (e) {
        try { SANAD.saveFav(type, id); } catch (e2) { /* تجاهل */ }
        return true;
      }
    },
    unsaveItem: async function (type, id) {
      var uid = currentUid();
      if (!uid) {
        try {
          safeSet(K_FAVS, SANAD.getFavs().filter(function (f) {
            return !(f.type === type && String(f.id) === String(id));
          }));
        } catch (e) { /* تجاهل */ }
        return true;
      }
      try {
        var res = await supa.from('saved_books').delete()
          .eq('user_id', uid).eq('item_type', String(type)).eq('item_id', String(id));
        return !(res && res.error);
      } catch (e) { return false; }
    },
    getSavedItems: async function (type) {
      var uid = currentUid();
      if (!uid) {
        try {
          var favs = SANAD.getFavs();
          if (type) favs = favs.filter(function (f) { return f.type === type; });
          return favs.map(function (f) { return { type: f.type, id: f.id, title: '' }; });
        } catch (e) { return []; }
      }
      try {
        var q = supa.from('saved_books').select('item_type,item_id,title').eq('user_id', uid);
        if (type) q = q.eq('item_type', String(type));
        var res = await q;
        if (!res || res.error || !Array.isArray(res.data)) return [];
        return res.data.map(function (r) {
          return { type: r.item_type, id: r.item_id, title: r.title || '' };
        });
      } catch (e) { return []; }
    },
    isSaved: async function (type, id) {
      var uid = currentUid();
      if (!uid) {
        try {
          return SANAD.getFavs().some(function (f) {
            return f.type === type && String(f.id) === String(id);
          });
        } catch (e) { return false; }
      }
      try {
        var res = await supa.from('saved_books').select('item_id')
          .eq('user_id', uid).eq('item_type', String(type)).eq('item_id', String(id)).limit(1);
        if (!res || res.error) return false;
        return !!(res.data && res.data.length);
      } catch (e) { return false; }
    },

    /* ===== الدروس المكتملة ===== */
    completeLesson: async function (key, meta) {
      var m = meta || {};
      var uid = currentUid();
      if (!uid) {
        try {
          var log = safeGet(K_LESSON_LOG, []);
          if (!Array.isArray(log)) log = [];
          var exists = log.some(function (x) { return x.key === key; });
          if (!exists) {
            log.push({
              key: key, title: m.title || '', grade: m.grade || '',
              subject: m.subject || '', at: new Date().toISOString()
            });
            safeSet(K_LESSON_LOG, log);
            try { SANAD.addPoints(5, 'lesson'); } catch (e) { /* تجاهل */ }
          }
        } catch (e) { /* تجاهل */ }
        return true;
      }
      try {
        var already = await supa.from('completed_lessons').select('lesson_key')
          .eq('user_id', uid).eq('lesson_key', String(key)).limit(1);
        if (already && !already.error && already.data && already.data.length) return true;
        var row = {
          user_id: uid, lesson_key: String(key), title: m.title || '',
          grade: m.grade || '', subject: m.subject || '',
          youtube_id: m.youtubeId || m.youtube_id || '',
          playlist_id: m.playlistId || m.playlist_id || '',
          completed_at: new Date().toISOString()
        };
        var ins = await supa.from('completed_lessons')
          .upsert(row, { onConflict: 'user_id,lesson_key' });
        if (ins && ins.error) {
          var ins2 = await supa.from('completed_lessons').insert(row);
          if (ins2 && ins2.error) return false;
        }
        var before = await fetchProgressRow(uid);
        var prev = before ? (before.lessons_completed || 0) : 0;
        await logPoints(uid, 5, 'إكمال درس', 'lesson', key);
        await upsertProgress(uid, { points: 5, lessons: 1 });
        if (prev === 0) await awardServerBadge(uid, 'first-lesson', 'أول درس');
        if (prev + 1 === 10) await awardServerBadge(uid, 'lessons-10', '10 دروس');
        return true;
      } catch (e) { return false; }
    },
    /* إلغاء إكمال درس: يحذف صف الإكمال وينقص عدّاد الدروس (بحد أدنى 0).
       النقاط المكتسبة سابقاً لا تُخصم — هي سجلّ إنجاز لا رصيد قابل للسحب. */
    uncompleteLesson: async function (key) {
      var uid = currentUid();
      if (!uid) {
        try {
          var log = safeGet(K_LESSON_LOG, []);
          if (Array.isArray(log)) {
            safeSet(K_LESSON_LOG, log.filter(function (x) {
              return x && x.key !== key && x !== key;
            }));
          }
        } catch (e) { /* تجاهل */ }
        return true;
      }
      try {
        var res = await supa.from('completed_lessons').delete()
          .eq('user_id', uid).eq('lesson_key', String(key));
        if (res && res.error) return false;
        try {
          var before = await fetchProgressRow(uid);
          var n = before ? Math.max(0, (before.lessons_completed || 0) - 1) : 0;
          await supa.from('student_progress').update({
            lessons_completed: n, updated_at: new Date().toISOString()
          }).eq('user_id', uid);
        } catch (e) { /* تجاهل */ }
        return true;
      } catch (e) { return false; }
    },
    getCompletedLessons: async function () {
      var uid = currentUid();
      if (!uid) {
        try {
          var l = safeGet(K_LESSON_LOG, []);
          return Array.isArray(l) ? l : [];
        } catch (e) { return []; }
      }
      try {
        var res = await supa.from('completed_lessons')
          .select('lesson_key,title,grade,subject,youtube_id,playlist_id,completed_at')
          .eq('user_id', uid).order('completed_at', { ascending: false });
        if (!res || res.error || !Array.isArray(res.data)) return [];
        return res.data.map(function (r) {
          return {
            key: r.lesson_key, title: r.title || '', grade: r.grade || '',
            subject: r.subject || '', youtubeId: r.youtube_id || '',
            playlistId: r.playlist_id || '', at: r.completed_at
          };
        });
      } catch (e) { return []; }
    },

    /* ===== التقدم والنقاط والشارات ===== */
    getProgress: async function () {
      var uid = currentUid();
      if (!uid) {
        try {
          var pts = SANAD.getPoints();
          var lessons = safeGet(K_LESSON_LOG, []);
          var hist = SANAD.getExamHistory();
          var best = 0;
          hist.forEach(function (r) {
            var p = pctOf(r.score, r.total);
            if (p > best) best = p;
          });
          return {
            points: pts, lessons: Array.isArray(lessons) ? lessons.length : 0,
            exams: hist.length, bestPct: best
          };
        } catch (e) { return { points: 0, lessons: 0, exams: 0, bestPct: 0 }; }
      }
      try {
        var row = await fetchProgressRow(uid);
        if (!row) return { points: 0, lessons: 0, exams: 0, bestPct: 0 };
        return {
          points: row.points || 0, lessons: row.lessons_completed || 0,
          exams: row.exams_completed || 0, bestPct: row.best_pct || 0
        };
      } catch (e) { return { points: 0, lessons: 0, exams: 0, bestPct: 0 }; }
    },
    addPoints: async function (n, reason, ref) {
      var amount = parseInt(n, 10);
      if (isNaN(amount)) amount = 0;
      var uid = currentUid();
      if (!uid) {
        try { return SANAD.addPoints(amount, reason); } catch (e) { return SANAD.getPoints(); }
      }
      try {
        var refType = null, refId = null;
        if (ref !== null && ref !== undefined) {
          if (typeof ref === 'string') refId = ref;
          else if (typeof ref === 'object') {
            refType = ref.type || ref.refType || null;
            refId = ref.id || ref.refId || null;
          }
        }
        await logPoints(uid, amount, reason || '', refType, refId);
        var updated = await upsertProgress(uid, { points: amount });
        var total = (updated && typeof updated.points === 'number') ? updated.points : 0;
        if (!total) {
          var row = await fetchProgressRow(uid);
          total = row ? (row.points || 0) : amount;
        }
        if (total >= 100) await awardServerBadge(uid, 'points-100', '100 نقطة');
        return total;
      } catch (e) {
        try { return SANAD.addPoints(amount, reason); } catch (e2) { return 0; }
      }
    },
    getAchievements: async function () {
      var uid = currentUid();
      if (!uid) {
        try {
          return getBadges().map(function (name) {
            return { badgeId: badgeIdForName(name), badgeName: name, at: null };
          });
        } catch (e) { return []; }
      }
      try {
        var res = await supa.from('achievements')
          .select('badge_id,badge_name,awarded_at')
          .eq('user_id', uid).order('awarded_at', { ascending: false });
        if (!res || res.error || !Array.isArray(res.data)) return [];
        return res.data.map(function (r) {
          return { badgeId: r.badge_id, badgeName: r.badge_name, at: r.awarded_at };
        });
      } catch (e) { return []; }
    },

    /* ===== الجدول الأسبوعي ===== */
    getSchedule: async function () {
      var uid = currentUid();
      if (!uid) {
        try {
          var s = safeGet(K_SCHEDULE, null);
          var d = safeGet(K_SCHEDULE_DONE, null);
          if (s === null && d === null) return null;
          return { schedule: s || {}, done: d || {} };
        } catch (e) { return null; }
      }
      try {
        var res = await supa.from('student_schedules')
          .select('schedule,done').eq('user_id', uid).maybeSingle();
        if (!res || res.error || !res.data) return null;
        return { schedule: res.data.schedule || {}, done: res.data.done || {} };
      } catch (e) { return null; }
    },
    saveSchedule: async function (schedule, done) {
      var uid = currentUid();
      if (!uid) {
        try {
          safeSet(K_SCHEDULE, schedule || {});
          safeSet(K_SCHEDULE_DONE, done || {});
          return true;
        } catch (e) { return false; }
      }
      try {
        var res = await supa.from('student_schedules').upsert({
          user_id: uid, schedule: schedule || {}, done: done || {}
        }, { onConflict: 'user_id' });
        return !(res && res.error);
      } catch (e) { return false; }
    },

    /* ===== الملف الشخصي ===== */
    getProfile: async function () {
      var uid = currentUid();
      if (!uid) return null;
      try {
        var res = await supa.from('profiles')
          .select('stage,grade,display_name,role,dob')
          .eq('id', uid).maybeSingle();
        if (!res || res.error) return null;
        return res.data || null;
      } catch (e) { return null; }
    },
    /* ===== تحديث الملف الشخصي (المرحلة/الصف) =====
       يكتب فقط الحقول الممرَّرة؛ لا يرمي أبداً — الفشل يعني أن
       الاختيار المحلي يبقى هو المصدر، ولا تتوقف واجهة المستخدم. */
    updateProfile: async function (fields) {
      var uid = currentUid();
      if (!uid) return false;
      try {
        if (!supa) return false;
        var patch = {};
        if (fields && fields.stage !== undefined && fields.stage !== null && fields.stage !== '') patch.stage = String(fields.stage);
        if (fields && fields.grade !== undefined && fields.grade !== null && fields.grade !== '') patch.grade = String(fields.grade);
        if (fields && fields.display_name !== undefined && fields.display_name !== null && fields.display_name !== '') patch.display_name = String(fields.display_name);
        if (Object.keys(patch).length === 0) return false;
        var res = await supa.from('profiles').update(patch).eq('id', uid);
        return !(res && res.error);
      } catch (e) { return false; }
    }
  };

  SANAD.store = store;

  /* ===== تفضيل الصف (الواجهة الأولى — «أي صف أنت؟») =====
     يُحفظ محلياً بالمفتاح sanad_my_grade، ويُزامَن مع صف الطالب
     في الملف الشخصي عند تسجيل الدخول. لا يوقف واجهة المستخدم أبداً. */
  var K_MY_GRADE = 'sanad_my_grade';
  var gradePref = {
    key: K_MY_GRADE,
    get: function () {
      var raw = safeGet(K_MY_GRADE, null);
      if (!raw || typeof raw !== 'object') return null;
      if (!raw.stage || !raw.grade) return null;
      return raw;
    },
    resolve: function (stageId, gradeId) {
      try {
        var stages = (window.SANAD_DATA && window.SANAD_DATA.stages) || [];
        for (var i = 0; i < stages.length; i++) {
          if (stages[i].id !== stageId) continue;
          var grades = stages[i].grades || [];
          for (var j = 0; j < grades.length; j++) {
            var g = grades[j];
            if (typeof g === 'string') {
              if (g === gradeId) return { stage: stageId, grade: gradeId, stageName: stages[i].name || '', gradeName: g };
              continue;
            }
            if (g.id === gradeId || g.name === gradeId) {
              return { stage: stageId, grade: g.id || g.name, stageName: stages[i].name || '', gradeName: g.name || g.id };
            }
          }
        }
      } catch (e) { /* تجاهل */ }
      return null;
    },
    /* الملف الشخصي يخزّن الأسماء (كما في التسجيل)، فنحلّها إلى معرّفات. */
    resolveByNames: function (stageName, gradeName) {
      try {
        var stages = (window.SANAD_DATA && window.SANAD_DATA.stages) || [];
        for (var i = 0; i < stages.length; i++) {
          if (stages[i].name !== stageName && stages[i].id !== stageName) continue;
          var grades = stages[i].grades || [];
          for (var j = 0; j < grades.length; j++) {
            var g = grades[j];
            if (typeof g === 'string') {
              if (g === gradeName) return { stage: stages[i].id, grade: gradeName, stageName: stages[i].name || '', gradeName: gradeName };
              continue;
            }
            if (g.name === gradeName || g.id === gradeName) {
              return { stage: stages[i].id, grade: g.id || g.name, stageName: stages[i].name || '', gradeName: g.name || g.id };
            }
          }
        }
      } catch (e) { /* تجاهل */ }
      return null;
    },
    set: function (stageId, gradeId) {
      var resolved = this.resolve(stageId, gradeId);
      if (!resolved) return null;
      safeSet(K_MY_GRADE, resolved);
      /* مزامنة مع الملف الشخصي عند تسجيل الدخول — دون انتظار ولا حظر.
         إن لم تكن الجلسة جاهزة بعد، تُعاد المحاولة فور جاهزيتها. */
      try {
        var writeProfile = function () {
          if (store && store.user && typeof store.updateProfile === 'function') {
            store.updateProfile({ stage: resolved.stageName, grade: resolved.gradeName })
              .then(function () {}, function () { /* فشل صامت */ });
          }
        };
        if (store && store.user) writeProfile();
        else if (store && store.ready && typeof store.ready.then === 'function') {
          store.ready.then(writeProfile, function () { /* تجاهل */ });
        }
      } catch (e) { /* تجاهل */ }
      return resolved;
    },
    clear: function () {
      try { window.localStorage.removeItem(K_MY_GRADE); } catch (e) { /* تجاهل */ }
    },
    /* يملأ التفضيل المحلي من الملف الشخصي فقط عندما لا يوجد تفضيل محلي —
       فاختيار الطالب على هذا الجهاز يبقى هو الأحدث دائماً. */
    syncFromProfile: async function () {
      try {
        var existing = this.get();
        if (existing) return existing;
        if (!store || !store.ready) return null;
        await store.ready;
        if (!store.user || typeof store.getProfile !== 'function') return null;
        var profile = await store.getProfile();
        if (!profile || !profile.stage || !profile.grade) return null;
        var resolved = this.resolveByNames(profile.stage, profile.grade);
        if (!resolved) return null;
        safeSet(K_MY_GRADE, resolved);
        return resolved;
      } catch (e) { return null; }
    }
  };
  SANAD.gradePref = gradePref;

  /* حلّ الجلسة مرة واحدة عند التحميل + ترحيل البيانات المحلية بعد تسجيل الدخول.
     صامت تماماً إن لم يوجد عميل Supabase أو لم يكن المستخدم مسجّلاً. */
  store.ready = (async function () {
    try {
      if (!supa) return null;
      var res = await supa.auth.getUser();
      var u = (res && res.data) ? (res.data.user || null) : null;
      store.user = u;
      if (u) migrateLocalData(u.id);
      return u;
    } catch (e) { return null; }
  })();

  try {
    if (supa) {
      supa.auth.onAuthStateChange(function (event, session) {
        try {
          var u = (session && session.user) ? session.user : null;
          store.user = u;
          if (u && event === 'SIGNED_IN') migrateLocalData(u.id);
        } catch (e) { /* تجاهل */ }
      });
    }
  } catch (e) { /* تجاهل */ }

  /* ===== قارئ PDF داخل الموقع (reader.html) =====
     كل كتاب/ملزمة يُفتح عبر reader.html — لا روابط مباشرة لملفات PDF في البطاقات.
     يبني رابط القارئ مع بيانات الكتاب (العنوان/المصدر/الحقوق/السنة)؛ والقارئ نفسه
     يكمل أي حقل ناقص بالبحث عن مسار PDF في data.js. */
  function readerUrl(pdf, meta) {
    if (!pdf) return '';
    var p = new URLSearchParams();
    p.set('pdf', pdf);
    if (meta) {
      if (meta.title) p.set('title', meta.title);
      if (meta.source) p.set('source', meta.source);
      if (meta.rights) p.set('rights', meta.rights);
      if (meta.year !== undefined && meta.year !== null && meta.year !== '') p.set('year', String(meta.year));
    }
    return 'reader.html?' + p.toString();
  }
  SANAD.readerUrl = readerUrl;

  /* ===== مشغّل المحاضرات داخل الموقع =====
     المحاضرات تُشغَّل داخل سند فقط — لا تحويل إلى يوتيوب.
     الفيديو نفسه يُبثّ من قناة المدرس الرسمية عبر مشغّل يوتيوب المضمّن
     (youtube-nocookie)، والتشغيل يبدأ بالنقر فقط فلا تُحمَّل المشغّلات مسبقاً. */
  function lectureEmbedSrc(l) {
    if (!l) return '';
    if (l.youtubeId) return 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(l.youtubeId);
    if (l.playlistId) return 'https://www.youtube-nocookie.com/embed/videoseries?list=' + encodeURIComponent(l.playlistId);
    return '';
  }
  function escAttr(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  /* صورة مصغّرة قابلة للنقر: صورة يوتيوب للفيديو المنفرد،
     ولوحة ملوّنة لقائمة التشغيل (بلا جلب صورة). */
  function lectureThumbHtml(l, title) {
    var src = lectureEmbedSrc(l);
    if (!src) return '';
    var inner;
    if (l.youtubeId) {
      inner = '<img src="https://i.ytimg.com/vi/' + encodeURIComponent(l.youtubeId) + '/hqdefault.jpg" alt="" loading="lazy">' +
        '<span class="lecture-play" aria-hidden="true"><i></i></span>';
    } else {
      inner = '<span class="lecture-playlist-label">قائمة تشغيل</span>' +
        '<span class="lecture-play" aria-hidden="true"><i></i></span>';
    }
    return '<button type="button" class="lecture-thumb" data-embed="' + escAttr(src) + '" data-title="' + escAttr(title || 'محاضرة') + '" data-grade="' + escAttr(l.grade || '') + '" data-subject="' + escAttr(l.subject || '') + '" data-youtube-id="' + escAttr(l.youtubeId || '') + '" data-playlist-id="' + escAttr(l.playlistId || '') + '" aria-label="تشغيل: ' + escAttr(title || 'محاضرة') + '">' + inner + '</button>';
  }
  /* «أكمل من حيث توقفت»: تُحفظ آخر محاضرة شُغّلت ليعود إليها الطالب من الرئيسية */
  var K_LAST_LESSON = 'sanad_last_lesson';
  function saveLastLesson(info) {
    if (!info || !info.title) return;
    var rec = {
      title: info.title,
      grade: info.grade || '',
      subject: info.subject || '',
      youtubeId: info.youtubeId || '',
      playlistId: info.playlistId || '',
      href: ''
    };
    try { rec.href = window.location.pathname + window.location.search; } catch (e) { rec.href = ''; }
    safeSet(K_LAST_LESSON, rec);
  }
  function lessonInfoFromEmbed(title, src, extra) {
    var info = { title: title || 'محاضرة', grade: '', subject: '', youtubeId: '', playlistId: '' };
    if (extra) {
      if (extra.grade) info.grade = extra.grade;
      if (extra.subject) info.subject = extra.subject;
      if (extra.youtubeId) info.youtubeId = extra.youtubeId;
      if (extra.playlistId) info.playlistId = extra.playlistId;
    }
    if (src) {
      var m = src.match(/\/embed\/([^?\/]+)/);
      if (m && m[1] !== 'videoseries') info.youtubeId = info.youtubeId || decodeURIComponent(m[1]);
      var lm = src.match(/[?&]list=([^&]+)/);
      if (lm) info.playlistId = info.playlistId || decodeURIComponent(lm[1]);
    }
    return info;
  }
  /* تشغيل بالنقر داخل البطاقة: يستبدل الصورة المصغّرة بالمشغّل ويشغّل تلقائياً */
  function playLectureInPlace(btn) {
    if (!btn) return;
    var src = btn.getAttribute('data-embed') || '';
    if (!src) return;
    saveLastLesson(lessonInfoFromEmbed(btn.getAttribute('data-title'), src, {
      grade: btn.getAttribute('data-grade'),
      subject: btn.getAttribute('data-subject'),
      youtubeId: btn.getAttribute('data-youtube-id'),
      playlistId: btn.getAttribute('data-playlist-id')
    }));
    var wrap = document.createElement('div');
    wrap.className = 'video-wrap';
    var sep = src.indexOf('?') === -1 ? '?' : '&';
    var frame = document.createElement('iframe');
    frame.setAttribute('src', src + sep + 'autoplay=1');
    frame.setAttribute('title', btn.getAttribute('data-title') || 'محاضرة');
    frame.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    frame.setAttribute('allowfullscreen', '');
    wrap.appendChild(frame);
    if (btn.parentNode) btn.parentNode.replaceChild(wrap, btn);
  }
  /* نافذة منبثقة لتشغيل محاضرة (تُستخدم في الرئيسية): الإغلاق يوقف التشغيل */
  function openLecturePlayer(title, src, meta) {
    if (!src) return;
    saveLastLesson(lessonInfoFromEmbed(title, src, meta));
    var modal = document.getElementById('sanad-lecture-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'sanad-lecture-modal';
      modal.className = 'lecture-modal';
      modal.innerHTML = '<div class="lecture-modal-box"><div class="lecture-modal-head"><h3 id="sanad-lecture-modal-title"></h3><button type="button" class="lecture-modal-close" aria-label="إغلاق">×</button></div><div class="video-wrap"><iframe id="sanad-lecture-modal-frame" src="" title="محاضرة" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div></div>';
      document.body.appendChild(modal);
      modal.querySelector('.lecture-modal-close').addEventListener('click', closeLecturePlayer);
      modal.addEventListener('click', function (e) { if (e.target === modal) closeLecturePlayer(); });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLecturePlayer(); });
    }
    var titleEl = document.getElementById('sanad-lecture-modal-title');
    if (titleEl) titleEl.textContent = title || 'محاضرة';
    var frame = document.getElementById('sanad-lecture-modal-frame');
    if (frame) {
      var sep = src.indexOf('?') === -1 ? '?' : '&';
      frame.setAttribute('src', src + sep + 'autoplay=1');
      frame.setAttribute('title', title || 'محاضرة');
    }
    modal.classList.add('open');
  }
  function closeLecturePlayer() {
    var modal = document.getElementById('sanad-lecture-modal');
    if (!modal) return;
    var frame = document.getElementById('sanad-lecture-modal-frame');
    if (frame) frame.setAttribute('src', '');
    modal.classList.remove('open');
  }
  SANAD.lectureEmbedSrc = lectureEmbedSrc;
  SANAD.lectureThumbHtml = lectureThumbHtml;
  SANAD.playLectureInPlace = playLectureInPlace;
  SANAD.openLecturePlayer = openLecturePlayer;
  SANAD.closeLecturePlayer = closeLecturePlayer;

  /* ===== نموذج الدورات (Marmaz-style): كورس = مادة في صف لمدرس واحد =====
     مشتق من المحاضرات في data.js فقط؛ لا بيانات وهمية. الفصول من
     window.SANAD_CHAPTERS (chapters.js) والأسئلة من window.SANAD_QUIZ_MAP. */
  var CHANNEL_NAMES = ['التلفزيون التربوي العراقي', 'منصة نيوتن', 'منصة سند', 'المدرسة الإلكترونية', 'وزارة التربية العراقية', 'مدرسة العراق', 'المنصة التعليمية العراقية'];
  var CH_WORD = { 'الأول': 1, 'الثاني': 2, 'الثالث': 3, 'الرابع': 4, 'الخامس': 5, 'السادس': 6, 'السابع': 7, 'الثامن': 8, 'التاسع': 9, 'العاشر': 10 };
  var CH_WORD_FEM = { 'الأولى': 1, 'الثانية': 2, 'الثالثة': 3, 'الرابعة': 4, 'الخامسة': 5, 'السادسة': 6, 'السابعة': 7, 'الثامنة': 8, 'التاسعة': 9, 'العاشرة': 10 };
  var CH_WORD_BY_NUM = ['', 'الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس', 'السادس', 'السابع', 'الثامن', 'التاسع', 'العاشر'];
  var CH_WORD_FEM_BY_NUM = ['', 'الأولى', 'الثانية', 'الثالثة', 'الرابعة', 'الخامسة', 'السادسة', 'السابعة', 'الثامنة', 'التاسعة', 'العاشرة'];
  function chWordToNum(s) {
    if (s == null) return null;
    s = String(s).trim();
    if (CH_WORD[s]) return CH_WORD[s];
    if (CH_WORD_FEM[s]) return CH_WORD_FEM[s];
    var digits = s.replace(/[٠-٩]/g, function (d) { return '٠١٢٣٤٥٦٧٨٩'.indexOf(d); });
    if (/^[0-9]+$/.test(digits)) return parseInt(digits, 10);
    return null;
  }
  /* فصل المحاضرة: من حقل chapter الصريح أولاً، ثم من العنوان. null = محاضرة عامة. */
  function chapterOfLesson(l) {
    if (!l) return null;
    var src = ((l.chapter || '') + ' ' + (l.title || '')).replace(/\s+/g, ' ');
    var m = src.match(/الفصل\s*(الأول|الثاني|الثالث|الرابع|الخامس|السادس|السابع|الثامن|التاسع|العاشر|[0-9٠-٩]+)/);
    if (m) { var n = chWordToNum(m[1]); if (n) return { num: n, kind: 'ch', label: 'الفصل ' + (CH_WORD_BY_NUM[n] || n) }; }
    var u = src.match(/يونت\s*([0-9٠-٩]+)/i);
    if (u) { var un = chWordToNum(u[1]); if (un) return { num: un, kind: 'unit', label: 'يونت ' + un }; }
    var w = src.match(/الوحدة\s*(الأولى|الثانية|الثالثة|الرابعة|الخامسة|السادسة|السابعة|الثامنة|التاسعة|العاشرة|[0-9٠-٩]+)/);
    if (w) { var wn = chWordToNum(w[1]); if (wn) return { num: wn, kind: 'unit', label: 'الوحدة ' + (CH_WORD_FEM_BY_NUM[wn] || wn) }; }
    return null;
  }
  var _coursesCache = null;
  function buildCourses() {
    if (_coursesCache) return _coursesCache;
    var data = window.SANAD_DATA || { lessons: [], stages: [] };
    var stageByGrade = {};
    (data.stages || []).forEach(function (st) {
      (st.grades || []).forEach(function (g) {
        var gid = (typeof g === 'string') ? g : g.id;
        var gname = (typeof g === 'string') ? g : (g.name || g.id);
        stageByGrade[gname] = { stageId: st.id, stageName: st.name, gradeId: gid, gradeName: gname };
      });
    });
    var map = {};
    (data.lessons || []).forEach(function (l) {
      if (!l || !l.grade || !l.subject || !l.teacher) return;
      var key = [l.grade, l.subject, l.teacher].join('');
      if (!map[key]) {
        var info = stageByGrade[l.grade] || { stageId: '', stageName: '', gradeId: l.grade, gradeName: l.grade };
        map[key] = { grade: l.grade, gradeId: info.gradeId, stageId: info.stageId, stageName: info.stageName, subject: l.subject, teacher: l.teacher, lessons: [] };
      }
      map[key].lessons.push(l);
    });
    var list = Object.keys(map).map(function (k) { return map[k]; });
    list.forEach(function (c) {
      c.isChannel = CHANNEL_NAMES.indexOf(c.teacher) !== -1;
      c.lessons.sort(function (a, b) {
        var ca = chapterOfLesson(a), cb = chapterOfLesson(b);
        var na = ca ? ca.num : 999, nb = cb ? cb.num : 999;
        if (na !== nb) return na - nb;
        return String(a.title || '').localeCompare(String(b.title || ''), 'ar');
      });
      var chSet = {};
      c.lessons.forEach(function (l) { var ch = chapterOfLesson(l); if (ch) chSet[ch.kind + ':' + ch.num] = true; });
      c.chapterCount = Object.keys(chSet).length;
      c.totalLessons = c.lessons.length;
    });
    list.sort(function (a, b) { return b.totalLessons - a.totalLessons || String(a.teacher).localeCompare(String(b.teacher), 'ar'); });
    _coursesCache = list;
    return list;
  }
  function canonicalChapters(course, bookVariant) {
    if (!course) return null;
    var map = window.SANAD_CHAPTERS || {};
    var byGrade = map[course.gradeId] || {};
    if (course.gradeId === 'r6' && course.subject === 'الرياضيات' && bookVariant === 'adabi' && byGrade['الرياضيات (أدبي)']) {
      return byGrade['الرياضيات (أدبي)'];
    }
    return byGrade[course.subject] || null;
  }
  function groupCourseLessons(course, bookVariant) {
    var groups = {};
    var general = [];
    (course.lessons || []).forEach(function (l) {
      var ch = chapterOfLesson(l);
      if (!ch) { general.push(l); return; }
      var k = ch.kind + ':' + ch.num;
      if (!groups[k]) groups[k] = { chapter: ch, lessons: [] };
      groups[k].lessons.push(l);
    });
    var canon = canonicalChapters(course, bookVariant);
    var ordered = [];
    if (canon) {
      var kind = canon.kind === 'الوحدة' ? 'unit' : 'ch';
      canon.chapters.forEach(function (cc) {
        var k = kind + ':' + cc.n;
        var g = groups[k];
        ordered.push({
          n: cc.n, kind: kind, title: cc.title, page: (cc.page == null ? null : cc.page),
          deleted: !!cc.deleted, note: cc.note || null, lessons: g ? g.lessons : [], canonical: true
        });
        if (g) delete groups[k];
      });
    }
    var rest = Object.keys(groups).map(function (k) { return groups[k]; });
    rest.sort(function (a, b) { return a.chapter.num - b.chapter.num; });
    rest.forEach(function (g) {
      ordered.push({ n: g.chapter.num, kind: g.chapter.kind, title: g.chapter.label, page: null, deleted: false, note: null, lessons: g.lessons, canonical: false });
    });
    return { groups: ordered, general: general, book: canon };
  }
  function courseUrl(course) {
    return 'course.html?grade=' + encodeURIComponent(course.gradeId) + '&subject=' + encodeURIComponent(course.subject) + '&teacher=' + encodeURIComponent(course.teacher);
  }
  function parseCourseParams() {
    var q = { grade: '', subject: '', teacher: '', book: '' };
    try {
      var p = new URLSearchParams(window.location.search);
      ['grade', 'subject', 'teacher', 'book'].forEach(function (k) { q[k] = p.get(k) || ''; });
    } catch (e) {}
    return q;
  }
  function findCourse(gradeId, subject, teacher) {
    var list = buildCourses();
    for (var i = 0; i < list.length; i++) {
      var c = list[i];
      if (c.gradeId === gradeId && c.subject === subject && c.teacher === teacher) return c;
    }
    return null;
  }
  /* أسئلة الامتحانات الوزارية لهذا الكورس، مجمّعة حسب الفصل (من SANAD_QUIZ_MAP). */
  function courseQuizQuestions(course) {
    var data = window.SANAD_DATA || { exams: [] };
    var qmap = window.SANAD_QUIZ_MAP || {};
    var out = {};
    (data.exams || []).forEach(function (e) {
      if (!e || e.grade !== course.grade || e.subject !== course.subject) return;
      var m = qmap[e.id] || {};
      (e.questions || []).forEach(function (q, i) {
        var ch = m[String(i)];
        if (!ch) return;
        (out[ch] = out[ch] || []).push({ examId: e.id, examTitle: e.title || e.id, qIndex: i, q: q });
      });
    });
    return out;
  }
  /* بطاقة كورس واحدة (مشتركة بين الرئيسية وصفحة الدورات وصفحة الكورس). */
  function escCourseHtml(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function courseCardHtml(c) {
    var initial = (c.teacher || '?').trim().charAt(0) || '?';
    var teacherLabel = c.isChannel ? escCourseHtml(c.teacher) + ' (قناة رسمية)' : escCourseHtml(c.teacher);
    return '<article class="course-card">' +
      '<div class="course-cover"><span class="course-avatar">' + escCourseHtml(initial) + '</span>' +
      '<h3 class="course-title">' + escCourseHtml(c.subject) + ' — ' + escCourseHtml(c.grade) + '</h3></div>' +
      '<div class="course-body">' +
      '<div class="course-pills"><span class="pill-teacher">' + teacherLabel + '</span>' +
      '<span class="pill-subject">' + escCourseHtml(c.subject) + '</span>' +
      '<span class="pill-grade">' + escCourseHtml(c.grade) + '</span></div>' +
      '<p class="course-meta">' + c.totalLessons + ' محاضرة · ' + c.chapterCount + ' فصلاً' + (c.isChannel ? ' · قناة رسمية' : '') + '</p>' +
      '<div class="course-foot"><span class="price-free">مجاني</span>' +
      '<a class="btn btn-blue" href="' + escCourseHtml(courseUrl(c)) + '">ابدأ الكورس</a></div>' +
      '</div></article>';
  }
  SANAD.courses = {
    buildCourses: buildCourses,
    chapterOfLesson: chapterOfLesson,
    canonicalChapters: canonicalChapters,
    groupCourseLessons: groupCourseLessons,
    courseUrl: courseUrl,
    parseCourseParams: parseCourseParams,
    findCourse: findCourse,
    courseQuizQuestions: courseQuizQuestions,
    courseCardHtml: courseCardHtml,
    CHANNEL_NAMES: CHANNEL_NAMES
  };

  /* ===== الوضع الداكن/الفاتح + شريط التنقل السفلي للجوال =====
     يُحقنان من هنا ليعملا في كل صفحة دون تحرير 29 ملفاً.
     السمة محفوظة في localStorage بالمفتاح sanad_theme ('light'/'dark'، الافتراضي 'light'). */
  var K_THEME = 'sanad_theme';
  var BOTTOM_NAV = [
    { href: 'index.html', label: 'الرئيسية', file: 'index.html' },
    { href: 'courses.html', label: 'الدورات', file: 'courses.html' },
    { href: 'lessons.html', label: 'الأساتذة', file: 'lessons.html' },
    { href: 'exams.html', label: 'الامتحانات', file: 'exams.html' },
    { href: 'teacher.html', label: 'المعلم الذكي', file: 'teacher.html' },
    { href: 'profile.html', label: 'ملفي', file: 'profile.html' }
  ];
  /* الشريط العلوي الموحّد: الدورات هي المدخل الرئيسي (الرئيسية / الدورات /
     الأساتذة / المكتبة / الامتحانات / المعلم الذكي / ملفي). */
  var MAIN_NAV = [
    { href: 'index.html', label: 'الرئيسية', file: 'index.html' },
    { href: 'courses.html', label: 'الدورات', file: 'courses.html' },
    { href: 'lessons.html', label: 'الأساتذة', file: 'lessons.html' },
    { href: 'library.html', label: 'المكتبة', file: 'library.html' },
    { href: 'exams.html', label: 'الامتحانات', file: 'exams.html' },
    { href: 'teacher.html', label: 'المعلم الذكي', file: 'teacher.html' },
    { href: 'profile.html', label: 'ملفي', file: 'profile.html' }
  ];
  function initMainNav() {
    var nav = document.querySelector('.main-nav');
    if (!nav) return;
    var file = currentFileName();
    nav.innerHTML = '';
    MAIN_NAV.forEach(function (item) {
      var a = document.createElement('a');
      a.className = 'nav-link' + (item.file === file ? ' active' : '');
      a.href = item.href;
      a.textContent = item.label;
      nav.appendChild(a);
    });
  }
  function currentFileName() {
    var file = (window.location.pathname.split('/').pop() || 'index.html').split('?')[0].split('#')[0];
    return file || 'index.html';
  }
  function applyTheme(theme) {
    var t = (theme === 'dark') ? 'dark' : 'light';
    try { document.documentElement.setAttribute('data-theme', t); } catch (e) {}
    try { window.localStorage.setItem(K_THEME, t); } catch (e) {}
    var btn = document.querySelector('.theme-toggle');
    if (btn) btn.textContent = (t === 'dark') ? 'الوضع الفاتح' : 'الوضع الداكن';
    return t;
  }
  function initTheme() {
    var saved = 'light';
    try { saved = window.localStorage.getItem(K_THEME) || 'light'; } catch (e) { saved = 'light'; }
    if (saved !== 'dark' && saved !== 'light') saved = 'light';
    applyTheme(saved);
    if (!document.querySelector('.theme-toggle')) {
      var header = document.querySelector('.site-header .header-inner') || document.querySelector('.site-header');
      if (header) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'theme-toggle';
        btn.setAttribute('aria-label', 'تبديل الوضع الداكن والفاتح');
        btn.addEventListener('click', function () {
          var cur = document.documentElement.getAttribute('data-theme') || 'light';
          applyTheme(cur === 'dark' ? 'light' : 'dark');
        });
        header.appendChild(btn);
        applyTheme(saved);
      }
    }
  }
  function initBottomNav() {
    if (document.querySelector('.bottom-nav')) return;
    var nav = document.createElement('nav');
    nav.className = 'bottom-nav';
    nav.setAttribute('aria-label', 'التنقل السفلي');
    var file = currentFileName();
    BOTTOM_NAV.forEach(function (item) {
      var a = document.createElement('a');
      a.href = item.href;
      a.textContent = item.label;
      if (item.file === file) a.classList.add('active');
      nav.appendChild(a);
    });
    document.body.appendChild(nav);
  }

  /* ===== تهيئة الصفحة ===== */
  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    initMainNav();
    initBottomNav();
    // تمييز الرابط النشط حسب اسم الملف الحالي
    var file = currentFileName();
    var links = document.querySelectorAll('.main-nav .nav-link');
    links.forEach(function (a) {
      var href = (a.getAttribute('href') || '').split('?')[0];
      if (href === file) a.classList.add('active');
    });

    // سنة الحقوق في التذييل
    var yearEls = document.querySelectorAll('[data-year]');
    yearEls.forEach(function (el) { el.textContent = new Date().getFullYear(); });
  });
})();
