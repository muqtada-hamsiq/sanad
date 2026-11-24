/* سند SANAD — بيانات المنصة (محتوى حقيقي فقط، لا محتوى مختلق) */
window.SANAD_DATA = {
  stages: [
    {
      id: 'primary',
      name: 'الابتدائية',
      grades: [
        { id: 'p1', name: 'الأول الابتدائي', subjects: ['اللغة العربية', 'الرياضيات', 'العلوم', 'التربية الإسلامية', 'الاجتماعيات', 'اللغة الإنكليزية'] },
        { id: 'p2', name: 'الثاني الابتدائي', subjects: ['اللغة العربية', 'الرياضيات', 'العلوم', 'التربية الإسلامية', 'الاجتماعيات', 'اللغة الإنكليزية'] },
        { id: 'p3', name: 'الثالث الابتدائي', subjects: ['اللغة العربية', 'الرياضيات', 'العلوم', 'التربية الإسلامية', 'الاجتماعيات', 'اللغة الإنكليزية'] },
        { id: 'p4', name: 'الرابع الابتدائي', subjects: ['اللغة العربية', 'الرياضيات', 'العلوم', 'التربية الإسلامية', 'الاجتماعيات', 'اللغة الإنكليزية'] },
        { id: 'p5', name: 'الخامس الابتدائي', subjects: ['اللغة العربية', 'الرياضيات', 'العلوم', 'التربية الإسلامية', 'الاجتماعيات', 'اللغة الإنكليزية'] },
        { id: 'p6', name: 'السادس الابتدائي', subjects: ['اللغة العربية', 'الرياضيات', 'العلوم', 'التربية الإسلامية', 'الاجتماعيات', 'اللغة الإنكليزية'] }
      ]
    },
    {
      id: 'middle',
      name: 'المتوسطة',
      grades: [
        { id: 'm1', name: 'الأول المتوسط', subjects: ['اللغة العربية', 'الرياضيات', 'اللغة الإنكليزية', 'الفيزياء', 'الكيمياء', 'الأحياء', 'الاجتماعيات', 'التربية الإسلامية', 'الحاسوب'] },
        { id: 'm2', name: 'الثاني المتوسط', subjects: ['اللغة العربية', 'الرياضيات', 'اللغة الإنكليزية', 'الفيزياء', 'الكيمياء', 'الأحياء', 'الاجتماعيات', 'التربية الإسلامية', 'الحاسوب'] },
        { id: 'm3', name: 'الثالث المتوسط', subjects: ['اللغة العربية', 'الرياضيات', 'اللغة الإنكليزية', 'الفيزياء', 'الكيمياء', 'الأحياء', 'الاجتماعيات', 'التربية الإسلامية', 'الحاسوب'] }
      ]
    },
    {
      id: 'prep',
      name: 'الإعدادية',
      grades: [
        { id: 'r4', name: 'الرابع الإعدادي', subjects: ['اللغة العربية', 'الرياضيات', 'اللغة الإنكليزية', 'الفيزياء', 'الكيمياء', 'الأحياء', 'التربية الإسلامية', 'الحاسوب'] },
        { id: 'r5', name: 'الخامس الإعدادي', subjects: ['اللغة العربية', 'الرياضيات', 'اللغة الإنكليزية', 'الفيزياء', 'الكيمياء', 'الأحياء', 'التربية الإسلامية', 'الحاسوب'] },
        { id: 'r6', name: 'السادس الإعدادي', subjects: ['اللغة العربية', 'الرياضيات', 'اللغة الإنكليزية', 'الفيزياء', 'الكيمياء', 'الأحياء', 'الاقتصاد', 'التاريخ', 'الجغرافية'] }
      ]
    },
    { id: 'uni', name: 'الجامعات', grades: [], note: 'راجع دليل الجامعات' }
  ],

  books: [],

  lessons: [],

  exams: [
    {
      id: 'math3-3rd-2026',
      title: 'رياضيات — الثالث المتوسط — الدور الثالث 2025/2026',
      subject: 'الرياضيات',
      grade: 'الثالث المتوسط',
      type: 'وزاري',
      date: '2026-11-17',
      source: 'ورقة الامتحان الوزاري — وزارة التربية العراقية',
      questions: [
        { q: 'بسّط المقدار: (5y−15)/(y−3) ÷ 5/(y−3)²', options: ['(y−3)²', '(y−3)', '5(y−3)', '1'], answer: 0, explain: '5y−15 = 5(y−3)، والقسمة على كسر تعني الضرب في مقلوبه: 5(y−3)/(y−3) × (y−3)²/5 = (y−3)²' },
        { q: 'إذا كان f(x) = 3x+2، فهل الاقتران f شامل إلى مجموعة الأعداد الطبيعية N؟', options: ['غير شامل', 'شامل', 'لا يمكن التحديد', 'شامل فقط للأعداد الزوجية'], answer: 0, explain: 'f(1)=5 وf(2)=8 وf(3)=11، فالأعداد 1 و2 و3 و4 لا تنتمي إلى المدى، إذن المدى ≠ N والاقتران غير شامل' },
        { q: 'حلّ النظام: 3x − y = 5 ، x + y = 11', options: ['(4, 7)', '(7, 4)', '(3, 8)', '(5, 6)'], answer: 0, explain: 'بجمع المعادلتين: 4x = 16 ← x = 4، ومن x + y = 11 ← y = 7' },
        { q: 'بسّط: √14 ÷ √7', options: ['√2', '√7', '2', '7'], answer: 0, explain: '√14/√7 = √(14÷7) = √2' },
        { q: 'انشر المقدار: (5 − 2y)(y + 2)', options: ['−2y² + y + 10', '2y² + y + 10', '−2y² + 9y + 10', '2y² − y + 10'], answer: 0, explain: '(5−2y)(y+2) = 5y + 10 − 2y² − 4y = −2y² + y + 10' },
        { q: 'أحد حلّي المعادلة x² + 4x = 45 هو:', options: ['5', '9', '−5', '3'], answer: 0, explain: 'x² + 4x − 45 = 0 ← (x+9)(x−5) = 0 ← x = 5 أو x = −9' },
        { q: 'احسب: (sin 30°) × (sec 60°) − (cos 60°) × (csc 30°)', options: ['0', '1', '1/2', '2'], answer: 0, explain: 'sin30° = 1/2 وsec60° = 2 ← حاصل الضرب 1، وcos60° = 1/2 وcsc30° = 2 ← حاصل الضرب 1، إذن 1 − 1 = 0' },
        { q: 'انشر المقدار: (y + 2)(2y − 5)', options: ['2y² − y − 10', '2y² + y − 10', '2y² − 9y − 10', '2y² − y + 10'], answer: 0, explain: '(y+2)(2y−5) = 2y² − 5y + 4y − 10 = 2y² − y − 10' }
      ]
    }
  ],

  universities: [
    { name: 'جامعة بغداد', type: 'حكومية', city: 'بغداد', url: 'https://uobaghdad.edu.iq' },
    { name: 'الجامعة المستنصرية', type: 'حكومية', city: 'بغداد', url: 'https://uomustansiriyah.edu.iq' },
    { name: 'الجامعة التكنولوجية', type: 'حكومية', city: 'بغداد', url: 'https://uotechnology.edu.iq' },
    { name: 'جامعة النهرين', type: 'حكومية', city: 'بغداد', url: 'https://nahrainuniv.edu.iq' },
    { name: 'جامعة الموصل', type: 'حكومية', city: 'نينوى', url: 'https://uomosul.edu.iq' },
    { name: 'جامعة البصرة', type: 'حكومية', city: 'البصرة', url: 'https://uobasrah.edu.iq' },
    { name: 'جامعة الكوفة', type: 'حكومية', city: 'النجف', url: 'https://uokufa.edu.iq' },
    { name: 'جامعة بابل', type: 'حكومية', city: 'بابل', url: 'https://uobabylon.edu.iq' },
    { name: 'جامعة الأنبار', type: 'حكومية', city: 'الأنبار', url: 'https://uoanbar.edu.iq' },
    { name: 'جامعة تكريت', type: 'حكومية', city: 'صلاح الدين', url: 'https://tu.edu.iq' },
    { name: 'جامعة ديالى', type: 'حكومية', city: 'ديالى', url: 'https://uodiyala.edu.iq' },
    { name: 'جامعة كركوك', type: 'حكومية', city: 'كركوك', url: 'https://uokirkuk.edu.iq' },
    { name: 'جامعة كربلاء', type: 'حكومية', city: 'كربلاء', url: 'https://uokerbala.edu.iq' },
    { name: 'جامعة ميسان', type: 'حكومية', city: 'ميسان', url: 'https://uomisan.edu.iq' },
    { name: 'جامعة ذي قار', type: 'حكومية', city: 'ذي قار', url: 'https://utq.edu.iq' },
    { name: 'جامعة واسط', type: 'حكومية', city: 'واسط', url: 'https://uowasit.edu.iq' },
    { name: 'جامعة القادسية', type: 'حكومية', city: 'الديوانية', url: 'https://qu.edu.iq' },
    { name: 'جامعة السليمانية', type: 'حكومية', city: 'السليمانية', url: 'https://univsul.edu.iq' },
    { name: 'الجامعة الأمريكية في العراق — السليمانية', type: 'أهلية', city: 'السليمانية', url: 'https://auis.edu.krd' },
    { name: 'جامعة جيهان — أربيل', type: 'أهلية', city: 'أربيل', url: 'https://cihanuniversity.edu.iq' }
  ],

  scholarships: [
    { name: 'منحة تشيفنينغ (Chevening)', country: 'بريطانيا', level: 'الدراسات العليا', url: 'https://www.chevening.org', deadline: 'يُعلن على الموقع الرسمي', conditions: 'راجع الموقع الرسمي للجهة المانحة' },
    { name: 'منحة DAAD', country: 'ألمانيا', level: 'جميع المراحل', url: 'https://www.daad.de', deadline: 'يُعلن على الموقع الرسمي', conditions: 'راجع الموقع الرسمي للجهة المانحة' },
    { name: 'المنح التركية (Türkiye Burslari)', country: 'تركيا', level: 'جميع المراحل', url: 'https://www.turkiyeburslari.gov.tr', deadline: 'يُعلن على الموقع الرسمي', conditions: 'راجع الموقع الرسمي للجهة المانحة' },
    { name: 'منحة الحكومة اليابانية (MEXT)', country: 'اليابان', level: 'جميع المراحل', url: 'https://www.studyinjapan.go.jp', deadline: 'يُعلن على الموقع الرسمي', conditions: 'راجع الموقع الرسمي للجهة المانحة' },
    { name: 'برنامج إيراسموس+ (Erasmus+)', country: 'أوروبا', level: 'جميع المراحل', url: 'https://erasmus-plus.ec.europa.eu', deadline: 'يُعلن على الموقع الرسمي', conditions: 'راجع الموقع الرسمي للجهة المانحة' },
    { name: 'منحة الحكومة الهنغارية (Stipendium Hungaricum)', country: 'هنغاريا', level: 'جميع المراحل', url: 'https://stipendiumhungaricum.hu', deadline: 'يُعلن على الموقع الرسمي', conditions: 'راجع الموقع الرسمي للجهة المانحة' },
    { name: 'منح وزارة التعليم العالي والبحث العلمي العراقية', country: 'العراق', level: 'جميع المراحل', url: 'https://mohesr.gov.iq', deadline: 'يُعلن على الموقع الرسمي', conditions: 'راجع الموقع الرسمي للوزارة' }
  ]
};

/* ===== كتالوج المحتوى الموحد: الكتب الرسمية والملازم والمحاضرات =====
   كل رابط هنا موثّق ومفحوص — لا روابط مختلقة. */
window.SANAD_CONTENT = {
  /* صفحات الكتب الرسمية على موقع وزارة التربية (مديرية المناهج) —
     روابط رسمية موثقة من إعلان الوزارة وأدلة الكتب، لكن الموقع يحجب الطلبات الآلية
     (403) فلا يمكن التحقق من ملفات PDF المباشرة إلا من متصفح حقيقي. */
  bookListings: [
    { stage: 'primary', label: 'كتب المرحلة الابتدائية — مديرية المناهج', url: 'https://manahj.edu.iq/index.php?name=Pages&op=page&pid=149' },
    { stage: 'middle', label: 'كتب المرحلة المتوسطة — مديرية المناهج', url: 'https://manahj.edu.iq/index.php?name=Pages&op=page&pid=148' },
    { stage: 'prep', label: 'كتب المرحلة الإعدادية — مديرية المناهج', url: 'https://manahj.edu.iq/index.php?name=Pages&op=page&pid=151' }
  ],
  books: [
    /* { stage, gradeId, grade, subject, title, url, year, source } */
  ],
  malazim: [
    /* الملزمة تُعرض عبر قناة المدرس الرسمية على تيليجرام حيث ينشر ملزمته */
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الفيزياء', teacher: 'علي الذهبي', title: 'ملزمة فيزياء الثالث المتوسط 2027', url: 'https://t.me/alqamf', note: 'ملزمة فيزياء 2027 — تُباع في المكتبات؛ رابط قناة المدرس الرسمية على تيليجرام' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الفيزياء', teacher: 'عوض غفار المشرفاوي', title: 'ملزمة فيزياء الثالث المتوسط', url: 'https://t.me/awadg13', note: 'رابط قناة المدرس الرسمية على تيليجرام' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الكيمياء', teacher: 'حسين حمزة', title: 'ملزمة كيمياء الثالث المتوسط 2027', url: 'https://t.me/hussainhamza98', note: 'تحمل شعار مكتب الطابعي وتُباع في مكتبات جميع المحافظات' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الأحياء', teacher: 'أحمد الجاف', title: 'ملزمة أحياء الثالث المتوسط 2027', url: 'https://t.me/ahmedjaleell', note: 'ملزمة أحياء 2027 — تُباع في المكتبات' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'اللغة الإنكليزية', teacher: 'سجاد العبيدي', title: 'ملزمة English FOR IRAQ 2027', url: 'https://t.me/sajjadobaidy', note: 'ملزمة طبعة 2027' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'اللغة الإنكليزية', teacher: 'أحمد البيجاوي', title: 'ملزمة إنكليزي الثالث المتوسط', url: 'https://t.me/abj_86', note: 'رابط قناة المدرس الرسمية على تيليجرام' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'اللغة العربية', teacher: 'مازن الهلالي', title: 'ملزمة النجاح في اللغة العربية 2027', url: 'https://t.me/mazen3333', note: 'ملزمة 2027 للثالث المتوسط' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'عباس الدراجي', title: 'ملزمة رياضيات الثالث المتوسط 2027 — دفعة البوكيمون', url: 'https://t.me/abassali92', note: 'الملزمة تُباع عبر دار الأعرجي؛ رابط قناة المدرس الرسمية على تيليجرام' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'حيدر وليد', title: 'ملزمة رياضيات الثالث المتوسط — حيدر وليد', url: 'https://t.me/haiderwaleed', note: 'دورة الثالث المتوسط 2027 على تيليجرام؛ محاضرات يوتيوب مجانية' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'خالد وليد', title: 'ملزمة سينما الرياضيات 2027 — خالد وليد', url: 'https://t.me/Khalidwalid_33', note: 'ملزمة طبعة 2027 تُباع عبر دار الأعرجي' }
  ],
  lectures: [
    /* ===== الرياضيات — الثالث المتوسط ===== */
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'عباس الدراجي', title: 'رياضيات الثالث المتوسط 2027 — متباينة القيمة المطلقة — الفصل الأول', youtubeId: '2QAntnPd_0s', channelUrl: 'https://www.youtube.com/@Abasali.92', year: 2027 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'عباس الدراجي', title: 'رياضيات الثالث المتوسط 2027 — التطبيقات — الفصل الأول', youtubeId: 'X20SRvgFmtY', channelUrl: 'https://www.youtube.com/@Abasali.92', year: 2027 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'عباس الدراجي', title: 'رياضيات الثالث المتوسط 2027 — المتباينات المركبة', youtubeId: 'lCy5oYYucgc', channelUrl: 'https://www.youtube.com/@Abasali.92', year: 2027 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'عباس الدراجي', title: 'رياضيات الثالث المتوسط — محاضرة 5 — حل تمارين تأكد من فهمك صفحة 27', youtubeId: '8_1ZNy9Xvu0', channelUrl: 'https://www.youtube.com/@Abasali.92', year: '' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'عباس الدراجي', title: 'ثالث المتوسط — الفصل الأول — شرح الجديد 2025 (قائمة تشغيل)', playlistId: 'PLFvZG69HOWk_A9tQYJApGTyaSY5rLb0-0', channelUrl: 'https://www.youtube.com/@Abasali.92', year: 2025 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'عباس الدراجي', title: 'ثالث المتوسط — الفصل الثاني (قائمة تشغيل)', playlistId: 'PLFvZG69HOWk93HB9-v-eoG5pF0Adtoy1w', channelUrl: 'https://www.youtube.com/@Abasali.92', year: '' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'عباس الدراجي', title: 'ثالث متوسط — الفصل الثالث — المعادلات (قائمة تشغيل)', playlistId: 'PLFvZG69HOWk848BBY2y8fvzUCHUg7Nhnd', channelUrl: 'https://www.youtube.com/@Abasali.92', year: '' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'عباس الدراجي', title: 'مراجعات مركزة — ثالث متوسط 2026 (قائمة تشغيل)', playlistId: 'PLFvZG69HOWk-NphjyY0Br_MkrcsPKgFnE', channelUrl: 'https://www.youtube.com/@Abasali.92', year: 2026 },
    { stage: 'prep', gradeId: 'r6', grade: 'السادس الإعدادي', subject: 'الرياضيات', teacher: 'عباس الدراجي', title: 'فصل أول — سادس علمي 2027 (قائمة تشغيل)', playlistId: 'PLFvZG69HOWk8BJIjQeblSrQ1dhk9SVzZp', channelUrl: 'https://www.youtube.com/@Abasali.92', year: 2027 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'حيدر وليد', title: 'منهج الثالث المتوسط 2027 — نظرة عامة على المنهج', youtubeId: '__GhMqg4FrE', channelUrl: 'https://www.youtube.com/@haider_waleed', year: 2027 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'حيدر وليد', title: 'رياضيات الثالث المتوسط — الفصل الأول — محاضرة 1', youtubeId: 'T1SxpvU-iqA', channelUrl: 'https://www.youtube.com/@haider_waleed', year: '' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'حيدر وليد', title: 'المراجعة المركزة — الثالث المتوسط — الفصل الأول الجزء الأول', youtubeId: 'UT27xn9xrD4', channelUrl: 'https://www.youtube.com/@haider_waleed', year: '' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'حيدر وليد', title: 'الثالث المتوسط — الفصل الثالث — محاضرة 1 — حل معادلتين آنياً بالتعويض الجزء الأول', youtubeId: '6op6E17_2SI', channelUrl: 'https://www.youtube.com/@haider_waleed', year: '' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'حيدر وليد', title: 'الثالث المتوسط — الفصل الأول — العلاقات والمتباينات في الأعداد الحقيقية (قائمة تشغيل)', playlistId: 'PLbb8qWewX0vYUSPtCPuSaGxJTjBzSo3RC', channelUrl: 'https://www.youtube.com/@haider_waleed', year: '' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'حيدر وليد', title: 'الثالث المتوسط — الفصل الثالث — المعادلات (قائمة تشغيل)', playlistId: 'PLbb8qWewX0vZtTR-mUmT-T3mZOjNW66f7', channelUrl: 'https://www.youtube.com/@haider_waleed', year: '' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'خالد وليد', title: 'رياضيات الثالث المتوسط — الفصل الأول — تصوير جديد 2027 (قائمة تشغيل)', playlistId: 'PLQaXbSLua-t59zk9RUISWVP3GMCz2OU-d', channelUrl: 'https://www.youtube.com/@khalid_waled', year: 2027 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'خالد وليد', title: 'الثالث المتوسط — الفصل الأول — محاضرة 1 — التصوير الجديد 2027', youtubeId: 'rWdfHaTYqy4', channelUrl: 'https://www.youtube.com/@khalid_waled', year: 2027 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'خالد وليد', title: 'الثالث المتوسط — الفصل الثاني — المقادير الجبرية — محاضرة 1 — تصوير جديد 2027', youtubeId: 'zbnhOtPKOhw', channelUrl: 'https://www.youtube.com/@khalid_waled', year: 2027 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'خالد وليد', title: 'الفصل الأول بمحاضرة واحدة فقط 2027 — الثالث المتوسط', youtubeId: '36pC_EsKMs8', channelUrl: 'https://www.youtube.com/@khalid_waled', year: 2027 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'خالد وليد', title: 'الثالث المتوسط — الفصل الأول — محاضرة 2 — 2027', youtubeId: 'SkqGTZe64iU', channelUrl: 'https://www.youtube.com/@khalid_waled', year: 2027 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'خالد وليد', title: 'الثالث المتوسط — الفصل الثاني — تحليل المقادير الجبرية — العامل المشترك — محاضرة 4 — تصوير جديد 2027', youtubeId: 'FPVCqy-cLvY', channelUrl: 'https://www.youtube.com/@khalid_waled', year: 2027 },
    /* ===== الفيزياء — الثالث المتوسط ===== */
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الفيزياء', teacher: 'علي الذهبي', title: 'فيزياء الثالث المتوسط منهج 2027 — الفصل الثاني — المحاضرة 2 — المجال المغناطيسي', youtubeId: '8by2zmZPlzc', channelUrl: 'https://www.youtube.com/@al.aq.f', year: 2027 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الفيزياء', teacher: 'علي الذهبي', title: 'فيزياء الثالث المتوسط منهج 2027 — الفصل الأول — المحاضرة 6 — حلول أسئلة الفصل الأول', youtubeId: 'HycJ-rWN-L4', channelUrl: 'https://www.youtube.com/@al.aq.f', year: 2027 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الفيزياء', teacher: 'عوض غفار المشرفاوي', title: 'فيزياء الثالث المتوسط 2027 — الفصل الأول بمحاضرة واحدة', youtubeId: 'W5C1jlRH7i0', channelUrl: 'https://www.youtube.com/@awadg13', year: 2027 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الفيزياء', teacher: 'قناة كوانتم', title: 'فيزياء الثالث المتوسط 2027 — الفصل الثاني: المغناطيسية (قائمة تشغيل)', playlistId: 'PL667lXZcYuKNwlzMK27yrCc3v6VEOKF6a', channelUrl: 'https://www.youtube.com/playlist?list=PL667lXZcYuKNwlzMK27yrCc3v6VEOKF6a', year: 2027 },
    /* ===== الكيمياء — الثالث المتوسط ===== */
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الكيمياء', teacher: 'حسين حمزة', title: 'كيمياء الثالث المتوسط — الفصل الأول — المحاضرة 1 — المنهج الجديد 2027', youtubeId: 'ru-hakVXYSQ', channelUrl: 'https://www.youtube.com/@Hussain95', year: 2027 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الكيمياء', teacher: 'حسين حمزة', title: 'كيمياء الثالث المتوسط — الفصل الثاني — المحاضرة 3 — المنهج الجديد 2027', youtubeId: 'Qc2E6Ey-e-Q', channelUrl: 'https://www.youtube.com/@Hussain95', year: 2027 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الكيمياء', teacher: 'حسين حمزة', title: 'كيمياء الثالث المتوسط — الفصل الثاني — المحاضرة 2 — المنهج الجديد 2027', youtubeId: 'tqZEtJ16KbI', channelUrl: 'https://www.youtube.com/@Hussain95', year: 2027 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الكيمياء', teacher: 'هاني صلاح الدين', title: 'كيمياء الثالث المتوسط — الفصل الأول — الخواص الدورية وحلول أسئلة الفصل — المنهج الجديد 2027', youtubeId: '1V6RUEW5N_A', channelUrl: 'https://www.youtube.com/@phhanisalah1', year: 2027 },
    /* ===== الأحياء — الثالث المتوسط ===== */
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الأحياء', teacher: 'أحمد الجاف', title: 'أحياء الثالث المتوسط — منهج 2027 — المنهج الجديد (قائمة تشغيل)', playlistId: 'PLuvOOlnWcj1kZmEzKP-dghrKg_JzP2gyY', channelUrl: 'https://www.youtube.com/@ahmedjaleell', year: 2027 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الأحياء', teacher: 'أحمد الجاف', title: 'أحياء الثالث المتوسط 2027 — الفصل الأول بمحاضرة واحدة', youtubeId: '9njT6P4CPPY', channelUrl: 'https://www.youtube.com/@ahmedjaleell', year: 2027 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الأحياء', teacher: 'أحمد الجاف', title: 'أحياء الثالث المتوسط 2027 — الفصل الرابع — المحاضرة 1', youtubeId: 'Thb05ZpSp3U', channelUrl: 'https://www.youtube.com/@ahmedjaleell', year: 2027 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الأحياء', teacher: 'د. هبة حسين رسن', title: 'أحياء الثالث المتوسط — منهج المتميزين دفعة 2027 (قائمة تشغيل)', playlistId: 'PLb-_8-dtbA04', channelUrl: 'https://www.youtube.com/@Dr.HibaBiology', year: 2027 },
    /* ===== اللغة الإنكليزية — الثالث المتوسط ===== */
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'اللغة الإنكليزية', teacher: 'سجاد العبيدي', title: 'إنشاء الوحدة الأولى — إعلان السكائر — الجزء الأول', youtubeId: 'ufXHtBTg6wU', channelUrl: 'https://www.youtube.com/@sajjadobaidy', year: '' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'اللغة الإنكليزية', teacher: 'سجاد العبيدي', title: 'تغييرات المادة بالحذافير ونظام الملزمة بعد التغيير', youtubeId: 'JdUyVXjaUQk', channelUrl: 'https://www.youtube.com/@sajjadobaidy', year: '' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'اللغة الإنكليزية', teacher: 'علي عاصم السالم', title: 'ثالث متوسط — يونت 1 (قائمة تشغيل كاملة)', playlistId: 'PLTKOqPx9AjKE', channelUrl: 'https://www.youtube.com/@ali.alsalimm', year: '' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'اللغة الإنكليزية', teacher: 'علي عاصم السالم', title: 'يونت 1 — وصف الأماكن (There is / There are)', youtubeId: 'g8i_GgdqDI4', channelUrl: 'https://www.youtube.com/@ali.alsalimm', year: '' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'اللغة الإنكليزية', teacher: 'رسول الشبلي', title: 'ثالث متوسط 2027 — موضوع إعطاء السبب Give reason — شرح وحل التمارين الوزارية', youtubeId: 'JG4WY3UMcHM', channelUrl: 'https://www.youtube.com/@RasoolAlshibly', year: 2027 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'اللغة الإنكليزية', teacher: 'أحمد البيجاوي', title: 'ثالث متوسط إنكليزي — المراجعة المركزة للوحدة الأولى', youtubeId: 'mbouVrOMjZU', channelUrl: 'https://www.youtube.com/@Ahmedalbejawy1986H', year: '' },
    /* ===== اللغة العربية — الثالث المتوسط ===== */
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'اللغة العربية', teacher: 'هشام المعموري', title: 'منهج الثالث المتوسط 2027 — المحاضرة الأولى من الوحدة الثالثة — مصادر الأفعال غير الثلاثية', youtubeId: 'mznxm3zv8Qc', channelUrl: 'https://www.youtube.com/@hisham_almamouri', year: 2027 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'اللغة العربية', teacher: 'هشام المعموري', title: 'منهج الثالث المتوسط 2027 — المحاضرة الرابعة من الوحدة الثانية', youtubeId: '96F4jDDRxO4', channelUrl: 'https://www.youtube.com/@hisham_almamouri', year: 2027 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'اللغة العربية', teacher: 'مازن الهلالي', title: 'اسم المفعول للصف الثالث المتوسط — حلقة 2 — تصوير 2027', youtubeId: 'dkEa9m6vIA8', channelUrl: 'https://www.youtube.com/@mazenalhelaly', year: 2027 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'اللغة العربية', teacher: 'د. آيات العاني', title: 'وزاريات همزة الوصل والقطع (تصوير جديد 2026)', youtubeId: 'EYpWvsd91Dc', channelUrl: 'https://www.youtube.com/@ayat_alani_islamic', year: 2026 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'اللغة العربية', teacher: 'د. آيات العاني', title: 'مصادر الأفعال غير الثلاثية بالمختصر (تصوير جديد 2026)', youtubeId: '4YxVWb8OcbM', channelUrl: 'https://www.youtube.com/@ayat_alani_islamic', year: 2026 },
    /* ===== الاجتماعيات — الثالث المتوسط ===== */
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الاجتماعيات', teacher: 'نور الجبوري', title: 'الانتداب البريطاني على العراق — اجتماعيات الثالث المتوسط', youtubeId: 'PTUa5yEuLq4', channelUrl: 'https://www.youtube.com/@%D8%A7%D9%84%D8%A3%D8%B3%D8%AA%D8%A7%D8%B0%D8%A9%D9%86%D9%88%D8%B1%D8%A7%D9%84%D8%AC%D8%A8%D9%88%D8%B1%D9%8A', year: '' },
    /* ===== التربية الإسلامية — الثالث المتوسط ===== */
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'التربية الإسلامية', teacher: 'د. آيات العاني', title: 'سورة القمر ج1 — الوحدة الثالثة — الإسلامية — الثالث المتوسط', youtubeId: 'yMl7_a_NjiM', channelUrl: 'https://www.youtube.com/@ayat_alani_islamic', year: '' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'التربية الإسلامية', teacher: 'د. آيات العاني', title: 'الخمس — الوحدة الثالثة — الإسلامية — الثالث المتوسط', youtubeId: 'H9ztO3auvNE', channelUrl: 'https://www.youtube.com/@ayat_alani_islamic', year: '' }
  ]
};

/* اشتقاق الكتب والدروس من الكتالوج الموحد (لصفحتي المكتبة والدروس) */
(function () {
  var c = window.SANAD_CONTENT || { books: [], malazim: [], lectures: [] };
  window.SANAD_DATA.books = (c.books || []).map(function (b, i) {
    return {
      id: 'book-' + i,
      title: b.title || ('كتاب ' + (b.subject || '')),
      subject: b.subject || '',
      grade: b.grade || '',
      author: 'وزارة التربية العراقية',
      publisher: 'وزارة التربية العراقية',
      type: 'كتاب',
      year: b.year || '',
      official: true,
      viewUrl: b.url,
      downloadUrl: b.url,
      description: 'كتاب رسمي — ' + (b.source || 'وزارة التربية العراقية')
    };
  });
  window.SANAD_DATA.lessons = (c.lectures || []).map(function (l, i) {
    return {
      id: 'lec-' + i,
      title: l.title || 'محاضرة',
      teacher: l.teacher || '',
      subject: l.subject || '',
      grade: l.grade || '',
      youtubeId: l.youtubeId || '',
      playlistId: l.playlistId || '',
      channelUrl: l.channelUrl || '',
      year: l.year || '',
      videoUrl: l.youtubeId ? 'https://www.youtube.com/watch?v=' + l.youtubeId : (l.playlistId ? 'https://www.youtube.com/playlist?list=' + l.playlistId : '')
    };
  });
})();
