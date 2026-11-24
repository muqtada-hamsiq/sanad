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
    return '<button type="button" class="lecture-thumb" data-embed="' + escAttr(src) + '" data-title="' + escAttr(title || 'محاضرة') + '" aria-label="تشغيل: ' + escAttr(title || 'محاضرة') + '">' + inner + '</button>';
  }
  /* تشغيل بالنقر داخل البطاقة: يستبدل الصورة المصغّرة بالمشغّل ويشغّل تلقائياً */
  function playLectureInPlace(btn) {
    if (!btn) return;
    var src = btn.getAttribute('data-embed') || '';
    if (!src) return;
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
  function openLecturePlayer(title, src) {
    if (!src) return;
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
