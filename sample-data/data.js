window.ABHA_DATA = {
  categories: {
    all: { en: "All places", ar: "كل الأماكن" },
    nature: { en: "Nature", ar: "الطبيعة" },
    dining: { en: "Restaurants & Cafés", ar: "المطاعم والمقاهي" },
    entertainment: { en: "Entertainment", ar: "الترفيه" },
    heritage: { en: "Heritage & History", ar: "التراث والتاريخ" }
  },
  months: [
    { key: 1, en: "January", ar: "يناير" },
    { key: 2, en: "February", ar: "فبراير" },
    { key: 3, en: "March", ar: "مارس" },
    { key: 4, en: "April", ar: "أبريل" },
    { key: 5, en: "May", ar: "مايو" },
    { key: 6, en: "June", ar: "يونيو" },
    { key: 7, en: "July", ar: "يوليو" },
    { key: 8, en: "August", ar: "أغسطس" },
    { key: 9, en: "September", ar: "سبتمبر" },
    { key: 10, en: "October", ar: "أكتوبر" },
    { key: 11, en: "November", ar: "نوفمبر" },
    { key: 12, en: "December", ar: "ديسمبر" }
  ],
  places: [
    {
      id: "al-soudah",
      category: "nature",
      rating: "4.9",
      months: [5, 6, 7, 8, 9],
      mapQuery: "Al Soudah National Park, Abha, Saudi Arabia",
      image: "images/al-soudah.jpeg",
      icon: "mountain",
      name: { en: "Al Soudah", ar: "السودة" },
      location: { en: "Al Soudah, Asir", ar: "السودة، عسير" },
      description: {
        en: "Cool mountain air, juniper forests, and wide escarpment views make Al Soudah Abha’s signature highland escape. Go early to watch clouds roll through the peaks.",
        ar: "هواء جبلي بارد وغابات عرعر وإطلالات واسعة على المنحدرات تجعل السودة أجمل وجهات المرتفعات في أبها. زُرها مبكرًا لمشاهدة السحب وهي تعبر القمم."
      },
      alt: { en: "Photo of Al Soudah in the Asir highlands.", ar: "صورة للسودة في مرتفعات عسير." },
      itinerary: {
        morning: { en: "Start above the clouds with cool trails and big mountain views.", ar: "ابدأ يومك فوق السحاب بين المسارات الباردة والإطلالات الجبلية الواسعة." },
        evening: { en: "Return for the quiet mountain light before sunset.", ar: "عُد إليها للاستمتاع بهدوء ضوء الجبال قبل الغروب." }
      }
    },
    {
      id: "fog-walkway",
      category: "nature",
      rating: "4.7",
      months: [6, 7, 8, 9],
      mapQuery: "Fog Walkway Al Dabab, Abha, Saudi Arabia",
      image: "images/fog-walkway.jpeg",
      icon: "fog",
      name: { en: "Fog Walkway", ar: "ممشى الضباب" },
      location: { en: "Al Dabab, Abha", ar: "حي الضباب، أبها" },
      description: {
        en: "Walk above a shifting sea of mist at this atmospheric Abha viewpoint. The walkway is especially memorable on cool mornings and late afternoons when the Tihama horizon appears through the fog.",
        ar: "سر فوق بحر متحرك من الضباب في هذه الإطلالة الحالمة في أبها. يزداد الممشى جمالًا في الصباح البارد وقبل المساء عندما يظهر أفق تهامة بين السحب."
      },
      alt: { en: "Photo of Fog Walkway in Abha.", ar: "صورة لممشى الضباب في أبها." },
      itinerary: {
        morning: { en: "Catch the softest fog and a peaceful walk before the city wakes.", ar: "استمتع بألطف ضباب ونزهة هادئة قبل أن تستيقظ المدينة." },
        evening: { en: "Finish with a misty golden-hour view over the mountains.", ar: "اختم يومك بإطلالة ضبابية ذهبية على الجبال." }
      }
    },
    {
      id: "bab-al-turath",
      category: "dining",
      rating: "4.8",
      months: [1, 2, 3, 4, 5, 9, 10, 11, 12],
      mapQuery: "Bab Al Turath Restaurant, Abha, Saudi Arabia",
      image: "images/bab-al-turath.jpeg",
      icon: "arch",
      name: { en: "Bab Al Turath", ar: "باب التراث" },
      location: { en: "Al Muftaha, Abha", ar: "المفتاحة، أبها" },
      description: {
        en: "Bab Al Turath pairs Saudi flavors with a heritage-inspired setting near Abha’s creative quarter. It is a warm lunch stop for visitors who want local character alongside a relaxed meal.",
        ar: "يجمع باب التراث بين النكهات السعودية وأجواء مستلهمة من التراث قرب الحي الإبداعي في أبها. إنه محطة غداء دافئة لمن يبحث عن طعم محلي في أجواء هادئة."
      },
      alt: { en: "Photo of Bab Al Turath in Abha.", ar: "صورة لباب التراث في أبها." },
      itinerary: {
        lunch: { en: "Pause for a heritage-inspired Saudi lunch in the heart of Abha.", ar: "توقف لتناول غداء سعودي بأجواء تراثية في قلب أبها." }
      }
    },
    {
      id: "le-premier",
      category: "dining",
      rating: "4.6",
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      mapQuery: "Le Premier, Airport Road, Abha, Saudi Arabia",
      mapUrl: "https://maps.app.goo.gl/6tWihUJ1iTFxG2fH9",
      image: "images/le-premier.jpeg",
      icon: "coffee",
      name: { en: "Le Premier", ar: "لي بريمير" },
      location: { en: "Airport Road, Abha, Aseer", ar: "طريق المطار، أبها، عسير" },
      description: {
        en: "Le Premier is a mixed-use destination on Airport Road, about four minutes from Abha Airport. Browse shops, dine at restaurants and cafés, and enjoy fountains and family-friendly attractions in a modern Aseer setting.",
        ar: "لي بريمير وجهة متعددة الاستخدامات على طريق المطار، تبعد نحو أربع دقائق عن مطار أبها. استكشف المتاجر والمطاعم والمقاهي، واستمتع بالنوافير والأنشطة المناسبة للعائلات في أجواء عصرية بعسير."
      },
      alt: { en: "Photo of Le Premier on Airport Road in Abha.", ar: "صورة للي بريمير على طريق المطار في أبها." },
      itinerary: {
        lunch: { en: "Pause for lunch, shopping, and a relaxed stroll among Le Premier’s cafés, restaurants, and fountains.", ar: "توقف للغداء والتسوق ونزهة هادئة بين مقاهي ومطاعم ونوافير لي بريمير." },
        evening: { en: "Enjoy dinner, cafés, and a relaxed evening around Le Premier’s modern promenade.", ar: "استمتع بالعشاء والمقاهي وأمسية هادئة في أجواء لي بريمير العصرية." }
      }
    },
    {
      id: "cowboy-town",
      category: "entertainment",
      rating: "4.5",
      months: [3, 4, 5, 6, 7, 8, 9, 10],
      mapQuery: "Cowboy Town, Abha, Saudi Arabia",
      image: "images/cowboy-town.jpeg",
      icon: "star",
      name: { en: "Cowboy Town", ar: "كاوبوي تاون" },
      location: { en: "Abha area", ar: "منطقة أبها" },
      description: {
        en: "Cowboy Town adds a playful Western-inspired twist to an Abha outing, with lively photo spots and family-friendly entertainment. It is an easy choice for groups looking for a fun afternoon together.",
        ar: "يضيف كاوبوي تاون لمسة مرحة مستوحاة من الغرب الأمريكي إلى نزهتك في أبها، مع زوايا تصوير وأنشطة مناسبة للعائلات. إنه خيار سهل للمجموعات التي تبحث عن فترة بعد ظهر ممتعة."
      },
      alt: { en: "Photo of Cowboy Town in the Abha area.", ar: "صورة لكاوبوي تاون في منطقة أبها." },
      itinerary: {
        afternoon: { en: "Add playful photo stops and family-friendly fun to the afternoon.", ar: "أضف محطات تصوير مرحة وترفيهًا مناسبًا للعائلة إلى فترة بعد الظهر." }
      }
    },
    {
      id: "al-wadi-resort",
      category: "nature",
      rating: "4.6",
      months: [3, 4, 5, 6, 7, 8, 9, 10],
      mapQuery: "Valley Resort, Wadi Ibn Hashbal, Asir, Saudi Arabia",
      mapUrl: "https://www.google.com/maps?q=18.61086,42.717503",
      image: "images/al-wadi-resort.jpeg",
      icon: "leaf",
      name: { en: "Valley Resort", ar: "منتجع الوادي" },
      location: { en: "Wadi Ibn Hashbal, Asir, Saudi Arabia", ar: "وادي بن هشبل، عسير، المملكة العربية السعودية" },
      description: {
        en: "Valley Resort is a public park in Wadi Ibn Hashbal, with gardens, open green spaces, seasonal farms, family recreation, cafés, restaurants, and a dancing fountain. It is a relaxed outdoor stop for an afternoon in Aseer.",
        ar: "منتجع الوادي منتزه عام في وادي بن هشبل، يضم حدائق ومساحات خضراء مفتوحة ومزارع موسمية وترفيهًا عائليًا ومقاهي ومطاعم ونافورة راقصة. إنه محطة خارجية هادئة لفترة بعد الظهر في عسير."
      },
      alt: { en: "Photo of Valley Resort in Wadi Ibn Hashbal, Asir.", ar: "صورة لمنتجع الوادي في وادي بن هشبل، عسير." },
      itinerary: {
        afternoon: { en: "Spend a relaxed afternoon among gardens, green spaces, and family-friendly attractions.", ar: "اقضِ فترة بعد ظهر هادئة بين الحدائق والمساحات الخضراء والأنشطة المناسبة للعائلات." },
        evening: { en: "Enjoy the park’s outdoor spaces and dancing fountain as the day winds down.", ar: "استمتع بالمساحات الخارجية والنافورة الراقصة مع نهاية اليوم." }
      }
    },
    {
      id: "rijal-almaa",
      category: "heritage",
      rating: "4.9",
      months: [10, 11, 12, 1, 2, 3, 4],
      mapQuery: "Rijal Almaa Heritage Village, Asir, Saudi Arabia",
      image: "images/rijal-almaa.jpeg",
      icon: "village",
      name: { en: "Rijal Almaa Heritage Village", ar: "قرية رجال ألمع التراثية" },
      location: { en: "Rijal Almaa, Asir", ar: "رجال ألمع، عسير" },
      description: {
        en: "Wander through striking stone-and-clay houses in one of the Asir region’s most iconic heritage villages. Colorful details, mountain scenery, and deep local history make Rijal Almaa a rewarding day trip from Abha.",
        ar: "تجوّل بين البيوت الحجرية والطينية المميزة في واحدة من أشهر قرى عسير التراثية. التفاصيل الملونة والمشهد الجبلي والتاريخ المحلي العريق تجعل رجال ألمع رحلة يومية مميزة من أبها."
      },
      alt: { en: "Photo of Rijal Almaa Heritage Village in Asir.", ar: "صورة لقرية رجال ألمع التراثية في عسير." },
      itinerary: {
        morning: { en: "Begin with a walk through Asir’s remarkable stone-and-clay heritage.", ar: "ابدأ يومك بجولة بين تراث عسير المميز من الحجر والطين." },
        evening: { en: "Take in the village’s warm colors as the mountain light softens.", ar: "استمتع بألوان القرية الدافئة عندما يهدأ ضوء الجبال." }
      }
    },
    {
      id: "art-street",
      category: "heritage",
      rating: "4.7",
      months: [1, 2, 3, 4, 5, 9, 10, 11, 12],
      mapQuery: "Art Street, Abha, Saudi Arabia",
      image: "images/art-street.jpeg",
      icon: "art",
      name: { en: "Art Street", ar: "شارع الفن" },
      location: { en: "Al Muftaha, Abha", ar: "المفتاحة، أبها" },
      description: {
        en: "Art Street is Abha’s colorful cultural walk, where public art, creative displays, and nearby cafés bring the city to life. Come in the evening for photos, a gentle stroll, and an easy taste of the local arts scene.",
        ar: "شارع الفن هو ممشى أبها الثقافي الملوّن، حيث تضيف الأعمال العامة والعروض الإبداعية والمقاهي القريبة حيوية إلى المدينة. زُره مساءً للصور ونزهة خفيفة وتذوق أجواء الفن المحلي."
      },
      alt: { en: "Photo of Art Street in Abha.", ar: "صورة لشارع الفن في أبها." },
      itinerary: {
        morning: { en: "Take a colorful cultural stroll before the day gets busy.", ar: "استمتع بنزهة ثقافية ملوّنة قبل ازدحام اليوم." },
        evening: { en: "End with public art, photos, and Abha’s creative evening energy.", ar: "اختم يومك بالفن العام والصور والأجواء الإبداعية المسائية في أبها." }
      }
    }
  ]
};
