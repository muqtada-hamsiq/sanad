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
    /* ملفات PDF مرفوعة داخل الموقع — كتب رسمية موثقة من وزارة التربية، طبعة 1447هـ/2025م.
       تم التحقق من كل ملف: %PDF + عدد الصفحات + غلاف الكتاب (اسم الكتاب والصف والطبعة). */
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'اللغة العربية', title: 'كتاب اللغة العربية — الجزء الأول — الثالث المتوسط', url: 'pdfs/books/books-m3-arabic-p1.pdf', pdf: 'pdfs/books/books-m3-arabic-p1.pdf', year: 2025, source: 'وزارة التربية العراقية — الطبعة السادسة 1447هـ/2025م', pages: 128 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'اللغة العربية', title: 'كتاب اللغة العربية — الجزء الثاني — الثالث المتوسط', url: 'pdfs/books/books-m3-arabic-p2.pdf', pdf: 'pdfs/books/books-m3-arabic-p2.pdf', year: 2025, source: 'وزارة التربية العراقية — الطبعة السادسة 1447هـ/2025م', pages: 100 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'اللغة الإنكليزية', title: 'English for Iraq — 3rd Intermediate — Student\u2019s Book', url: 'pdfs/books/books-m3-english-student.pdf', pdf: 'pdfs/books/books-m3-english-student.pdf', year: 2025, source: 'وزارة التربية العراقية — English for Iraq', pages: 120 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'اللغة الإنكليزية', title: 'English for Iraq — 3rd Intermediate — Activity Book', url: 'pdfs/books/books-m3-english-activity.pdf', pdf: 'pdfs/books/books-m3-english-activity.pdf', year: 2025, source: 'وزارة التربية العراقية — English for Iraq', pages: 124 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', title: 'كتاب الرياضيات — الثالث المتوسط', url: 'pdfs/books/books-m3-maths.pdf', pdf: 'pdfs/books/books-m3-maths.pdf', year: 2025, source: 'وزارة التربية العراقية — الطبعة السادسة 1447هـ/2025م', pages: 176 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الفيزياء', title: 'كتاب الفيزياء — الثالث المتوسط', url: 'pdfs/books/books-m3-physics.pdf', pdf: 'pdfs/books/books-m3-physics.pdf', year: 2025, source: 'وزارة التربية العراقية — الطبعة الرابعة عشرة 1447هـ/2025م', pages: 176 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الكيمياء', title: 'كتاب الكيمياء — الثالث المتوسط', url: 'pdfs/books/books-m3-chemistry.pdf', pdf: 'pdfs/books/books-m3-chemistry.pdf', year: 2025, source: 'وزارة التربية العراقية — الطبعة الثالثة عشرة 1447هـ/2025م', pages: 152 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الأحياء', title: 'كتاب علم الأحياء (الإنسان وصحته) — الثالث المتوسط', url: 'pdfs/books/books-m3-biology.pdf', pdf: 'pdfs/books/books-m3-biology.pdf', year: 2025, source: 'وزارة التربية العراقية — الطبعة الثالثة عشرة المنقحة 1447هـ/2025م', pages: 136 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الاجتماعيات', title: 'كتاب الاجتماعيات — الثالث المتوسط', url: 'pdfs/books/books-m3-social.pdf', pdf: 'pdfs/books/books-m3-social.pdf', year: 2025, source: 'وزارة التربية العراقية — الطبعة الرابعة 1447هـ/2025م', pages: 160 },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'التربية الإسلامية', title: 'كتاب القرآن الكريم والتربية الإسلامية — الثالث المتوسط', url: 'pdfs/books/books-m3-islamic.pdf', pdf: 'pdfs/books/books-m3-islamic.pdf', year: 2025, source: 'وزارة التربية العراقية — الطبعة التاسعة 1447هـ/2025م', pages: 156 }
  ],
  malazim: [
    /* الملزمة المتوفرة بصيغة PDF تُرفع داخل الموقع (حقل pdf).
       الملازم التسع الباقية لا توجد لها نسخة PDF مجانية موثقة — تُباع مطبوعة في المكتبات —
       فلا رابط تيليجرام ولا أي تحويل خارجي؛ تظهر كـ«غير متوفرة PDF» حتى تتوفر نسخة موثقة. */
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الفيزياء', teacher: 'علي الذهبي', title: 'ملزمة فيزياء الثالث المتوسط 2027', note: 'ملزمة فيزياء 2027 — تُباع في المكتبات؛ لا توجد نسخة PDF مجانية موثقة' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الفيزياء', teacher: 'عوض غفار المشرفاوي', title: 'ملزمة فيزياء الثالث المتوسط', note: 'ملزمة فيزياء 2027 — تُباع في المكتبات؛ لا توجد نسخة PDF مجانية موثقة' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الكيمياء', teacher: 'حسين حمزة', title: 'ملزمة كيمياء الثالث المتوسط 2027', note: 'تحمل شعار مكتب الطابعي وتُباع في مكتبات جميع المحافظات؛ لا توجد نسخة PDF مجانية موثقة' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الأحياء', teacher: 'أحمد الجاف', title: 'ملزمة أحياء الثالث المتوسط 2027', note: 'ملزمة أحياء 2027 — تُباع في المكتبات؛ لا توجد نسخة PDF مجانية موثقة' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'اللغة الإنكليزية', teacher: 'سجاد العبيدي', title: 'ملزمة English FOR IRAQ 2027', url: 'pdfs/malazim/malazim-obaidi-english-m3-p1.pdf', pdf: 'pdfs/malazim/malazim-obaidi-english-m3-p1.pdf', year: 2027, note: 'نسخة PDF كاملة — الجزء الأول — 84 صفحة — العام الدراسي 2026–2027' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'اللغة الإنكليزية', teacher: 'أحمد البيجاوي', title: 'ملزمة إنكليزي الثالث المتوسط', note: 'ملزمة إنكليزي 2027 — تُباع في المكتبات؛ لا توجد نسخة PDF مجانية موثقة' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'اللغة العربية', teacher: 'مازن الهلالي', title: 'ملزمة النجاح في اللغة العربية 2027', note: 'ملزمة 2027 للثالث المتوسط — تُباع في المكتبات؛ لا توجد نسخة PDF مجانية موثقة' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'عباس الدراجي', title: 'ملزمة رياضيات الثالث المتوسط 2027 — دفعة البوكيمون', note: 'الملزمة تُباع عبر دار الأعرجي؛ لا توجد نسخة PDF مجانية موثقة' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'حيدر وليد', title: 'ملزمة رياضيات الثالث المتوسط — حيدر وليد', note: 'ملزمة «المسند في الرياضيات» 2027 — تُباع في المكتبات؛ لا توجد نسخة PDF مجانية موثقة' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'خالد وليد', title: 'ملزمة سينما الرياضيات 2027 — خالد وليد', note: 'ملزمة طبعة 2027 تُباع عبر دار الأعرجي؛ لا توجد نسخة PDF مجانية موثقة' }
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
  ],
  /* ===== المراجعات المركزة =====
     مراجعات موثقة من قنوات المدرسين الرسمية على يوتيوب — الكتاب كامل بمحاضرة
     واحدة (scope: 'book') أو كل فصل/وحدة بمحاضرة واحدة (scope: 'chapter').
     كل إدخال فُحص بفتح صفحته على يوتيوب (العنوان والقناة والمعرّف). سنة النشر
     صادقة: 2027 أو 2026 أو '' عند عدم معرفتها. channelUrl فارغ '' عند تعذر
     التحقق من رابط القناة — لا روابط مختلقة. */
  revisions: [
    /* ===== الابتدائية ===== */
    { stage: 'primary', gradeId: 'p6', grade: 'السادس الابتدائي', subject: 'اللغة العربية', teacher: 'عقيل الشامي', title: 'الجزء الثاني للمراجعة المركزة لمادة اللغة العربية لامتحان نصف السنة السادس الابتدائي', youtubeId: '5b7xA1Om7Lg', scope: 'book', year: 2026, channelUrl: '' },
    { stage: 'primary', gradeId: 'p6', grade: 'السادس الابتدائي', subject: 'الرياضيات', teacher: 'داليا الخفاجي', title: 'المراجعة المركزة | رياضيات سادس ابتدائي الفصل الثاني ترتيب العمليات مع الوزاريات | داليا الخفاجي', youtubeId: 'g40kMtXDnwo', scope: 'chapter', chapter: 'الفصل الثاني', year: '', channelUrl: 'https://www.youtube.com/channel/UCMoXL5orUpXesdGZySx9gKQ' },
    { stage: 'primary', gradeId: 'p6', grade: 'السادس الابتدائي', subject: 'الرياضيات', teacher: 'علي المساري', title: 'رياضيات سادس ابتدائي 2025 الفصل الثاني', playlistId: 'PLuRxguzP2cziJeeYi6v73A4DMRRmUKe1E', scope: 'chapter', chapter: 'الفصل الثاني', year: '', channelUrl: 'https://www.youtube.com/@scienceresearcher1' },
    { stage: 'primary', gradeId: 'p6', grade: 'السادس الابتدائي', subject: 'العلوم', teacher: 'نور العبيدي', title: 'مراجعة مركزة علوم سادس ابتدائي 2026_الوحدة الاولى خصائص الكائنات الحية مع الوزاريات_الست نور العبيدي', youtubeId: 'vkrlkS4Kh9c', scope: 'chapter', chapter: 'الوحدة الأولى', year: 2026, channelUrl: 'https://www.youtube.com/channel/UCMoXL5orUpXesdGZySx9gKQ' },
    { stage: 'primary', gradeId: 'p6', grade: 'السادس الابتدائي', subject: 'العلوم', teacher: 'نور العبيدي', title: 'مراجعة مركزة علوم سادس ابتدائي 2026 _ الوحدة الرابعة القوى والطاقة مع الوزاريات _الست نور العبيدي', youtubeId: '7AfPW1sOR4E', scope: 'chapter', chapter: 'الوحدة الرابعة', year: 2026, channelUrl: 'https://www.youtube.com/channel/UCMoXL5orUpXesdGZySx9gKQ' },
    { stage: 'primary', gradeId: 'p6', grade: 'السادس الابتدائي', subject: 'العلوم', teacher: 'داليا قصي الخفاجي', title: 'المراجعة المركزة / مادة العلوم / الصف السادس الابتدائي / الاستاذة داليا قصي الخفاجي', youtubeId: 'm19Vffed7eM', scope: 'book', year: '', channelUrl: '' },
    { stage: 'primary', gradeId: 'p6', grade: 'السادس الابتدائي', subject: 'اللغة الإنكليزية', teacher: 'هبه الزبيدي', title: 'مراجعة مركزه | انكليزي سادس ابتدائي ا اليونت الثاني كامل مع الوزاريات | الست هبه الزبيدي', youtubeId: 'BcXihKl3pt8', scope: 'chapter', chapter: 'اليونت الثاني', year: '', channelUrl: 'https://www.youtube.com/channel/UCMoXL5orUpXesdGZySx9gKQ' },
    { stage: 'primary', gradeId: 'p6', grade: 'السادس الابتدائي', subject: 'اللغة الإنكليزية', teacher: 'وائل حيدر', title: 'المراجعة المركزة قبل الامتحان ملخص يونت 6 من صفحة 74 الى 89 كتاب و كراسة انكليزي سادس', youtubeId: '3_eK5YWxb6s', scope: 'chapter', chapter: 'اليونت السادس', year: '', channelUrl: 'https://www.youtube.com/@englishwithwaeel' },
    { stage: 'primary', gradeId: 'p6', grade: 'السادس الابتدائي', subject: 'التربية الإسلامية', teacher: 'حارث مثنى عبد الأمير', title: 'حل نموذج اسئلة امتحان نصف السنة 2026 إسلامية سادس ابتدائي', youtubeId: 'CB1pT3UUV3s', scope: 'book', year: 2026, channelUrl: '' },
    { stage: 'primary', gradeId: 'p6', grade: 'السادس الابتدائي', subject: 'الاجتماعيات', teacher: 'أبو أيمن القيسي', title: 'اسئلة امتحان نصف السنة اجتماعيات سادس ابتدائي مع الحل — أسئلة وزارية نموذج 2', youtubeId: 'fn_4ksztQxM', scope: 'book', year: '', channelUrl: 'https://www.youtube.com/@essam81' },
    { stage: 'primary', gradeId: 'p5', grade: 'الخامس الابتدائي', subject: 'الرياضيات', teacher: 'التلفزيون التربوي العراقي', title: 'الرياضيات الخامس الابتدائي/#مراجعة_الفصل_الاول', youtubeId: '4hTHh6qKZ0M', scope: 'chapter', chapter: 'الفصل الأول', year: '', channelUrl: 'https://www.youtube.com/@iraqedukids' },
    { stage: 'primary', gradeId: 'p5', grade: 'الخامس الابتدائي', subject: 'الاجتماعيات', teacher: 'أبو أيمن القيسي', title: 'أسئلة وأجوبة امتحان الشهر الثاني | اجتماعيات الصف الخامس الابتدائي (مراجعة مركزة ونهائية)', youtubeId: 'e-O4fShBVrk', scope: 'chapter', chapter: 'الشهر الثاني', year: '', channelUrl: 'https://www.youtube.com/@essam81' },
    { stage: 'primary', gradeId: 'p1', grade: 'الأول الابتدائي', subject: 'الرياضيات', teacher: 'التلفزيون التربوي العراقي', title: 'الرياضيات - الاول الابتدائي - مراجعة الفصل الاول , الجزء الثاني', youtubeId: 'HqQ5dsaan0A', scope: 'chapter', chapter: 'الفصل الأول', year: '', channelUrl: 'https://www.youtube.com/@iraqedukids' },
    /* ===== المتوسطة — الثالث المتوسط (موجودة أصلاً في المحاضرات، تُعرض هنا أيضاً) ===== */
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'عباس الدراجي', title: 'مراجعات مركزة — ثالث متوسط 2026', playlistId: 'PLFvZG69HOWk-NphjyY0Br_MkrcsPKgFnE', scope: 'book', year: 2026, channelUrl: 'https://www.youtube.com/@Abasali.92' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'حيدر وليد', title: 'المراجعة المركزة — الثالث المتوسط — الفصل الأول الجزء الأول', youtubeId: 'UT27xn9xrD4', scope: 'chapter', chapter: 'الفصل الأول', year: '', channelUrl: 'https://www.youtube.com/@haider_waleed' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'خالد وليد', title: 'الفصل الأول بمحاضرة واحدة فقط 2027 — الثالث المتوسط', youtubeId: '36pC_EsKMs8', scope: 'chapter', chapter: 'الفصل الأول', year: 2027, channelUrl: 'https://www.youtube.com/@khalid_waled' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الفيزياء', teacher: 'عوض غفار المشرفاوي', title: 'فيزياء الثالث المتوسط 2027 — الفصل الأول بمحاضرة واحدة', youtubeId: 'W5C1jlRH7i0', scope: 'chapter', chapter: 'الفصل الأول', year: 2027, channelUrl: 'https://www.youtube.com/@awadg13' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الأحياء', teacher: 'أحمد الجاف', title: 'أحياء الثالث المتوسط 2027 — الفصل الأول بمحاضرة واحدة', youtubeId: '9njT6P4CPPY', scope: 'chapter', chapter: 'الفصل الأول', year: 2027, channelUrl: 'https://www.youtube.com/@ahmedjaleell' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'اللغة الإنكليزية', teacher: 'أحمد البيجاوي', title: 'ثالث متوسط إنكليزي — المراجعة المركزة للوحدة الأولى', youtubeId: 'mbouVrOMjZU', scope: 'chapter', chapter: 'الوحدة الأولى', year: '', channelUrl: 'https://www.youtube.com/@Ahmedalbejawy1986H' },
    /* ===== المتوسطة — الثالث المتوسط — رياضيات (جديد) ===== */
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'حسين المخلص', title: 'مراجعة الفصل الأول بمحاضرة واحدة | رياضيات الثالث متوسط | مراجعة نيمار ابن الأنبار 2027', youtubeId: 'aXWYoawYsXo', scope: 'chapter', chapter: 'الفصل الأول', year: 2027, channelUrl: 'https://www.youtube.com/@Hussein_Mukhles' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'حسين المخلص', title: 'الفصل الثالث بمحاضرة واحدة رياضيات الثالث متوسط 2026', youtubeId: '_iDGlDh9Ig8', scope: 'chapter', chapter: 'الفصل الثالث', year: 2026, channelUrl: 'https://www.youtube.com/@Hussein_Mukhles' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'علي صادق', title: 'المراجعة المركزة للفصل الاول / رياضيات الثالث متوسط 2027/ضمان ال100', youtubeId: 'qugZHY0GGTI', scope: 'chapter', chapter: 'الفصل الأول', year: 2027, channelUrl: 'https://www.youtube.com/@AliSadiq' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'خالد وليد', title: 'الفصل الاول بمحاضرة واحدة |ريمونتادا الرياضيات | مراجعة مركزة | الثالث المتوسط 2025', youtubeId: '-8N6-b0QMOQ', scope: 'chapter', chapter: 'الفصل الأول', year: '', channelUrl: 'https://www.youtube.com/@khalid_waled' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'خالد وليد', title: 'المراجعة المركزة 2025 l ريمونتادا الرياضيات l محاضرة 2 |الفصل الثاني بمحاضرة واحدة', youtubeId: 'p6V_bsZBv30', scope: 'chapter', chapter: 'الفصل الثاني', year: '', channelUrl: 'https://www.youtube.com/@khalid_waled' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'خالد وليد', title: 'المراجعة المركزة 2025 l ريمونتادا الرياضيات l محاضرة 3 |الفصل الثالث بمحاضرة واحدة | الثالث المتوسط|', youtubeId: 'Lu0iKhh9jpY', scope: 'chapter', chapter: 'الفصل الثالث', year: '', channelUrl: 'https://www.youtube.com/@khalid_waled' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'خالد وليد', title: 'المراجعة المركزة 2025 lريمونتادا الرياضيات l محاضرة 4 |الفصل الرابع بمحاضرة واحدة | الثالث المتوسط|', youtubeId: 'CBSz6YxzU64', scope: 'chapter', chapter: 'الفصل الرابع', year: '', channelUrl: 'https://www.youtube.com/@khalid_waled' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'خالد وليد', title: 'الفصل الخامس بمحاضرة واحدة 2025 ريمونتادا الرياضيات', youtubeId: 'wiz9AHIV5x0', scope: 'chapter', chapter: 'الفصل الخامس', year: '', channelUrl: 'https://www.youtube.com/@khalid_waled' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'حيدر وليد', title: 'مراجعه ليله الامتحان - الفصل الثاني', youtubeId: 'E7cBPGk511w', scope: 'chapter', chapter: 'الفصل الثاني', year: '', channelUrl: 'https://www.youtube.com/@haider_waleed' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'حيدر وليد', title: '9th Grade Mathematics || Intensive Review || Chapter Two Part Two', youtubeId: 'QHOUbPgVsX4', scope: 'chapter', chapter: 'الفصل الثاني', year: '', channelUrl: 'https://www.youtube.com/@haider_waleed' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'مؤمل مهدي', title: 'رياضيات الثالث متوسط | الفصل الاول | بمحاضرة واحدة 2024', youtubeId: 'AOwTWev7IjM', scope: 'chapter', chapter: 'الفصل الأول', year: '', channelUrl: '' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'محمد الفرطوسي', title: 'رياضيات الثالث المتوسط | مراجعة الفصل الاول بمحاضرة واحدة فقط', youtubeId: '0aF2U7cLbgE', scope: 'chapter', chapter: 'الفصل الأول', year: '', channelUrl: '' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الرياضيات', teacher: 'أنس مالك', title: 'المراجعه المركزه للفصل الأول رياضيات الثالث المتوسط بمحاضره واحدة فقط حل جميع أفكار و وزاريات الفصل', youtubeId: 'i_oJLqWPRck', scope: 'chapter', chapter: 'الفصل الأول', year: '', channelUrl: '' },
    /* ===== المتوسطة — الثالث المتوسط — فيزياء (جديد) ===== */
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الفيزياء', teacher: 'علي الذهبي', title: 'اقوى مراجعة مركزة بالعراق (حسب الحذوفات) جميع (مسائل) فيزياء الثالث المتوسط', youtubeId: '1kJubNh1QVA', scope: 'book', year: '', channelUrl: 'https://www.youtube.com/@al.aq.f' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الفيزياء', teacher: 'علي الذهبي', title: 'اقوى مراجعة مركزة بالعراق (حسب الحذوفات) جميع (كلاميات) فيزياء الثالث المتوسط', youtubeId: 'liw32cAfhmI', scope: 'book', year: '', channelUrl: 'https://www.youtube.com/@al.aq.f' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الفيزياء', teacher: 'عمار محمد الديواني', title: 'المراجعة المركزة | فيزياء الثالث متوسط | الفصل الاول كاملاً |', youtubeId: '9bjbpGAYjXs', scope: 'chapter', chapter: 'الفصل الأول', year: '', channelUrl: 'https://www.youtube.com/@ammmar92' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الفيزياء', teacher: 'مريم الليثي', title: 'المراجعة المركزة الاقوى لضمان💯مسائل الفيزياء للثالث متوسط الدور الثاني والدخول الشامل 2026🔥#اكسبلور', youtubeId: 'OPmJAJEtY_k', scope: 'book', year: 2026, channelUrl: 'https://www.youtube.com/@Mariamallaithi' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'الفيزياء', teacher: 'مريم الليثي', title: 'المراجعة المركزة الاقوى لمسائل فيزياء الثالث متوسط الجزء الثاني|(أهم الأسئلة الوزارية)#اكسبلور', youtubeId: '6GldSvJBSik', scope: 'book', year: '', channelUrl: 'https://www.youtube.com/@Mariamallaithi' },
    /* ===== المتوسطة — الثالث المتوسط — عربية وإنكليزية (جديد) ===== */
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'اللغة العربية', teacher: 'مازن الهلالي', title: 'المراجعة المركزة | عربي ثالث متوسط حلقة (1) | الميزان الصرفي والأبواب والمصادر | في حلقة واحدة', youtubeId: 'd6YZ1X8IAJw', scope: 'chapter', chapter: 'الميزان الصرفي والأبواب والمصادر', year: '', channelUrl: 'https://www.youtube.com/@mazenalhelaly' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'اللغة العربية', teacher: 'مازن الهلالي', title: 'المراجعة المركزة | عربي ثالث متوسط حلقة (6) | العدد | في حلقة واحدة', youtubeId: 'fVFrOk_9s0E', scope: 'chapter', chapter: 'العدد', year: '', channelUrl: 'https://www.youtube.com/@mazenalhelaly' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'اللغة الإنكليزية', teacher: 'سجاد العبيدي', title: 'مراجعة الوحدة الاولى | نص السنة | تمهيدي | اخير السنة', youtubeId: 'v_LKTxyk5xE', scope: 'chapter', chapter: 'الوحدة الأولى', year: '', channelUrl: 'https://www.youtube.com/@sajjadobaidy' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'اللغة الإنكليزية', teacher: 'سجاد العبيدي', title: 'مراجعة الوحدة الثانية | نص السنة | تمهيدي | اخير السنة', youtubeId: 'jRMMmTY7Coo', scope: 'chapter', chapter: 'الوحدة الثانية', year: '', channelUrl: 'https://www.youtube.com/@sajjadobaidy' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'اللغة الإنكليزية', teacher: 'سجاد العبيدي', title: 'مراجعة الوحدة الثالثة | نص السنة | تمهيدي | اخير السنة', youtubeId: 'Sh9zamcD6og', scope: 'chapter', chapter: 'الوحدة الثالثة', year: '', channelUrl: 'https://www.youtube.com/@sajjadobaidy' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'اللغة الإنكليزية', teacher: 'سجاد العبيدي', title: 'مراجعة الادب كل السكشنات | تمهيدي | نص السنة | اخير السنة', youtubeId: '9hanrC8SQjw', scope: 'chapter', chapter: 'الأدب', year: '', channelUrl: 'https://www.youtube.com/@sajjadobaidy' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'اللغة الإنكليزية', teacher: 'محمد النوفلي', title: 'مراجعة الوحدة الاولى - مراجعة نصف السنة | اللغة الانكليزية | الثالث المتوسط 2027', youtubeId: 'BTQCRrDKCzo', scope: 'chapter', chapter: 'الوحدة الأولى', year: 2027, channelUrl: 'https://www.youtube.com/@mohammed_nofaly9' },
    { stage: 'middle', gradeId: 'm3', grade: 'الثالث المتوسط', subject: 'اللغة الإنكليزية', teacher: 'أنس إبراهيم', title: 'انكليزي الثالث متوسط | مراجعة مركزة | جميع قواعد وقطع اليونت الاول', youtubeId: 'sY5KKn98wIw', scope: 'chapter', chapter: 'الوحدة الأولى', year: '', channelUrl: 'https://www.youtube.com/@%D8%A7%D9%86%D8%B3_%D8%A7%D8%A8%D8%B1%D8%A7%D9%87%D9%8A%D9%8521' },
    /* ===== المتوسطة — الثاني والأول المتوسط ===== */
    { stage: 'middle', gradeId: 'm2', grade: 'الثاني المتوسط', subject: 'الكيمياء', teacher: 'نور موفق', title: '01- مراجعة مركزة الفصل الاول | كيمياء الثاني متوسط | الست نور موفق | دفعة 2027', youtubeId: 'xDNiCJBS2yI', scope: 'chapter', chapter: 'الفصل الأول', year: 2027, channelUrl: 'https://www.youtube.com/@Noor_moafaq_Chemistry' },
    { stage: 'middle', gradeId: 'm2', grade: 'الثاني المتوسط', subject: 'الكيمياء', teacher: 'نور موفق', title: '02- مراجعة مركزة الفصل الثاني | المركبات الكيميائية ص24-34 | الثاني متوسط | دفعة 2027 | الست: نور موفق', youtubeId: '830WZ2xWyBM', scope: 'chapter', chapter: 'الفصل الثاني', year: 2027, channelUrl: 'https://www.youtube.com/@Noor_moafaq_Chemistry' },
    { stage: 'middle', gradeId: 'm2', grade: 'الثاني المتوسط', subject: 'الكيمياء', teacher: 'أيوب', title: '8th Grade Chemistry || Chapter 1 Review in One Lecture || 2027 Recording', youtubeId: 'RhUfpE_z8Mg', scope: 'chapter', chapter: 'الفصل الأول', year: 2027, channelUrl: '' },
    { stage: 'middle', gradeId: 'm2', grade: 'الثاني المتوسط', subject: 'اللغة الإنكليزية', teacher: 'محمد النوفلي', title: 'مراجع الوحدة الاولى - انكليزي الثاني المتوسط | أ.محمد النوفلي', youtubeId: 'Lto-68kgd4w', scope: 'chapter', chapter: 'الوحدة الأولى', year: '', channelUrl: 'https://www.youtube.com/@mohammed_nofaly9' },
    { stage: 'middle', gradeId: 'm1', grade: 'الأول المتوسط', subject: 'الكيمياء', teacher: 'نور العبيدي', title: 'المراجعة المركزة الاقوى لنصف السنة /كيمياء الاول المتوسط /الفصل الاول كامل /2026 أ.نور العبيدي', youtubeId: 'fuQQb7h4ewA', scope: 'chapter', chapter: 'الفصل الأول', year: 2026, channelUrl: 'https://www.youtube.com/@malazm.alshams' },
    /* ===== الإعدادية — السادس الإعدادي — رياضيات ===== */
    { stage: 'prep', gradeId: 'r6', grade: 'السادس الإعدادي', subject: 'الرياضيات', teacher: 'عباس الدراجي', title: 'فصل اول || سادس علمي 2027', playlistId: 'PLFvZG69HOWk8BJIjQeblSrQ1dhk9SVzZp', scope: 'chapter', chapter: 'الفصل الأول', year: 2027, channelUrl: 'https://www.youtube.com/@Abasali.92' },
    { stage: 'prep', gradeId: 'r6', grade: 'السادس الإعدادي', subject: 'الرياضيات', teacher: 'مؤمل مهدي', title: 'المراجعة المركزة | رياضيات السادس العلمي | الفصل الاول | في محاضرة واحدة', youtubeId: 'n3Xt1R1VhJ4', scope: 'chapter', chapter: 'الفصل الأول', year: '', channelUrl: 'https://www.youtube.com/channel/UCa7sO8mFcUB4Lvvih-rvt7g' },
    { stage: 'prep', gradeId: 'r6', grade: 'السادس الإعدادي', subject: 'الرياضيات', teacher: 'مؤمل مهدي', title: 'المراجعة المركزة | رياضيات السادس العلمي | الفصل الرابع | في محاضرة واحدة', youtubeId: 'qehZGCmbJ0Q', scope: 'chapter', chapter: 'الفصل الرابع', year: '', channelUrl: 'https://www.youtube.com/channel/UCa7sO8mFcUB4Lvvih-rvt7g' },
    { stage: 'prep', gradeId: 'r6', grade: 'السادس الإعدادي', subject: 'الرياضيات', teacher: 'مؤمل مهدي', title: 'المراجعة المركزة 2026', playlistId: 'PL4pwFnkdyNKb8MRvJb71ALm-ClyEqZS8O', scope: 'book', year: 2026, channelUrl: 'https://www.youtube.com/channel/UCa7sO8mFcUB4Lvvih-rvt7g' },
    { stage: 'prep', gradeId: 'r6', grade: 'السادس الإعدادي', subject: 'الرياضيات', teacher: 'ياسر حسن', title: 'Intensive Review: Chapter One, 6th Grade Literary Mathematics - Yasser Hassan', youtubeId: 'ozg5H3cLtWk', scope: 'chapter', chapter: 'الفصل الأول', year: '', channelUrl: 'https://www.youtube.com/channel/UCFFIqpAYfvaJbM_nwAJPvOQ' },
    /* ===== الإعدادية — السادس الإعدادي — فيزياء ===== */
    { stage: 'prep', gradeId: 'r6', grade: 'السادس الإعدادي', subject: 'الفيزياء', teacher: 'منتظر الخفاجي', title: 'مراجعة مركزة ومشرحات || فيزياء سادس علمي مسائل الفصل الاول ب4 ساعات حتى لو مفاهم راح تفهم وتضمن 100', youtubeId: 'VmBp0Be-ZL8', scope: 'chapter', chapter: 'الفصل الأول', year: '', channelUrl: 'https://www.youtube.com/@montather.313' },
    { stage: 'prep', gradeId: 'r6', grade: 'السادس الإعدادي', subject: 'الفيزياء', teacher: 'منتظر الخفاجي', title: 'المراجعة المركزة فيزياء سادس علمي || شرحيات الفصل الاول بساعتين فقط وبتفصيل حتى لو مفاهم راح تفهم', youtubeId: 'MnCSwtdwOKE', scope: 'chapter', chapter: 'الفصل الأول', year: '', channelUrl: 'https://www.youtube.com/@montather.313' },
    { stage: 'prep', gradeId: 'r6', grade: 'السادس الإعدادي', subject: 'الفيزياء', teacher: 'منتظر الخفاجي', title: 'مراجعة مركزة فيزياء سادس علمي شرحيات الفصل الثاني في ساعتين حتى لو مفاهم راح تفهم ضمان ال100', youtubeId: 'UoP-X0-MhGE', scope: 'chapter', chapter: 'الفصل الثاني', year: '', channelUrl: 'https://www.youtube.com/@montather.313' },
    { stage: 'prep', gradeId: 'r6', grade: 'السادس الإعدادي', subject: 'الفيزياء', teacher: 'مؤيد سليم الزيدي', title: 'المراجعة المركز جميع الفصول', playlistId: 'PLN31gUFodYpS40Vwx3bWEnhAOj1MNzXpR', scope: 'book', year: '', channelUrl: 'https://www.youtube.com/@mouid92' },
    { stage: 'prep', gradeId: 'r6', grade: 'السادس الإعدادي', subject: 'الفيزياء', teacher: 'حسن عبد الكاظم الربيعي', title: 'المراجعة المركزة 2026 | جميع مسائل الفصل الثاني في محاضرة واحدة', youtubeId: 'ETrQ2_tw9rw', scope: 'chapter', chapter: 'الفصل الثاني', year: 2026, channelUrl: 'https://www.youtube.com/channel/UCnmheCEUos1FnBM0hJZkjgA' },
    /* ===== الإعدادية — السادس الإعدادي — كيمياء وأحياء وإنكليزية ===== */
    { stage: 'prep', gradeId: 'r6', grade: 'السادس الإعدادي', subject: 'الكيمياء', teacher: 'نور الدين الدليمي', title: 'المراجعة المركزة | الفصل الاول | 2026 | نصف السنة | كيمياء السادس العلمي', youtubeId: 'pOwnYmneyFg', scope: 'chapter', chapter: 'الفصل الأول', year: 2026, channelUrl: 'https://youtube.com/@noor_100ch' },
    { stage: 'prep', gradeId: 'r6', grade: 'السادس الإعدادي', subject: 'الأحياء', teacher: 'محمد العنزي', title: 'المراجعة المركزة ضمان الدرجة الكاملة', playlistId: 'PLsYLu8VyivsRak7H18sFAl4m3umWuWonb', scope: 'book', year: '', channelUrl: 'https://www.youtube.com/channel/UCJ4WrZmVYfHwg8UMxto7L0A' },
    { stage: 'prep', gradeId: 'r6', grade: 'السادس الإعدادي', subject: 'الأحياء', teacher: 'محمد العنزي', title: 'الفصل الاول بمحاضرة واحدة || المراجعة المركزة || احياء السادس العلمي ||', youtubeId: 'Q2kMK7XfD1M', scope: 'chapter', chapter: 'الفصل الأول', year: '', channelUrl: 'https://www.youtube.com/channel/UCJ4WrZmVYfHwg8UMxto7L0A' },
    { stage: 'prep', gradeId: 'r6', grade: 'السادس الإعدادي', subject: 'الأحياء', teacher: 'سالم المنصور', title: 'المراجعة الشاملة | الفصل الرابع.', youtubeId: 'rjr0K6X1jqA', scope: 'chapter', chapter: 'الفصل الرابع', year: '', channelUrl: '' },
    { stage: 'prep', gradeId: 'r6', grade: 'السادس الإعدادي', subject: 'الأحياء', teacher: 'مصطفى الحافظ', title: 'Comprehensive Review | Chapter One | 1 |', youtubeId: 'P8p0srFOdvA', scope: 'chapter', chapter: 'الفصل الأول', year: '', channelUrl: '' },
    { stage: 'prep', gradeId: 'r6', grade: 'السادس الإعدادي', subject: 'اللغة الإنكليزية', teacher: 'علي الجبوري', title: 'مراجعة مركزة | انكليزي السادس الاعدادي | اليونت الاول في محاضرة واحدة | نصف السنة 2026', youtubeId: 'Unxygr4OP_M', scope: 'chapter', chapter: 'الوحدة الأولى', year: 2026, channelUrl: 'https://www.youtube.com/@ali_jub14' },
    { stage: 'prep', gradeId: 'r6', grade: 'السادس الإعدادي', subject: 'اللغة الإنكليزية', teacher: 'علي الجبوري', title: 'مراجعة مركزة | انكليزي السادس الاعدادي | اليونت الثاني في محاضرة واحدة | نصف السنة 2026', youtubeId: '0aZL8KkVLi8', scope: 'chapter', chapter: 'الوحدة الثانية', year: 2026, channelUrl: 'https://www.youtube.com/@ali_jub14' },
    { stage: 'prep', gradeId: 'r6', grade: 'السادس الإعدادي', subject: 'اللغة الإنكليزية', teacher: 'علي الجبوري', title: 'مراجعة مركزة | انكليزي السادس الاعدادي | الادب في محاضرة واحدة | نصف السنة 2026', youtubeId: 'nCiGix5sSvQ', scope: 'chapter', chapter: 'الأدب', year: 2026, channelUrl: 'https://www.youtube.com/@ali_jub14' },
    /* ===== الإعدادية — الخامس الإعدادي ===== */
    { stage: 'prep', gradeId: 'r5', grade: 'الخامس الإعدادي', subject: 'الرياضيات', teacher: 'مؤمل مهدي', title: 'المراجعة المركزة | رياضيات الخامس العلمي | الفصل الاول | في محاضرة واحدة', youtubeId: 'SvAiLPNYC9w', scope: 'chapter', chapter: 'الفصل الأول', year: '', channelUrl: 'https://www.youtube.com/channel/UCa7sO8mFcUB4Lvvih-rvt7g' },
    { stage: 'prep', gradeId: 'r5', grade: 'الخامس الإعدادي', subject: 'الرياضيات', teacher: 'مؤمل مهدي', title: 'المراجعة المركزة | رياضيات الخامس العلمي | الفصل الثاني | في محاضرة واحدة', youtubeId: 'KN5YpylPU-I', scope: 'chapter', chapter: 'الفصل الثاني', year: '', channelUrl: 'https://www.youtube.com/channel/UCa7sO8mFcUB4Lvvih-rvt7g' },
    { stage: 'prep', gradeId: 'r5', grade: 'الخامس الإعدادي', subject: 'الرياضيات', teacher: 'مؤمل مهدي', title: 'المراجعة المركزة | رياضيات الخامس العلمي | الفصل الرابع | في محاضرة واحدة', youtubeId: '0OQiSqY8y2w', scope: 'chapter', chapter: 'الفصل الرابع', year: '', channelUrl: 'https://www.youtube.com/channel/UCa7sO8mFcUB4Lvvih-rvt7g' },
    { stage: 'prep', gradeId: 'r5', grade: 'الخامس الإعدادي', subject: 'الأحياء', teacher: 'علي منهل', title: 'احياء الخامس العلمي الاستاذ علي منهل مراجعة مادة الشهر الاول التغذية التغذية في الاحياء وحيدة الخلية', youtubeId: 'wuA8r0gu5S8', scope: 'chapter', chapter: 'الفصل الأول', year: '', channelUrl: 'https://www.youtube.com/channel/UCldEsSYIZ1DRdWrXUhph3BQ' }
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
      viewUrl: b.pdf || b.url,
      downloadUrl: b.pdf || b.url,
      description: 'كتاب رسمي — ' + (b.source || 'وزارة التربية العراقية')
    };
  });
  /* الملازم المتوفرة بصيغة PDF داخل الموقع تظهر في المكتبة أيضاً */
  (c.malazim || []).forEach(function (m, i) {
    if (!m.pdf) return;
    window.SANAD_DATA.books.push({
      id: 'malz-' + i,
      title: m.title || ('ملزمة ' + (m.subject || '')),
      subject: m.subject || '',
      grade: m.grade || '',
      author: m.teacher || '',
      publisher: '',
      type: 'ملزمة',
      year: m.year || '',
      official: false,
      viewUrl: m.pdf,
      downloadUrl: m.pdf,
      description: m.note || ''
    });
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
