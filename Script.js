/* =============================================
   TRANSITIONS DE PAGE & PRÉCHARGEMENT
============================================= */

/* Images à précharger pour éviter les sauts */
const imagesToPreload = [
    "images/couverture.png",
    "images/couverturepangramme.png",
    "images/chars.png",
    "images/pabe.png",
    "images/astrin.png",
    "images/journalfoot.png",
    "images/unejournaleco.png",
    "images/matchviolent.png",
    "images/Montage.png",
    "images/Logo.png"
];

function preloadImages(urls) {
    urls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

/* Transition à la navigation */
function initTransitions() {
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            if (href && !href.startsWith("#") && !this.target) {
                e.preventDefault();
                const dest = href;
                document.body.classList.add("fade-out");
                setTimeout(() => {
                    window.location.href = dest;
                }, 400);
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    /* Fade-in à l'arrivée */
    document.body.classList.add("page-loaded");

    /* Précharger les images dès la première page visitée */
    preloadImages(imagesToPreload);

    /* Activer les transitions */
    initTransitions();
});

/* Scroll smooth vers une section */
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
}
