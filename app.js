(() => {
  const data = window.ABHA_DATA;
  const STORAGE = { language: "abha-language", theme: "abha-theme" };
  const categories = ["all", "nature", "dining", "entertainment", "heritage"];
  const icons = {
    star: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="m12 3.5 2.64 5.35 5.9.86-4.27 4.16 1.01 5.87L12 17l-5.28 2.78 1.01-5.87-4.27-4.16 5.9-.86L12 3.5Z"/></svg>',
    pin: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M19 10.4c0 5-7 10.1-7 10.1S5 15.4 5 10.4a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10.4" r="2.25"/></svg>',
    calendar: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M8 3v3M16 3v3M4.5 9h15M6 5h12a1.5 1.5 0 0 1 1.5 1.5v12A1.5 1.5 0 0 1 18 20H6a1.5 1.5 0 0 1-1.5-1.5v-12A1.5 1.5 0 0 1 6 5Z"/></svg>',
    map: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z"/><path d="M9 3v15M15 6v15"/></svg>',
    arrow: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>',
    sun: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3.2v2.1M12 18.7v2.1M20.8 12h-2.1M5.3 12H3.2M18.2 5.8l-1.5 1.5M7.3 16.7l-1.5 1.5M18.2 18.2l-1.5-1.5M7.3 7.3 5.8 5.8M16.3 12a4.3 4.3 0 1 1-8.6 0 4.3 4.3 0 0 1 8.6 0Z"/></svg>',
    moon: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 15.2A8.3 8.3 0 0 1 8.8 4 8.3 8.3 0 1 0 20 15.2Z"/></svg>',
    morning: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3v3M4.93 5.93l2.12 2.12M3 13h3M21 13h-3M19.07 5.93l-2.12 2.12M5 20h14M7.5 17.5a4.5 4.5 0 0 1 9 0"/></svg>',
    lunch: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 3v8M4.5 3v5a2.5 2.5 0 0 0 5 0V3M7 11v10M16.5 3v18M16.5 3c3.2 1.7 3.2 7.3 0 9"/></svg>',
    afternoon: '<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M19.07 4.93l-1.41 1.41M6.34 17.66l-1.41 1.41"/></svg>',
    evening: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M19.5 15.5A7.7 7.7 0 0 1 8.5 4.5a7.7 7.7 0 1 0 11 11Z"/></svg>'
  };
  const copy = {
    en: {
      skip: "Skip to places", homeAria: "Abha Explorer home", preferencesAria: "Site preferences", brandSubtitle: "explorer",
      eyebrow: "Saudi Arabia’s highland escape", heroTitle: "Find your way to the clouds.", heroCopy: "Discover misty mountain walks, storied villages, welcoming flavors, and unforgettable evenings in Abha.",
      planDay: "Plan my day", explorePlaces: "Explore places", heroNote: "Eight local experiences, one wonderful day.",
      discoverEyebrow: "Choose your Abha", discoverTitle: "A place for every kind of day.", discoverIntro: "Search, filter, or choose a month to find the moments that suit your trip.",
      searchLabel: "Search places", searchPlaceholder: "Search places", monthPickerLabel: "Best month", categoriesAria: "Place categories", allMonths: "All months",
      results: (count) => `${count} ${count === 1 ? "place" : "places"} to discover`, resultsWithMonth: (count, month) => `${count} ${count === 1 ? "place" : "places"} best enjoyed in ${month}`,
      clearFilters: "Clear filters", emptyTitle: "No matches just yet", emptyCopy: "Try another name, category, or month to discover more of Abha.", showAll: "Show all places",
      placeholder: "Illustrative placeholder — photo to be added", bestMonths: "Best months", viewDetails: "Details", openMaps: "Open in Maps", close: "Close", closeAria: "Close dialog",
      themeLight: "Light", themeDark: "Dark", switchToDark: "Switch to dark mode", switchToLight: "Switch to light mode", switchToArabic: "Switch language to Arabic", switchToEnglish: "Switch language to English",
      footerCopy: "A small guide to the highlands of Asir.", backTop: "Back to top ↑", itineraryEyebrow: "One easy Abha day", itineraryTitle: "Your day, beautifully paced.", itineraryCopy: "A gentle route through the places in this guide—mountains, local flavor, and an evening to remember.",
      Morning: "Morning", Lunch: "Lunch", Afternoon: "Afternoon", Evening: "Evening", location: "Location", rating: "Visitor rating"
    },
    ar: {
      skip: "انتقل إلى الأماكن", homeAria: "الصفحة الرئيسية لدليل أبها", preferencesAria: "تفضيلات الموقع", brandSubtitle: "دليل أبها",
      eyebrow: "ملاذ المرتفعات في السعودية", heroTitle: "اكتشف طريقك إلى السحاب.", heroCopy: "اكتشف الممرات الجبلية الضبابية والقرى العريقة والنكهات المرحبة والأمسيات التي لا تُنسى في أبها.",
      planDay: "خطّط ليومي", explorePlaces: "استكشف الأماكن", heroNote: "ثماني تجارب محلية، ويوم رائع واحد.",
      discoverEyebrow: "اختر أبها التي تناسبك", discoverTitle: "مكان لكل نوع من الأيام.", discoverIntro: "ابحث أو صفِّ النتائج أو اختر شهرًا لتجد اللحظات الأنسب لرحلتك.",
      searchLabel: "ابحث عن أماكن", searchPlaceholder: "ابحث عن أماكن", monthPickerLabel: "أفضل شهر", categoriesAria: "فئات الأماكن", allMonths: "كل الشهور",
      results: (count) => `${count} ${count === 1 ? "مكان" : "أماكن"} بانتظارك`, resultsWithMonth: (count, month) => `${count} ${count === 1 ? "مكان مناسب" : "أماكن مناسبة"} لشهر ${month}`,
      clearFilters: "مسح التصفية", emptyTitle: "لا توجد نتائج الآن", emptyCopy: "جرّب اسمًا أو فئة أو شهرًا آخر لاكتشاف المزيد من أبها.", showAll: "عرض كل الأماكن",
      placeholder: "صورة توضيحية مؤقتة — ستُضاف صورة حقيقية لاحقًا", bestMonths: "أفضل الشهور", viewDetails: "التفاصيل", openMaps: "افتح في الخرائط", close: "إغلاق", closeAria: "إغلاق النافذة",
      themeLight: "فاتح", themeDark: "داكن", switchToDark: "التبديل إلى الوضع الداكن", switchToLight: "التبديل إلى الوضع الفاتح", switchToArabic: "التبديل إلى العربية", switchToEnglish: "التبديل إلى الإنجليزية",
      footerCopy: "دليل صغير لمرتفعات عسير.", backTop: "العودة إلى الأعلى ↑", itineraryEyebrow: "يوم سهل في أبها", itineraryTitle: "يومك بإيقاع جميل.", itineraryCopy: "مسار هادئ عبر الأماكن الموجودة في هذا الدليل — جبال ونكهات محلية وأمسية لا تُنسى.",
      Morning: "الصباح", Lunch: "الغداء", Afternoon: "بعد الظهر", Evening: "المساء", location: "الموقع", rating: "تقييم الزوار"
    }
  };

  const $ = (selector) => document.querySelector(selector);
  const elements = {
    root: document.documentElement,
    languageToggle: $("#languageToggle"), themeToggle: $("#themeToggle"), themeLabel: $("#themeToggle .toggle-label"),
    search: $("#placeSearch"), monthPicker: $("#monthPicker"), categoryFilters: $("#categoryFilters"), placesGrid: $("#placesGrid"),
    resultsText: $("#resultsText"), clearFilters: $("#clearFilters"), emptyState: $("#emptyState"), emptyReset: $("#emptyReset"),
    detailsModal: $("#detailsModal"), detailsContent: $("#detailsContent"), detailsClose: $("#detailsClose"),
    itineraryModal: $("#itineraryModal"), itineraryGrid: $("#itineraryGrid"), itineraryClose: $("#itineraryClose"), planDayButton: $("#planDayButton")
  };
  let language = localStorage.getItem(STORAGE.language) || "en";
  let theme = localStorage.getItem(STORAGE.theme) || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  let activeCategory = "all";
  let selectedMonth = "all";
  let activeModal = null;
  let lastTrigger = null;

  function t(key) { return copy[language][key] ?? key; }
  function mapUrl(place) { return place.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.mapQuery)}`; }
  function getMonth(monthKey) { return data.months.find((month) => month.key === monthKey); }
  function monthList(place) { return place.months.map((key) => getMonth(key)[language]).join(language === "ar" ? "، " : ", "); }
  function escapeHtml(value) { return String(value).replace(/[&<>"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[character])); }

  function translateStaticContent() {
    document.querySelectorAll("[data-i18n]").forEach((element) => { element.textContent = t(element.dataset.i18n); });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => { element.placeholder = t(element.dataset.i18nPlaceholder); });
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => { element.setAttribute("aria-label", t(element.dataset.i18nAria)); });
    document.title = language === "ar" ? "دليل أبها | Abha Explorer" : "Abha Explorer | دليل أبها";
  }

  function renderMonthPicker() {
    const preservedValue = selectedMonth;
    elements.monthPicker.innerHTML = `<option value="all">${t("allMonths")}</option>${data.months.map((month) => `<option value="${month.key}">${month[language]}</option>`).join("")}`;
    elements.monthPicker.value = preservedValue;
    elements.monthPicker.setAttribute("aria-label", t("monthPickerLabel"));
  }

  function renderCategories() {
    elements.categoryFilters.innerHTML = categories.map((category) => `
      <button type="button" class="filter-chip ${category === activeCategory ? "is-active" : ""}" data-category="${category}" aria-pressed="${category === activeCategory}">
        ${escapeHtml(data.categories[category][language])}
      </button>`).join("");
  }

  function visiblePlaces() {
    const query = elements.search.value.trim().toLocaleLowerCase(language === "ar" ? "ar" : "en");
    return data.places.filter((place) => {
      const matchesCategory = activeCategory === "all" || place.category === activeCategory;
      const matchesMonth = selectedMonth === "all" || place.months.includes(Number(selectedMonth));
      const searchable = `${place.name[language]} ${place.location[language]} ${place.description[language]}`.toLocaleLowerCase(language === "ar" ? "ar" : "en");
      return matchesCategory && matchesMonth && (!query || searchable.includes(query));
    });
  }

  function card(place) {
    return `<article class="place-card">
      <div class="card-image-wrap">
        <img src="${place.image}" alt="${escapeHtml(place.alt[language])}" width="640" height="480">
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span>${escapeHtml(data.categories[place.category][language])}</span>
          <span class="rating">${icons.star}${place.rating}</span>
        </div>
        <h3>${escapeHtml(place.name[language])}</h3>
        <p class="card-location">${icons.pin}<span>${escapeHtml(place.location[language])}</span></p>
        <p class="card-description">${escapeHtml(place.description[language])}</p>
        <div class="visit-months">
          ${icons.calendar}<span><strong>${t("bestMonths")}</strong>${escapeHtml(monthList(place))}</span>
        </div>
        <div class="card-actions">
          <button class="card-button" type="button" data-details="${place.id}">${t("viewDetails")}</button>
          <a class="maps-link" href="${mapUrl(place)}" target="_blank" rel="noopener noreferrer">${icons.map}<span>${t("openMaps")}</span></a>
        </div>
      </div>
    </article>`;
  }

  function renderPlaces() {
    const places = visiblePlaces();
    elements.placesGrid.innerHTML = places.map(card).join("");
    elements.emptyState.hidden = places.length !== 0;
    const selected = selectedMonth !== "all" ? getMonth(Number(selectedMonth))[language] : null;
    elements.resultsText.textContent = selected ? t("resultsWithMonth")(places.length, selected) : t("results")(places.length);
    const filtersActive = activeCategory !== "all" || selectedMonth !== "all" || Boolean(elements.search.value.trim());
    elements.clearFilters.hidden = !filtersActive;
  }

  function renderDetails(place) {
    elements.detailsContent.innerHTML = `
      <div class="details-hero">
        <div class="details-image">
          <img src="${place.image}" alt="${escapeHtml(place.alt[language])}" width="640" height="480">
        </div>
        <div class="details-info">
          <div class="card-meta"><span>${escapeHtml(data.categories[place.category][language])}</span><span class="rating">${icons.star}${place.rating}</span></div>
          <h2 id="detailsTitle">${escapeHtml(place.name[language])}</h2>
          <p class="card-location">${icons.pin}<span>${escapeHtml(place.location[language])}</span></p>
        </div>
      </div>
      <div class="details-content">
        <p class="details-description">${escapeHtml(place.description[language])}</p>
        <div class="details-facts">
          <div class="fact"><span class="fact-label">${icons.calendar}${t("bestMonths")}</span><span class="fact-value">${escapeHtml(monthList(place))}</span></div>
          <div class="fact"><span class="fact-label">${icons.pin}${t("location")}</span><span class="fact-value">${escapeHtml(place.location[language])}</span></div>
        </div>
        <div class="details-actions"><a class="maps-link" href="${mapUrl(place)}" target="_blank" rel="noopener noreferrer">${icons.map}<span>${t("openMaps")}</span></a></div>
      </div>`;
  }

  function itineraryStop(time, placeId) {
    const place = data.places.find((item) => item.id === placeId);
    const rationale = place.itinerary[time.toLowerCase()][language];
    return `<article class="itinerary-stop">
      <div class="stop-time">${icons[time.toLowerCase()]}<span>${t(time)}</span></div>
      <h3>${escapeHtml(place.name[language])}</h3>
      <span class="stop-category">${escapeHtml(data.categories[place.category][language])}</span>
      <p>${escapeHtml(rationale)}</p>
      <a class="maps-link" href="${mapUrl(place)}" target="_blank" rel="noopener noreferrer">${icons.map}<span>${t("openMaps")}</span></a>
    </article>`;
  }

  function renderItinerary() {
    const schedule = [
      ["Morning", "al-soudah"],
      ["Lunch", "le-premier"],
      ["Afternoon", "al-wadi-resort"],
      ["Evening", "art-street"]
    ];
    elements.itineraryGrid.innerHTML = schedule.map(([time, id]) => itineraryStop(time, id)).join("");
  }

  function applyLanguage() {
    elements.root.lang = language;
    elements.root.dir = language === "ar" ? "rtl" : "ltr";
    translateStaticContent();
    elements.languageToggle.setAttribute("aria-label", t(language === "en" ? "switchToArabic" : "switchToEnglish"));
    elements.languageToggle.innerHTML = language === "en" ? '<span aria-hidden="true">ع</span><span class="toggle-label">العربية</span>' : '<span aria-hidden="true">EN</span><span class="toggle-label">English</span>';
    renderMonthPicker();
    renderCategories();
    renderPlaces();
    renderItinerary();
    if (activeModal === "details") {
      const id = elements.detailsModal.dataset.placeId;
      renderDetails(data.places.find((place) => place.id === id));
    }
    localStorage.setItem(STORAGE.language, language);
  }

  function applyTheme() {
    elements.root.dataset.theme = theme;
    const dark = theme === "dark";
    elements.themeToggle.setAttribute("aria-pressed", String(dark));
    elements.themeToggle.setAttribute("aria-label", t(dark ? "switchToLight" : "switchToDark"));
    elements.themeToggle.innerHTML = `${dark ? icons.moon : icons.sun}<span class="toggle-label">${t(dark ? "themeDark" : "themeLight")}</span>`;
    localStorage.setItem(STORAGE.theme, theme);
  }

  function openModal(name, trigger) {
    const modal = name === "details" ? elements.detailsModal : elements.itineraryModal;
    lastTrigger = trigger;
    activeModal = name;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => modal.querySelector(".modal").focus());
  }

  function closeModal(name) {
    const modal = name === "details" ? elements.detailsModal : elements.itineraryModal;
    modal.hidden = true;
    document.body.style.overflow = "";
    activeModal = null;
    if (lastTrigger) lastTrigger.focus();
  }

  function resetFilters() {
    activeCategory = "all";
    selectedMonth = "all";
    elements.search.value = "";
    elements.monthPicker.value = "all";
    renderCategories();
    renderPlaces();
  }

  elements.languageToggle.addEventListener("click", () => { language = language === "en" ? "ar" : "en"; applyLanguage(); applyTheme(); });
  elements.themeToggle.addEventListener("click", () => { theme = theme === "light" ? "dark" : "light"; applyTheme(); });
  elements.search.addEventListener("input", renderPlaces);
  elements.monthPicker.addEventListener("change", (event) => { selectedMonth = event.target.value; renderPlaces(); });
  elements.categoryFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    renderCategories();
    renderPlaces();
  });
  elements.placesGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-details]");
    if (!button) return;
    const place = data.places.find((item) => item.id === button.dataset.details);
    elements.detailsModal.dataset.placeId = place.id;
    renderDetails(place);
    openModal("details", button);
  });
  elements.planDayButton.addEventListener("click", (event) => openModal("itinerary", event.currentTarget));
  elements.detailsClose.addEventListener("click", () => closeModal("details"));
  elements.itineraryClose.addEventListener("click", () => closeModal("itinerary"));
  elements.detailsModal.addEventListener("click", (event) => { if (event.target === elements.detailsModal) closeModal("details"); });
  elements.itineraryModal.addEventListener("click", (event) => { if (event.target === elements.itineraryModal) closeModal("itinerary"); });
  elements.clearFilters.addEventListener("click", resetFilters);
  elements.emptyReset.addEventListener("click", resetFilters);
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && activeModal) closeModal(activeModal); });

  applyLanguage();
  applyTheme();
})();
