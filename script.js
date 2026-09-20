/* =====================================================
   NAYAGLOW — MAIN JAVASCRIPT
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       MOBILE MENU
       ================================================= */

    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener("click", () => {

            const isOpen = mobileMenu.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Fermer le menu" : "Ouvrir le menu"
            );

        });

        /* Close menu when a link is clicked */

        const mobileLinks =
            mobileMenu.querySelectorAll("a");

        mobileLinks.forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Ouvrir le menu"
                );

            });

        });

    }


    /* =================================================
       LANGUAGE MENU
       ================================================= */

    const languageToggle =
        document.getElementById("languageToggle");

    const languageMenu =
        document.getElementById("languageMenu");

    const languageLabel =
        document.getElementById("languageLabel");

    if (languageToggle && languageMenu) {

        languageToggle.addEventListener("click", (event) => {

            event.stopPropagation();

            const isOpen =
                languageMenu.classList.toggle("active");

            languageToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


        /* Close language menu when clicking elsewhere */

        document.addEventListener("click", () => {

            languageMenu.classList.remove("active");

            languageToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });


        /* Language buttons */

        const languageButtons =
            languageMenu.querySelectorAll(
                "[data-language]"
            );

        languageButtons.forEach(button => {

            button.addEventListener("click", (event) => {

                event.stopPropagation();

                const language =
                    button.dataset.language;

                if (languageLabel) {

                    languageLabel.textContent =
                        language.toUpperCase();

                }

                languageMenu.classList.remove("active");

                languageToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                changeLanguage(language);

            });

        });

    }


    /* =================================================
       SIMPLE LANGUAGE SWITCH
       ================================================= */

    function changeLanguage(language) {

        const translations = {

            en: {
   
                   "Accueil": "Home",
"Collection": "Collection",
"Rituel": "Ritual",
"Pour les mamans": "For Mothers",
"La Maison": "The House",
"Commander": "Order",
"Commander sur WhatsApp": "Order on WhatsApp",
"Découvrir la collection": "Discover the Collection",
"Découvrir NayaGlow →": "Discover NayaGlow →"

        },

        fr: {

"Home": "Accueil",
"Collection": "Collection",
"Ritual": "Rituel",
"For Mothers": "Pour les mamans",
"The House": "La Maison",
"Order": "Commander",
"Order on WhatsApp": "Commander sur WhatsApp",
"Discover the Collection": "Découvrir la collection",
"Discover NayaGlow →": "Découvrir NayaGlow →"

        }

    };

    const currentTranslations =
        translations[language];

    if (!currentTranslations) return;

    document.querySelectorAll(
        "a, button, p, span, h1, h2, h3, small"
    ).forEach(element => {

        const text =
            element.textContent.trim();

        if (currentTranslations[text]) {

            element.textContent =
                currentTranslations[text];

        }

    });

}

 /* =================================================
   HEADER SCROLL EFFECT
   ================================================= */

const siteHeader =
    document.getElementById("siteHeader");

if (siteHeader) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            siteHeader.classList.add("scrolled");

        } else {

            siteHeader.classList.remove("scrolled");

        }

    });

}

                          /* =================================================
   SMOOTH SCROLLING
   ================================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});

                          /* =================================================
   SCROLL REVEAL
   ================================================= */

const revealElements =
    document.querySelectorAll(
        ".product-card, .ingredient-item, .ritual-step, .mothers-content"
    );

if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            (entries, observerInstance) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observerInstance.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

    revealElements.forEach(element => {
        observer.observe(element);
    });

} else {

    revealElements.forEach(element => {
        element.classList.add("visible");
    });

}
