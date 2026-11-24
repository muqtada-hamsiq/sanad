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

  /* ===== الوضع الداكن/الفاتح + شريط التنقل السفلي للجوال =====
     يُحقنان من هنا ليعملا في كل صفحة دون تحرير 29 ملفاً.
     السمة محفوظة في localStorage بالمفتاح sanad_theme ('light'/'dark'، الافتراضي 'light'). */
  var K_THEME = 'sanad_theme';
  var BOTTOM_NAV = [
    { href: 'index.html', label: 'الرئيسية', file: 'index.html' },
    { href: 'stages.html', label: 'المراحل', file: 'stages.html' },
    { href: 'lessons.html', label: 'الدروس', file: 'lessons.html' },
    { href: 'exams.html', label: 'الامتحانات', file: 'exams.html' },
    { href: 'teacher.html', label: 'المعلم الذكي', file: 'teacher.html' },
    { href: 'profile.html', label: 'ملفي', file: 'profile.html' }
  ];
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
