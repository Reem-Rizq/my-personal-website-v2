function applytranslation(lang) {
    document.querySelectorAll("[data-ar]").forEach(el => {
        el.textContent = lang === "ar" ? el.dataset.ar : el.dataset.en;
    })
    document.title === "ar" ? "" : ""
}

