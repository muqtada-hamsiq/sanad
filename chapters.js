/* سند — خريطة فصول الكتب المدرسية (مستخرجة من خريطة المعلم الذكي v3،
   وهي بدورها مقروءة من ملفات PDF الرسمية في web/pdfs/books/ عبر pdftotext)
   SANAD_CHAPTERS[gradeId][subject] = { book, edition, kind, chapters:[{n,title,page,deleted,note,lessons,part}] }
   40 كتاباً، 267 فصلاً/وحدة موثقاً؛ 21 منها بلا رقم صفحة (معنوّنة ومؤكدة).
   الفصل المحذوف (deleted:true) خارج نطاق الامتحان الوزاري فقط — دروسه تبقى للمراجعة. */
window.SANAD_CHAPTERS = {
  "m1": {
    "الرياضيات": {
      "book": "كتاب الرياضيات — الأول المتوسط",
      "edition": "طبعات 1446هـ / 2024م",
      "kind": "الفصل",
      "chapters": [
        {
          "n": 1,
          "title": "الأعداد الصحيحة",
          "page": 7,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 2,
          "title": "الأعداد النسبية",
          "page": 32,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 3,
          "title": "متعددة الحدود",
          "page": 59,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 4,
          "title": "الجمل المفتوحة",
          "page": 82,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 5,
          "title": "الهندسة",
          "page": 105,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 6,
          "title": "القياس — المساحات والحجوم",
          "page": 130,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 7,
          "title": "الإحصاء والاحتمال",
          "page": 157,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        }
      ]
    },
    "الفيزياء": {
      "book": "كتاب الفيزياء — الأول المتوسط",
      "edition": "طبعات 1446هـ / 2024م",
      "kind": "الفصل",
      "chapters": [
        {
          "n": 1,
          "title": "خواص المادة",
          "page": 7,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 2,
          "title": "القوة",
          "page": 29,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 3,
          "title": "الضغط",
          "page": 44,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 4,
          "title": "الحرارة",
          "page": 61,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 5,
          "title": "أثر الحرارة في المواد",
          "page": 75,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        }
      ]
    },
    "الكيمياء": {
      "book": "كتاب الكيمياء — الأول المتوسط",
      "edition": "طبعات 1446هـ / 2024م",
      "kind": "الفصل",
      "chapters": [
        {
          "n": 1,
          "title": "خواص المادة",
          "page": 6,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 2,
          "title": "الذرات والعناصر والمركبات",
          "page": 25,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 3,
          "title": "ترتيب العناصر وأصنافها",
          "page": 50,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 4,
          "title": "التفاعلات الكيميائية والتعبير عنها",
          "page": 71,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        }
      ]
    },
    "الأحياء": {
      "book": "كتاب علم الأحياء — الأول المتوسط",
      "edition": "طبعات 1446هـ / 2024م",
      "kind": "الفصل",
      "chapters": [
        {
          "n": 1,
          "title": "المجاهر",
          "page": 6,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 2,
          "title": "علماء أسهموا في تطوير علم الأحياء",
          "page": 15,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 3,
          "title": "الخلية",
          "page": 26,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 4,
          "title": "الانقسام الخلوي",
          "page": 37,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 5,
          "title": "تنظيم عمل أجسام الكائنات الحية",
          "page": 46,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 6,
          "title": "مفهوم علم الوراثة",
          "page": 56,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 7,
          "title": "تطبيقات علم الوراثة",
          "page": 65,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 8,
          "title": "الإسعافات الأولية",
          "page": 76,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 9,
          "title": "الدفاع المدني",
          "page": 86,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        }
      ]
    },
    "الحاسوب": {
      "book": "كتاب الحاسوب — الأول المتوسط",
      "edition": "طبعات 1445هـ / 2024م",
      "kind": "الوحدة",
      "chapters": [
        {
          "n": 1,
          "title": "أساسيات الحاسوب",
          "page": 6,
          "deleted": false,
          "note": null,
          "lessons": "الحاسوب ومكوناته؛ البيانات وتمثيلها في الحاسوب",
          "part": null
        },
        {
          "n": 2,
          "title": "برمجيات الحاسوب",
          "page": 31,
          "deleted": false,
          "note": null,
          "lessons": "نظام التشغيل؛ القوائم المختصرة",
          "part": null
        },
        {
          "n": 3,
          "title": "الخوارزميات ومبادئ البرمجة",
          "page": 81,
          "deleted": false,
          "note": null,
          "lessons": "مبادئ الخوارزميات؛ مبادئ البرمجة",
          "part": null
        },
        {
          "n": 4,
          "title": "تكنولوجيا المعلومات والإنترنت",
          "page": 118,
          "deleted": false,
          "note": null,
          "lessons": "تكنولوجيا المعلومات؛ شبكة الإنترنت",
          "part": null
        }
      ]
    },
    "التربية الإسلامية": {
      "book": "كتاب القرآن الكريم والتربية الإسلامية — الأول المتوسط",
      "edition": "طبعات 1446هـ / 2024م",
      "kind": "الوحدة",
      "chapters": [
        {
          "n": 1,
          "title": "الوحدة الأولى",
          "page": 14,
          "deleted": false,
          "note": null,
          "lessons": "سورة الفجر؛ أهمية القرآن الكريم في حياة الإنسان؛ الحديث الشريف (من سن سنة حسنة)؛ ثمار العبادات؛ من السيرة النبوية الشريفة؛ أداء الأمانة",
          "part": null
        },
        {
          "n": 2,
          "title": "الوحدة الثانية",
          "page": 45,
          "deleted": false,
          "note": null,
          "lessons": "سورة البروج؛ القرآن الكريم؛ الحديث الشريف (الصدق والكذب)؛ الطهارة؛ من السيرة النبوية (هجرة النبي)؛ التهذيب (النظافة)",
          "part": null
        },
        {
          "n": 3,
          "title": "الوحدة الثالثة",
          "page": 68,
          "deleted": false,
          "note": null,
          "lessons": "سورة الانشقاق؛ القرآن الكريم نزوله وموضوعاته؛ الحديث الشريف (النهي عن الحسد)؛ الوضوء؛ من سير الصحابة أبو بكر الصديق (رض)؛ السخرية واللمز والتنابز بالألقاب",
          "part": null
        },
        {
          "n": 4,
          "title": "الوحدة الرابعة",
          "page": 91,
          "deleted": false,
          "note": null,
          "lessons": "سورة المطففين",
          "part": null
        },
        {
          "n": 5,
          "title": "الوحدة الخامسة",
          "page": 116,
          "deleted": false,
          "note": null,
          "lessons": "سورة الانفطار",
          "part": null
        }
      ]
    }
  },
  "m2": {
    "الرياضيات": {
      "book": "كتاب الرياضيات — الثاني المتوسط",
      "edition": null,
      "kind": "الفصل",
      "chapters": [
        {
          "n": 1,
          "title": "الأعداد النسبية",
          "page": 4,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 2,
          "title": "الأعداد الحقيقية",
          "page": null,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 3,
          "title": "الحدوديات",
          "page": 50,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 4,
          "title": "المعادلات والمتباينات",
          "page": null,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 5,
          "title": "الهندسة والقياس",
          "page": 96,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 6,
          "title": "الهندسة الإحداثية",
          "page": null,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 7,
          "title": "الإحصاء والاحتمالات",
          "page": null,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        }
      ]
    },
    "الفيزياء": {
      "book": "كتاب الفيزياء — الثاني المتوسط",
      "edition": null,
      "kind": "الفصل",
      "chapters": [
        {
          "n": 1,
          "title": "الحركة",
          "page": 5,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 2,
          "title": "قوانين الحركة",
          "page": null,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 3,
          "title": "الشغل والقدرة والطاقة",
          "page": 34,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 4,
          "title": "الآلات البسيطة",
          "page": null,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 5,
          "title": "الحركة الموجية والصوت",
          "page": 56,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 6,
          "title": "الضوء",
          "page": null,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        }
      ]
    },
    "الكيمياء": {
      "book": "كتاب الكيمياء — الثاني المتوسط",
      "edition": null,
      "kind": "الفصل",
      "chapters": [
        {
          "n": 1,
          "title": "العناصر والترابط الكيميائي",
          "page": 5,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 2,
          "title": "المركبات الكيميائية",
          "page": null,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 3,
          "title": "الصيغ والتفاعلات الكيميائية",
          "page": 35,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 4,
          "title": "المحاليل",
          "page": null,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 5,
          "title": "الحوامض والقواعد",
          "page": 69,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 6,
          "title": "الدلائل الكيميائية والأملاح",
          "page": null,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        }
      ]
    },
    "الأحياء": {
      "book": "كتاب علم الأحياء — الثاني المتوسط",
      "edition": null,
      "kind": "الفصل",
      "chapters": [
        {
          "n": 1,
          "title": "علم التصنيف",
          "page": 4,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 2,
          "title": "كيف تصنف الكائنات الحية؟",
          "page": null,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 3,
          "title": "الكائنات الحية البسيطة",
          "page": 27,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 4,
          "title": "مملكة النباتات",
          "page": null,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 5,
          "title": "مملكة الحيوانات",
          "page": null,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 6,
          "title": "البيئة ومكوناتها",
          "page": 70,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 7,
          "title": "التوازن في النظام البيئي",
          "page": null,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        }
      ]
    },
    "الحاسوب": {
      "book": "كتاب الحاسوب — الثاني المتوسط",
      "edition": "طبعات 1446هـ / 2025م",
      "kind": "الوحدة",
      "chapters": [
        {
          "n": 1,
          "title": "منصة الحاسوب",
          "page": 5,
          "deleted": false,
          "note": null,
          "lessons": "أهمية منصة الحاسوب؛ الذاكرة ووحدات التخزين في الحواسيب",
          "part": null
        },
        {
          "n": 2,
          "title": "برمجيات الحاسوب",
          "page": 30,
          "deleted": false,
          "note": null,
          "lessons": "مقدمة عن برنامج معالج النصوص؛ التبويبات",
          "part": null
        },
        {
          "n": 3,
          "title": "تراكيب التحكم الاختيارية",
          "page": 76,
          "deleted": false,
          "note": null,
          "lessons": "جملة الاختيار والعمليات العلائقية والمنطقية؛ جمل التحكم الشرطية",
          "part": null
        },
        {
          "n": 4,
          "title": "الاتصالات والشبكة العنكبوتية",
          "page": 112,
          "deleted": false,
          "note": null,
          "lessons": "الاتصالات والإنترنت؛ البحث عن المعلومات في الشبكة العنكبوتية",
          "part": null
        }
      ]
    },
    "التربية الإسلامية": {
      "book": "كتاب القرآن الكريم والتربية الإسلامية — الثاني المتوسط",
      "edition": null,
      "kind": "الوحدة",
      "chapters": [
        {
          "n": 1,
          "title": "الوحدة الأولى",
          "page": 7,
          "deleted": false,
          "note": null,
          "lessons": "سورة النبأ",
          "part": null
        },
        {
          "n": 2,
          "title": "الوحدة الثانية",
          "page": 30,
          "deleted": false,
          "note": null,
          "lessons": "سورة القيامة",
          "part": null
        },
        {
          "n": 3,
          "title": "الوحدة الثالثة",
          "page": 53,
          "deleted": false,
          "note": null,
          "lessons": "سورة المزمل",
          "part": null
        },
        {
          "n": 4,
          "title": "الوحدة الرابعة",
          "page": 78,
          "deleted": false,
          "note": null,
          "lessons": "سورة الجمعة",
          "part": null
        },
        {
          "n": 5,
          "title": "الوحدة الخامسة",
          "page": 100,
          "deleted": false,
          "note": null,
          "lessons": "سورة الصف؛ أصحاب البستان؛ في منع الضرر (حديث نبوي شريف)؛ السجود لله؛ أسماء بنت أبي بكر الصديق (رض)؛ الصحابي جليبيب الأنصاري (رض)؛ التهذيب (صلة الرحم)",
          "part": null
        }
      ]
    },
    "اللغة العربية": {
      "book": "كتاب اللغة العربية — الثاني المتوسط (الجزء الأول)",
      "edition": null,
      "kind": "الوحدة",
      "chapters": [
        {
          "n": 1,
          "title": "رعاية الله ووعده",
          "page": 5,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": "الجزء الأول"
        },
        {
          "n": 2,
          "title": "الإخاء",
          "page": 22,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": "الجزء الأول"
        },
        {
          "n": 3,
          "title": "طموح وعلو الهمة",
          "page": 34,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": "الجزء الأول"
        },
        {
          "n": 4,
          "title": "المرء يخلد بعلمه وعمله",
          "page": 51,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": "الجزء الأول"
        },
        {
          "n": 5,
          "title": "نحن وعلوم العربية",
          "page": 64,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": "الجزء الأول"
        },
        {
          "n": 6,
          "title": "أمجادنا وحضارتنا",
          "page": 81,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": "الجزء الأول"
        },
        {
          "n": 7,
          "title": "عجائب من عالم الحيوان",
          "page": 93,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": "الجزء الأول"
        },
        {
          "n": 8,
          "title": "النهر والحياة",
          "page": 105,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": "الجزء الأول"
        }
      ]
    },
    "الاجتماعيات": {
      "book": "كتاب الاجتماعيات — الثاني المتوسط",
      "edition": null,
      "kind": "الفصل",
      "chapters": [
        {
          "n": 1,
          "title": "جغرافية العالم العربي (موقعه الجغرافي، مساحته – خصائصه الطبيعية)",
          "page": 4,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 2,
          "title": "العالم العربي (السكان والنشاط الاقتصادي)",
          "page": 39,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 3,
          "title": "أحوال شبه الجزيرة العربية قبل الإسلام",
          "page": 70,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 4,
          "title": "تاريخ مكة قبل الإسلام",
          "page": 88,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        }
      ]
    }
  },
  "m3": {
    "الرياضيات": {
      "book": "كتاب الرياضيات — الثالث المتوسط",
      "edition": null,
      "kind": "الفصل",
      "chapters": [
        {
          "n": 1,
          "title": "العلاقات والمتباينات في الأعداد الحقيقية",
          "page": 5,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 2,
          "title": "المقادير الجبرية",
          "page": 24,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 3,
          "title": "المعادلات",
          "page": 51,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 4,
          "title": "الهندسة الإحداثية",
          "page": 80,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 5,
          "title": "الهندسة والقياس",
          "page": 99,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 6,
          "title": "الإحصاء والاحتمالات",
          "page": 126,
          "deleted": true,
          "note": "محذوف من الامتحان الوزاري 2026",
          "lessons": null,
          "part": null
        }
      ]
    },
    "الفيزياء": {
      "book": "كتاب الفيزياء — الثالث المتوسط",
      "edition": null,
      "kind": "الفصل",
      "chapters": [
        {
          "n": 1,
          "title": "الكهربائية الساكنة",
          "page": 7,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 2,
          "title": "المغناطيسية",
          "page": 33,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 3,
          "title": "التيار الكهربائي",
          "page": 49,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 4,
          "title": "البطارية والقوة الدافعة الكهربائية",
          "page": 81,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 5,
          "title": "الطاقة والقدرة الكهربائية",
          "page": 95,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 6,
          "title": "الكهربائية والمغناطيسية",
          "page": 113,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 7,
          "title": "المحولة الكهربائية",
          "page": 135,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 8,
          "title": "تكنولوجيا مصادر الطاقة",
          "page": 149,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 9,
          "title": "فيزياء الجو وتقنية الاتصالات الحديثة",
          "page": 163,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        }
      ]
    },
    "الكيمياء": {
      "book": "كتاب الكيمياء — الثالث المتوسط",
      "edition": null,
      "kind": "الفصل",
      "chapters": [
        {
          "n": 1,
          "title": "التركيب الذري للمادة",
          "page": 13,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 2,
          "title": "الزمرتان الأولى والثانية IA و IIA",
          "page": 41,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 3,
          "title": "الزمرة الثالثة IIIA",
          "page": 53,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 4,
          "title": "المحاليل والتعبير عن التركيز",
          "page": 65,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 5,
          "title": "الزمرة الرابعة IVA",
          "page": 79,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 6,
          "title": "مدخل في الكيمياء العضوية",
          "page": 89,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 7,
          "title": "الزمرة الخامسة VA",
          "page": 103,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 8,
          "title": "الزمرة السادسة VIA",
          "page": 121,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 9,
          "title": "الزمرة السابعة VIIA",
          "page": 135,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        }
      ]
    },
    "الأحياء": {
      "book": "كتاب علم الأحياء (الإنسان وصحته) — الثالث المتوسط",
      "edition": null,
      "kind": "الفصل",
      "chapters": [
        {
          "n": 1,
          "title": "الجهاز العصبي",
          "page": 5,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 2,
          "title": "الجهاز الهيكلي (العظمي)",
          "page": 15,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 3,
          "title": "الجهاز العضلي",
          "page": 31,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 4,
          "title": "الجهاز الهضمي",
          "page": 41,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 5,
          "title": "جهاز الدوران",
          "page": 57,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 6,
          "title": "جهاز التنفس",
          "page": 71,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 7,
          "title": "الجهاز البولي والإخراج",
          "page": 81,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 8,
          "title": "الجهاز التناسلي",
          "page": 93,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 9,
          "title": "أعضاء الحس",
          "page": 101,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 10,
          "title": "الإفراز",
          "page": 115,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 11,
          "title": "المناعة والأمراض",
          "page": 123,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        }
      ]
    },
    "اللغة العربية": {
      "book": "كتاب اللغة العربية — الثالث المتوسط (الجزء الأول والثاني)",
      "edition": null,
      "kind": "الوحدة",
      "chapters": [
        {
          "n": 1,
          "title": "الحضارة: أصالة وتلاقح",
          "page": 9,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": "الجزء الأول"
        },
        {
          "n": 2,
          "title": "الضعفاء أمانة الله",
          "page": 26,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": "الجزء الأول"
        },
        {
          "n": 3,
          "title": "دجلة النهر الخالد",
          "page": 43,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": "الجزء الأول"
        },
        {
          "n": 4,
          "title": "الإعلان العالمي لحقوق الإنسان",
          "page": 60,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": "الجزء الأول"
        },
        {
          "n": 5,
          "title": "الإرادة والعزيمة",
          "page": 73,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": "الجزء الأول"
        },
        {
          "n": 6,
          "title": "الشهادة",
          "page": 85,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": "الجزء الأول"
        },
        {
          "n": 7,
          "title": "البر بين الأبناء والآباء",
          "page": 96,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": "الجزء الأول"
        },
        {
          "n": 8,
          "title": "الإخاء",
          "page": 108,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": "الجزء الأول"
        },
        {
          "n": 9,
          "title": "الاعتدال",
          "page": 5,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": "الجزء الثاني"
        },
        {
          "n": 10,
          "title": "الإيمان",
          "page": 26,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": "الجزء الثاني"
        },
        {
          "n": 11,
          "title": "الإنسان والكون",
          "page": 40,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": "الجزء الثاني"
        },
        {
          "n": 12,
          "title": "الحوار: أهميته وآدابه",
          "page": 53,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": "الجزء الثاني"
        },
        {
          "n": 13,
          "title": "مسلة حمورابي (الدستور والحضارة)",
          "page": 75,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": "الجزء الثاني"
        }
      ]
    },
    "اللغة الإنكليزية": {
      "book": "English for Iraq — 3rd Intermediate (Student's Book)",
      "edition": null,
      "kind": "الوحدة",
      "chapters": [
        {
          "n": 1,
          "title": "Describing things",
          "page": 4,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        }
      ]
    },
    "التربية الإسلامية": {
      "book": "كتاب القرآن الكريم والتربية الإسلامية — الثالث المتوسط",
      "edition": null,
      "kind": "الوحدة",
      "chapters": [
        {
          "n": 1,
          "title": "الوحدة الأولى",
          "page": 9,
          "deleted": false,
          "note": null,
          "lessons": "سورة الحشر؛ الدعاء؛ البر والإثم؛ صلاة الاستسقاء؛ آل بيت رسول الله؛ احترام الوقت",
          "part": null
        },
        {
          "n": 2,
          "title": "الوحدة الثانية",
          "page": 37,
          "deleted": false,
          "note": null,
          "lessons": "سورة الرحمن؛ الحلال والحرام؛ آداب الطريق؛ الزكاة؛ صحابة رسول الله؛ أدب الجوارح",
          "part": null
        },
        {
          "n": 3,
          "title": "الوحدة الثالثة",
          "page": 67,
          "deleted": false,
          "note": null,
          "lessons": "سورة القمر (للحفظ 1–8)؛ إعجاز القرآن؛ الشهيد؛ الخمس؛ الإمام علي (ع)؛ المسؤولية",
          "part": null
        },
        {
          "n": 4,
          "title": "الوحدة الرابعة",
          "page": 94,
          "deleted": false,
          "note": null,
          "lessons": "سورة الحجرات؛ الأمثال في القرآن الكريم؛ بر الوالدين؛ الحج؛ فاطمة الزهراء (ع)؛ أبناء محلتنا",
          "part": null
        },
        {
          "n": 5,
          "title": "الوحدة الخامسة",
          "page": 121,
          "deleted": false,
          "note": null,
          "lessons": "سورة الفتح؛ قصة من القرآن الكريم؛ من حلاوة الإيمان؛ الصدقات وأنواعها؛ الإمام الحسين (ع)؛ الحرية المنضبطة",
          "part": null
        }
      ]
    },
    "الاجتماعيات": {
      "book": "كتاب الاجتماعيات — الثالث المتوسط",
      "edition": null,
      "kind": "الفصل",
      "chapters": [
        {
          "n": 1,
          "title": "الجغرافية — الفصل الأول: الخصائص الطبيعية لجغرافية العراق",
          "page": 5,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 2,
          "title": "الجغرافية — الفصل الثاني: الخصائص البشرية لجغرافية العراق",
          "page": 45,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 3,
          "title": "التاريخ — الفصل الأول: العراق في العهد العثماني",
          "page": 81,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 4,
          "title": "التاريخ — الفصل الثاني: العراق في أثناء الحرب العالمية الأولى وبعدها",
          "page": 91,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 5,
          "title": "التربية الوطنية: القيم الوطنية والاجتماعية",
          "page": 138,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 6,
          "title": "التربية الوطنية: قضايا اجتماعية عامة",
          "page": 146,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        }
      ]
    }
  },
  "r4": {
    "الرياضيات": {
      "book": "كتاب الرياضيات — الرابع الإعدادي (الفرع العلمي)",
      "edition": null,
      "kind": "الفصل",
      "chapters": [
        {
          "n": 1,
          "title": "المنطق الرياضي",
          "page": null,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 2,
          "title": "المعادلات والمتباينات",
          "page": null,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 3,
          "title": "الأسس والجذور",
          "page": null,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 4,
          "title": "حساب المثلثات",
          "page": null,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 5,
          "title": "هندسة المتجهات",
          "page": null,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 6,
          "title": "الهندسة الإحداثية",
          "page": null,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 7,
          "title": "الإحصاء",
          "page": null,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        }
      ]
    },
    "الفيزياء": {
      "book": "كتاب الفيزياء — الرابع الإعدادي",
      "edition": null,
      "kind": "الفصل",
      "chapters": [
        {
          "n": 1,
          "title": "معلمات رئيسة في الفيزياء",
          "page": 4,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 2,
          "title": "الخصائص الميكانيكية للمادة",
          "page": 15,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 3,
          "title": "الموائع الساكنة",
          "page": 28,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 4,
          "title": "الخصائص الحرارية للمادة",
          "page": 52,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 5,
          "title": "الضوء",
          "page": 84,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 6,
          "title": "انعكاس وانكسار الضوء",
          "page": 95,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 7,
          "title": "المرايا",
          "page": 114,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 8,
          "title": "العدسات الرقيقة",
          "page": 133,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 9,
          "title": "الكهرباء الساكنة (المستقرة)",
          "page": 156,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        }
      ]
    },
    "الكيمياء": {
      "book": "كتاب الكيمياء — الرابع الإعدادي",
      "edition": null,
      "kind": "الفصل",
      "chapters": [
        {
          "n": 1,
          "title": "المفاهيم الأساسية في الكيمياء",
          "page": 5,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 2,
          "title": "الغازات",
          "page": 31,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 3,
          "title": "المعادلات والحسابات الكيميائية",
          "page": 64,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 4,
          "title": "الكيمياء العضوية",
          "page": 87,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 5,
          "title": "الكيمياء النووية",
          "page": 118,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        }
      ]
    },
    "الأحياء": {
      "book": "كتاب علم الأحياء — الرابع الإعدادي",
      "edition": null,
      "kind": "الفصل",
      "chapters": [
        {
          "n": 1,
          "title": "تصنيف الكائنات الحية",
          "page": 5,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 2,
          "title": "علم البيئة والنظام البيئي",
          "page": 17,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 3,
          "title": "السلسلة الغذائية ودورة العناصر في الطبيعة",
          "page": 27,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 4,
          "title": "المواطن البيئية والمناطق الاحيائية",
          "page": 45,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 5,
          "title": "العوامل المؤثرة في البيئة",
          "page": 65,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 6,
          "title": "تلاؤم الحيوان مع البيئة",
          "page": 77,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 7,
          "title": "تلاؤم النبات مع البيئة",
          "page": 121,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 8,
          "title": "تلاؤم الحيوانات والنباتات مع أنماط الحياة في البيئة",
          "page": 141,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 9,
          "title": "العلاقات بين الكائنات الحية والسلوك والتعاقب البيئي",
          "page": 153,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 10,
          "title": "التلوث البيئي",
          "page": 171,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        }
      ]
    },
    "اللغة العربية": {
      "book": "كتاب اللغة العربية — الرابع الإعدادي (الجزء الأول والثاني)",
      "edition": null,
      "kind": "الوحدة",
      "chapters": [
        {
          "n": 1,
          "title": "الأصالة العربية",
          "page": 10,
          "deleted": false,
          "note": null,
          "lessons": "المطالعة: الخيول العربية؛ القواعد: الفعل الماضي؛ التعبير؛ الأدب: العصر الجاهلي",
          "part": "الجزء الأول"
        },
        {
          "n": 2,
          "title": "العدالة الاجتماعية",
          "page": 28,
          "deleted": false,
          "note": null,
          "lessons": "المطالعة: العدالة الاجتماعية؛ القواعد: الفعل المضارع (رفع، نصب، جر)؛ الأدب: عنترة بن شداد",
          "part": "الجزء الأول"
        },
        {
          "n": 3,
          "title": "الأب",
          "page": 48,
          "deleted": false,
          "note": null,
          "lessons": "المطالعة: الإصغاء الفعال بين الأب وأبنائه؛ القواعد: بناء الفعل المضارع؛ التعبير؛ الأدب: الأعشى",
          "part": "الجزء الأول"
        },
        {
          "n": 4,
          "title": "الرئاسة والحكم",
          "page": 63,
          "deleted": false,
          "note": null,
          "lessons": "المطالعة: عهد الإمام علي (ع)؛ القواعد: فعل الأمر؛ الأدب: الأفوه الأودي",
          "part": "الجزء الأول"
        },
        {
          "n": 5,
          "title": "خوارق البشر",
          "page": 76,
          "deleted": false,
          "note": null,
          "lessons": "المطالعة: خوارق البشر؛ القواعد: التعدي واللزوم؛ التعبير؛ الأدب: زرقاء اليمامة",
          "part": "الجزء الأول"
        },
        {
          "n": 6,
          "title": "الكرم وصدق الحديث",
          "page": 93,
          "deleted": false,
          "note": null,
          "lessons": "المطالعة: الكرم قديماً وحديثاً؛ القواعد: الفاعل؛ الأدب: حاتم الطائي",
          "part": "الجزء الأول"
        },
        {
          "n": 7,
          "title": "إطاللة الجمال",
          "page": 107,
          "deleted": false,
          "note": null,
          "lessons": "المطالعة: إطاللة الجمال؛ القواعد: إسناد الفعل الناقص إلى الضمائر؛ الأدب: النثر الجاهلي / الأمثال والحكم",
          "part": "الجزء الأول"
        },
        {
          "n": 8,
          "title": "الدين والنصيحة",
          "page": 121,
          "deleted": false,
          "note": null,
          "lessons": "المطالعة: الدين النصيحة؛ القواعد: المفعول به؛ الأدب: النثر الجاهلي / الخطابة",
          "part": "الجزء الأول"
        },
        {
          "n": 9,
          "title": "الإيثار الدرع الحصينة",
          "page": 3,
          "deleted": false,
          "note": null,
          "lessons": "المطالعة: الإيثار الدرع الحصينة؛ القواعد: المفعول المطلق؛ التعبير؛ الأدب: الخنساء",
          "part": "الجزء الثاني"
        },
        {
          "n": 10,
          "title": "كفالة اليتيم",
          "page": 14,
          "deleted": false,
          "note": null,
          "lessons": "المطالعة: كفالة اليتيم؛ القواعد: المفعول من أجله؛ الأدب: أبو طالب",
          "part": "الجزء الثاني"
        },
        {
          "n": 11,
          "title": "الإعلام سلاح وقوة",
          "page": 27,
          "deleted": false,
          "note": null,
          "lessons": "المطالعة: الإعلام سلاح وقوة؛ القواعد: المفعول فيه؛ الأدب: حسان بن ثابت",
          "part": "الجزء الثاني"
        },
        {
          "n": 12,
          "title": "الشهادة",
          "page": 43,
          "deleted": false,
          "note": null,
          "lessons": "المطالعة: الجود بالنفس؛ القواعد: الحال؛ الأدب: كعب بن مالك",
          "part": "الجزء الثاني"
        },
        {
          "n": 13,
          "title": "الخصلة الذميمة",
          "page": 56,
          "deleted": false,
          "note": null,
          "lessons": "المطالعة: نار النميمة؛ القواعد: التمييز؛ التعبير؛ الأدب: عبدة بن الطبيب",
          "part": "الجزء الثاني"
        },
        {
          "n": 14,
          "title": "الإسلام وحرية المعتقد",
          "page": 68,
          "deleted": false,
          "note": null,
          "lessons": "المطالعة: وثيقة المدينة وحرية المعتقد؛ القواعد: توكيد الفعل؛ الأدب: النثر في صدر الإسلام",
          "part": "الجزء الثاني"
        },
        {
          "n": 15,
          "title": "إباء المرأة العربية",
          "page": 83,
          "deleted": false,
          "note": null,
          "lessons": "المطالعة: أم قصي؛ القواعد: أسلوب الشرط",
          "part": "الجزء الثاني"
        }
      ]
    },
    "الحاسوب": {
      "book": "كتاب الحاسوب — الرابع الإعدادي",
      "edition": null,
      "kind": "الوحدة",
      "chapters": [
        {
          "n": 1,
          "title": "صيانة الحاسوب",
          "page": 5,
          "deleted": false,
          "note": null,
          "lessons": "صيانة المكونات المادية للحاسوب؛ صيانة برمجيات الحاسوب",
          "part": null
        },
        {
          "n": 2,
          "title": "برمجيات الحاسوب",
          "page": 32,
          "deleted": false,
          "note": null,
          "lessons": "برنامج العرض التقديمي؛ برنامج النشر المكتبي",
          "part": null
        },
        {
          "n": 3,
          "title": "تراكيب التحكم التكرارية",
          "page": 72,
          "deleted": false,
          "note": null,
          "lessons": "مفهوم التكرار وأهميته؛ حلقات التكرار في لغة Scratch",
          "part": null
        },
        {
          "n": 4,
          "title": "مواقع الويب وأمن المعلومات",
          "page": 104,
          "deleted": false,
          "note": null,
          "lessons": "مواقع الويب؛ أمن المعلومات",
          "part": null
        }
      ]
    }
  },
  "r5": {
    "الكيمياء": {
      "book": "كتاب الكيمياء — الخامس الإعدادي",
      "edition": null,
      "kind": "الفصل",
      "chapters": [
        {
          "n": 1,
          "title": "الفصل الأول",
          "page": 9,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 2,
          "title": "الفصل الثاني",
          "page": 35,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 3,
          "title": "الفصل الثالث",
          "page": 61,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 4,
          "title": "الفصل الرابع",
          "page": 97,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 5,
          "title": "الفصل الخامس",
          "page": 121,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 6,
          "title": "الفصل السادس",
          "page": 153,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 7,
          "title": "الفصل السابع",
          "page": 173,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 8,
          "title": "الفصل الثامن",
          "page": 191,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        }
      ]
    },
    "الأحياء": {
      "book": "كتاب علم الأحياء — الخامس الإعدادي",
      "edition": null,
      "kind": "الفصل",
      "chapters": [
        {
          "n": 1,
          "title": "التغذية والهضم",
          "page": 5,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 2,
          "title": "التنفس والتبادل الغازي",
          "page": 55,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 3,
          "title": "الإخراج",
          "page": 85,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 4,
          "title": "الحركة",
          "page": 109,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 5,
          "title": "النقل",
          "page": 135,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 6,
          "title": "التنسيق العصبي والإحساس",
          "page": 179,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 7,
          "title": "الهورمونات والغدد",
          "page": 213,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        }
      ]
    },
    "التربية الإسلامية": {
      "book": "كتاب القرآن الكريم والتربية الإسلامية — الخامس الإعدادي",
      "edition": null,
      "kind": "الوحدة",
      "chapters": [
        {
          "n": 1,
          "title": "الوحدة الأولى",
          "page": 8,
          "deleted": false,
          "note": null,
          "lessons": "المؤمنون؛ الأمر بالمعروف والنهي عن المنكر؛ النبي يحيى بن زكريا (ع)؛ الشهيد؛ التهذيب (قصص وعبر: الكفاف، حب الدنيا وعبادة الطاغوت، حتى لا ينسكب الحليب)",
          "part": null
        },
        {
          "n": 2,
          "title": "الوحدة الثانية",
          "page": 35,
          "deleted": false,
          "note": null,
          "lessons": "المؤمنون؛ حق الصديق والجار؛ أصحاب السبت؛ حقوق الأولاد والأبوين؛ آفات اللسان",
          "part": null
        },
        {
          "n": 3,
          "title": "الوحدة الثالثة",
          "page": 62,
          "deleted": false,
          "note": null,
          "lessons": "المؤمنون؛ وجوب المجاهرة بالحق؛ سليمان بن داود (ع)؛ دور المرأة في المجتمع؛ أدب الاختلاف",
          "part": null
        },
        {
          "n": 4,
          "title": "الوحدة الرابعة",
          "page": 90,
          "deleted": false,
          "note": null,
          "lessons": "القصص؛ المفلس في الآخرة؛ نبي الله إسحاق (ع)؛ العمل في النظام الاقتصادي الإسلامي؛ المؤمنون أخوة",
          "part": null
        },
        {
          "n": 5,
          "title": "الوحدة الخامسة",
          "page": 122,
          "deleted": false,
          "note": null,
          "lessons": "القصص؛ نزاهة الموظف؛ ذو القرنين؛ المعاملات المحرمة؛ الإسلام يخرجنا من الظلمات إلى النور",
          "part": null
        }
      ]
    },
    "الحاسوب": {
      "book": "كتاب الحاسوب — الخامس الإعدادي",
      "edition": null,
      "kind": "الوحدة",
      "chapters": [
        {
          "n": 1,
          "title": "الأجهزة الذكية",
          "page": 5,
          "deleted": false,
          "note": null,
          "lessons": "الأجهزة الذكية وأنظمتها وتطبيقاتها؛ الأجهزة الذكية ومبادئ إنترنت الأشياء",
          "part": null
        },
        {
          "n": 2,
          "title": "برمجيات الحاسوب",
          "page": 26,
          "deleted": false,
          "note": null,
          "lessons": "مقدمة عن برنامج الجداول الإلكترونية؛ معالجة البيانات",
          "part": null
        },
        {
          "n": 3,
          "title": "المتجهات والمصفوفات",
          "page": 73,
          "deleted": false,
          "note": null,
          "lessons": "المتجهات ذات البعد الواحد؛ المصفوفة ذات البعدين",
          "part": null
        },
        {
          "n": 4,
          "title": "الخدمات الإلكترونية والحوسبة السحابية",
          "page": 114,
          "deleted": false,
          "note": null,
          "lessons": "الخدمات الإلكترونية؛ الحوسبة السحابية",
          "part": null
        }
      ]
    }
  },
  "r6": {
    "الرياضيات": {
      "book": "كتاب الرياضيات — السادس الإعدادي (الفرع العلمي)",
      "edition": null,
      "kind": "الفصل",
      "chapters": [
        {
          "n": 1,
          "title": "الأعداد المركبة",
          "page": 5,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 2,
          "title": "القطوع المخروطية",
          "page": 48,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 3,
          "title": "تطبيقات التفاضل",
          "page": 90,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 4,
          "title": "التكامل",
          "page": 148,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 5,
          "title": "المعادلات التفاضلية الاعتيادية",
          "page": 210,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 6,
          "title": "الهندسة الفضائية",
          "page": 224,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        }
      ]
    },
    "الرياضيات (أدبي)": {
      "book": "كتاب الرياضيات — السادس الإعدادي (الفرع الأدبي)",
      "edition": null,
      "kind": "الفصل",
      "chapters": [
        {
          "n": 1,
          "title": "مبرهنة ذات الحدين",
          "page": 5,
          "deleted": false,
          "note": null,
          "lessons": "طرائق العد",
          "part": null
        },
        {
          "n": 2,
          "title": "الغايات والاستمرارية",
          "page": 31,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 3,
          "title": "الاشتقاق",
          "page": 59,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 4,
          "title": "التكامل",
          "page": 109,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        }
      ]
    },
    "الكيمياء": {
      "book": "كتاب الكيمياء — السادس الإعدادي",
      "edition": null,
      "kind": "الفصل",
      "chapters": [
        {
          "n": 1,
          "title": "الثرموداينمك",
          "page": 9,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 2,
          "title": "الاتزان الكيميائي",
          "page": 51,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 3,
          "title": "الاتزان الأيوني",
          "page": 87,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 4,
          "title": "تفاعلات التأكسد والاختزال والكيمياء الكهربائية",
          "page": 133,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 5,
          "title": "الكيمياء التناسقية",
          "page": 169,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 6,
          "title": "طرائق التحليل الكيميائي",
          "page": 197,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 7,
          "title": "الكيمياء العضوية للهيدروكاربونات المعوضة",
          "page": 231,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 8,
          "title": "الكيمياء الحياتية",
          "page": 269,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        }
      ]
    },
    "الاقتصاد": {
      "book": "كتاب الاقتصاد — السادس الإعدادي",
      "edition": null,
      "kind": "الفصل",
      "chapters": [
        {
          "n": 1,
          "title": "علم الاقتصاد، المشكلة الاقتصادية، ملامح من الفكر الاقتصادي",
          "page": 6,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 2,
          "title": "العرض والطلب وسلوك المستهلك",
          "page": 28,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 3,
          "title": "الدخل والاستهلاك والادخار",
          "page": 47,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 4,
          "title": "المالية العامة والسياسة النقدية",
          "page": 63,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 5,
          "title": "التخلف والتنمية الاقتصادية والتنمية البشرية",
          "page": 79,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 6,
          "title": "التجارة الخارجية والمنظمات الاقتصادية الدولية",
          "page": 95,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        }
      ]
    },
    "الجغرافية": {
      "book": "كتاب الجغرافية — السادس الإعدادي",
      "edition": null,
      "kind": "الفصل",
      "chapters": [
        {
          "n": 1,
          "title": "جغرافية السكان: التعريف ومجالات الاهتمام",
          "page": 5,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 2,
          "title": "جغرافية المدن وجغرافية الريف",
          "page": 32,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 3,
          "title": "جغرافية الزراعة",
          "page": 59,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 4,
          "title": "جغرافية الصناعة والتعدين",
          "page": 81,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 5,
          "title": "جغرافية النقل والمواصلات وجغرافية التجارة",
          "page": 107,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 6,
          "title": "الجغرافية السياسية وجغرافية السياحة",
          "page": 138,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        }
      ]
    },
    "التاريخ": {
      "book": "كتاب التاريخ — السادس الإعدادي",
      "edition": null,
      "kind": "الفصل",
      "chapters": [
        {
          "n": 1,
          "title": "العراق في العهد العثماني",
          "page": 5,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 2,
          "title": "البلاد العربية في العهد العثماني",
          "page": 24,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 3,
          "title": "العراق أثناء وبعد الحرب العالمية الأولى",
          "page": 51,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 4,
          "title": "العراق بين عامي 1921–1939م",
          "page": 90,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 5,
          "title": "العراق منذ الحرب العالمية الثانية حتى 1958م",
          "page": 125,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 6,
          "title": "الاستعمار الأوروبي في الأراضي العربية",
          "page": 149,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        },
        {
          "n": 7,
          "title": "حركات التحرر العربية",
          "page": 171,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": null
        }
      ]
    },
    "التربية الإسلامية": {
      "book": "كتاب القرآن الكريم والتربية الإسلامية — السادس الإعدادي",
      "edition": null,
      "kind": "الوحدة",
      "chapters": [
        {
          "n": 1,
          "title": "الوحدة الأولى",
          "page": 10,
          "deleted": false,
          "note": null,
          "lessons": "من سورة البقرة (153–170)؛ أصحاب الكهف؛ التعاون بين المسلمين؛ نظام الأسرة في الإسلام؛ النهي عن الغضب",
          "part": null
        },
        {
          "n": 2,
          "title": "الوحدة الثانية",
          "page": 46,
          "deleted": false,
          "note": null,
          "lessons": "من سورة آل عمران (90–97)؛ مريم بنت عمران (ع)؛ الناجون يوم القيامة؛ حقوق الزوجين وواجباتهما؛ قصص وعبر",
          "part": null
        },
        {
          "n": 3,
          "title": "الوحدة الثالثة",
          "page": 72,
          "deleted": false,
          "note": null,
          "lessons": "من سورة النساء (1–10)؛ موسى والعبد الصالح (ع)؛ محاسبة النفس؛ نظرة عامة للنظام الاقتصادي في الإسلام؛ الرجولة",
          "part": null
        },
        {
          "n": 4,
          "title": "الوحدة الرابعة",
          "page": 102,
          "deleted": false,
          "note": null,
          "lessons": "من سورة الإسراء (23–39)؛ شعيب (ع)؛ في الجهاد وكرامة المجاهد؛ الوظائف الاقتصادية للدولة؛ التكبر",
          "part": null
        },
        {
          "n": 5,
          "title": "الوحدة الخامسة",
          "page": 132,
          "deleted": false,
          "note": null,
          "lessons": "سورة الأنبياء؛ نبأ الفاسق؛ حسن الخلق؛ التسامح والتعايش السلمي؛ القناعة",
          "part": null
        }
      ]
    },
    "اللغة العربية": {
      "book": "كتاب اللغة العربية — السادس الإعدادي (الجزء الأول والثاني)",
      "edition": null,
      "kind": "الوحدة",
      "chapters": [
        {
          "n": 1,
          "title": "بغداد حاضرة الدنيا",
          "page": 5,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": "الجزء الأول"
        },
        {
          "n": 2,
          "title": "حياة طريق النصر",
          "page": 43,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": "الجزء الأول"
        },
        {
          "n": 3,
          "title": "الأمل مفتاح النجاح",
          "page": 85,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": "الجزء الأول"
        },
        {
          "n": 4,
          "title": "نعمة المطر",
          "page": 105,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": "الجزء الأول"
        },
        {
          "n": 5,
          "title": "فلسطين",
          "page": 137,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": "الجزء الأول"
        },
        {
          "n": 6,
          "title": "بالإصلاح تنهض الأمة",
          "page": 3,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": "الجزء الثاني"
        },
        {
          "n": 7,
          "title": "حقوق الطفل",
          "page": 27,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": "الجزء الثاني"
        },
        {
          "n": 8,
          "title": "جائزة نوبل",
          "page": 51,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": "الجزء الثاني"
        },
        {
          "n": 9,
          "title": "بين الجديد والقديم",
          "page": 67,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": "الجزء الثاني"
        },
        {
          "n": 10,
          "title": "السيرة الحسنة",
          "page": 89,
          "deleted": false,
          "note": null,
          "lessons": null,
          "part": "الجزء الثاني"
        }
      ]
    }
  }
};
