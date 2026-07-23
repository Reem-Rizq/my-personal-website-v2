function applytranslation(lang) {
    document.querySelectorAll("[data-ar]").forEach(el => {
        el.textContent = lang === "ar" ? el.dataset.ar : el.dataset.en;
    });
    document.title === "ar" ? "موقع استثنائي - ريم رزق." : "Unique Site - Reem Rizq.";
    document.querySelector('meta[name="description"]').setAttribute(
        "content", lang === "ar"
        ? "الموقع الشخصي لريم رزق." 
        : "Reem Rizq 's personal website ."
    );
    document.querySelector(".prof-img") (
        img.alt = lang === "ar" ? "صورة الوردة الفوشية التي تمثل هوية ريم الرقمية" : "fuchsia rose photo that is Reem's digital identity"
    );
}


const langbtn = document.getElementById("lang-btn");
let curlang = "ar";

langbtn.addEventListener("click", () => {
    curlang = curlang === "ar" ? "en" : "ar";
    applytranslation(curlang);
    langbtn.textContent = curlang === "ar" ? "English" : "العربية";
});

applytranslation(curlang);
langbtn.textContent = "English";


const navmenu = document.getElementById("nav-menu");
const navul = document.getElementById("nav-ul");

navmenu.addEventListener("click", () => {
    navul.style.display = navul.style.display === "flex"
    ? "none"
    : "flex"
})


const lampbtn = document.getElementById("lamp-btn");
const lampbox = document.getElementById("lamp-box");

lampbtn.addEventListener("click", () => {
    lampbox.style.display = lampbox.style.display === "block"
    ? "none"
    : "block"
});


const bttt = document.getElementById("btt-btn")
window.addEventListener("scroll", () => {
    bttt.style.display = window.scrollY > 300
    ? "block"
    : "none"
});

bttt.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});


document.getElementById("last-update").textContent = 
new Date().toLocaleDateString(curlang === "ar" ? "ar-SA" : "en-SA" );
