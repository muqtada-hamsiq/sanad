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

  /* ===== تهيئة الصفحة ===== */
  document.addEventListener('DOMContentLoaded', function () {
    // تمييز الرابط النشط حسب اسم الملف الحالي
    var file = (window.location.pathname.split('/').pop() || 'index.html').split('?')[0].split('#')[0];
    if (!file) file = 'index.html';
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
