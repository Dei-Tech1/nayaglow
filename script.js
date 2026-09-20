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

                "
