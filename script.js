/* =================================================
   NAYAGLOW 2.0 — MAIN JAVASCRIPT
================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =================================================
     ELEMENTS
  ================================================= */

  const preloader = document.getElementById("preloader");
  const siteHeader = document.getElementById("siteHeader");

  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  const languageToggle = document.getElementById("languageToggle");
  const languageMenu = document.getElementById("languageMenu");
  const languageLabel = document.getElementById("languageLabel");

  const revealElements = document.querySelectorAll(".reveal");

  /* =================================================
     PRELOADER
  ================================================= */

  window.addEventListener("load", () => {

    setTimeout(() => {

      if (preloader) {
        preloader.classList.add("loaded");
      }

    }, 500);

  });


  /* =================================================
     HEADER — SCROLL EFFECT
  ================================================= */

  function updateHeader() {

    if (!siteHeader) return;

    if (window.scrollY > 40) {
      siteHeader.classList.add("scrolled");
    } else {
      siteHeader.classList.remove("scrolled");
    }

  }

  window.addEventListener("scroll", updateHeader);

  updateHeader();


  /* =================================================
     MOBILE MENU
  ================================================= */

  if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", () => {

      const isOpen = mobileMenu.classList.toggle("active");

      menuToggle.classList.toggle("active", isOpen);

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

    });


    /* Close menu when a link is clicked */

    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(link => {

      link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });

  }


  /* =================================================
     LANGUAGE MENU
  ================================================= */

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

    document.addEventListener("click", (event) => {

      if (
        !languageMenu.contains(event.target) &&
        !languageToggle.contains(event.target)
      ) {

        languageMenu.classList.remove("active");

        languageToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      }

    });

  }


  /* =================================================
     TRANSLATIONS
  ================================================= */

  const translations = {

    fr: {

      navHome: "Accueil",
      navCollection: "Collection",
      navRitual: "Rituel",
      navMothers: "Pour les mamans",
      navStory: "Notre histoire",
      navOrder: "Commander",
      navOrderWhatsapp: "Commander sur WhatsApp",

      heroTitle:
        'La beauté <span>qui se vit.</span>',

      heroText:
        "Des soins pensés pour révéler votre beauté naturelle, honorer votre rituel et vous reconnecter à vous-même.",

      heroButton:
        "Découvrir la collection",

      heroLink:
        "Explorer notre univers",

      introTitle:
        'Prendre soin de soi <em>devient un moment.</em>',

      introText:
        "NayaGlow transforme les gestes du quotidien en une expérience de beauté douce, sensorielle et profondément personnelle.",

      collectionTitle:
        'Votre rituel. <span>Votre glow.</span>',

      collectionText:
        "Une sélection de soins pensée pour la peau, les cheveux et le corps.",

      productOne:
        "Soin de la peau",

      productOneText:
        "Des essentiels pour nourrir, hydrater et révéler l'éclat naturel de votre peau.",

      productTwo:
        "Soin des cheveux",

      productTwoText:
        "Des rituels inspirés de la nature pour prendre soin de vos cheveux en douceur.",

      productThree:
        "Soin du corps",

      productThreeText:
        "Des textures enveloppantes pour transformer chaque geste en véritable moment de bien-être.",

      discover:
        "Découvrir",

      ingredientsTitle:
        'Nature, <span>notre inspiration.</span>',

      ingredientsText:
        "Moringa, hibiscus, aloe vera, karité, baobab… Des trésors naturels qui inspirent notre vision de la beauté.",

      ritualTitle:
        'Quelques minutes <span>pour vous.</span>',

      ritualText:
        "Parce que prendre soin de soi ne devrait jamais être une tâche de plus. Faites-en votre moment.",

      stepOne:
        "Préparer",

      stepTwo:
        "Appliquer",

      stepThree:
        "Respirer",

      ritualButton:
        "Découvrir le rituel",

      mothersTitle:
        'Vous prenez soin de tout le monde. <span>Et vous ?</span>',

      mothersText:
        "NayaGlow crée un espace où les mamans peuvent ralentir, respirer et retrouver le plaisir de prendre soin d'elles.",

      mothersButton:
        "Pour les mamans",

      storyTitle:
        'Née au Congo. <span>Enracinée en Afrique.</span> Pensée pour le monde.',

      storyText:
        "NayaGlow est une vision de la beauté née au Congo, inspirée par la richesse de l'Afrique et ouverte sur le monde.",

      quote:
        "La beauté commence lorsque vous prenez le temps de vous retrouver.",

      finalTitle:
        'Votre rituel. <span>Votre moment.</span>',

      finalText:
        "Découvrez NayaGlow et commencez votre propre expérience beauté.",

      finalButton:
        "Commander sur WhatsApp",

      footerText:
        "La beauté naturelle, pensée pour vous accompagner partout.",

      footerNote:
        "Née au Congo • Enracinée en Afrique • Pensée pour le monde."

    },


    en: {

      navHome: "Home",
      navCollection: "Collection",
      navRitual: "Ritual",
      navMothers: "For Mothers",
      navStory: "Our Story",
      navOrder: "Order",
      navOrderWhatsapp: "Order on WhatsApp",

      heroTitle:
        'Beauty <span>you can feel.</span>',

      heroText:
        "Thoughtful beauty care designed to reveal your natural beauty, honor your ritual and reconnect you with yourself.",

      heroButton:
        "Discover the collection",

      heroLink:
        "Explore our world",

      introTitle:
        'Self-care <em>becomes a moment.</em>',

      introText:
        "NayaGlow transforms everyday beauty gestures into a soft, sensory and deeply personal experience.",

      collectionTitle:
        'Your ritual. <span>Your glow.</span>',

      collectionText:
        "A selection of beauty care designed for your skin, hair and body.",

      productOne:
        "Skin Care",

      productOneText:
        "Essentials designed to nourish, hydrate and reveal your skin's natural radiance.",

      productTwo:
        "Hair Care",

      productTwoText:
        "Nature-inspired rituals created to care for your hair with softness.",

      productThree:
        "Body Care",

      productThreeText:
        "Enveloping textures that transform every gesture into a true moment of well-being.",

      discover:
        "Discover",

      ingredientsTitle:
        'Nature, <span>our inspiration.</span>',

      ingredientsText:
        "Moringa, hibiscus, aloe vera, shea butter, baobab… Natural treasures that inspire our vision of beauty.",

      ritualTitle:
        'A few minutes <span>for you.</span>',

      ritualText:
        "Because taking care of yourself should never feel like another task. Make it your moment.",

      stepOne:
        "Prepare",

      stepTwo:
        "Apply",

      stepThree:
        "Breathe",

      ritualButton:
        "Discover the ritual",

      mothersTitle:
        'You care for everyone. <span>What about you?</span>',

      mothersText:
        "NayaGlow creates a space where mothers can slow down, breathe and rediscover the pleasure of caring for themselves.",

      mothersButton:
        "For Mothers",

      storyTitle:
        'Born in Congo. <span>Rooted in Africa.</span> Made for the world.',

      storyText:
        "NayaGlow is a beauty vision born in Congo, inspired by the richness of Africa and open to the world.",

      quote:
        "Beauty begins when you take the time to find yourself again.",

      finalTitle:
        'Your ritual. <span>Your moment.</span>',

      finalText:
        "Discover NayaGlow and begin your own beauty experience.",

      finalButton:
        "Order on WhatsApp",

      footerText:
        "Natural beauty, designed to accompany you wherever you go.",

      footerNote:
        "Born in Congo • Rooted in Africa • Made for the world."

    }

  };


  /* =================================================
     CHANGE LANGUAGE
  ================================================= */

  function changeLanguage(language) {

    if (!translations[language]) return;

    const selectedLanguage = translations[language];

    /* Update translated elements */

    document
      .querySelectorAll("[data-i18n]")
      .forEach(element => {

        const key = element.getAttribute("data-i18n");

        if (selectedLanguage[key]) {

          element.innerHTML =
            selectedLanguage[key];

        }

      });


    /* Update HTML language */

    document.documentElement.lang = language;


    /* Update language button */

    if (languageLabel) {

      languageLabel.textContent =
        language.toUpperCase();

    }


    /* Close language menu */

    if (languageMenu) {

      languageMenu.classList.remove("active");

    }

    if (languageToggle) {

      languageToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    }


    /* Save language */

    localStorage.setItem(
      "nayaGlowLanguage",
      language
    );

  }


  /* =================================================
     LANGUAGE BUTTONS
  ================================================= */

  const languageButtons =
    document.querySelectorAll(
      ".language-menu button[data-language]"
    );


  languageButtons.forEach(button => {

    button.addEventListener("click", () => {

      const language =
        button.getAttribute("data-language");

      changeLanguage(language);

    });

  });


  /* =================================================
     LOAD SAVED LANGUAGE
  ================================================= */

  const savedLanguage =
    localStorage.getItem("nayaGlowLanguage");


  if (
    savedLanguage &&
    translations[savedLanguage]
  ) {

    changeLanguage(savedLanguage);

  } else {

    changeLanguage("fr");

  }


  /* =================================================
     SCROLL REVEAL
  ================================================= */

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
          threshold: 0.12,
          rootMargin: "0px 0px -40px 0px"
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


  /* =================================================
     SMOOTH SCROLL
  ================================================= */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

      link.addEventListener("click", event => {

        const targetId =
          link.getAttribute("href");

        if (
          !targetId ||
          targetId === "#"
        ) return;

        const target =
          document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      });

    });


  /* =================================================
     ESC KEY — CLOSE MENUS
  ================================================= */

  document.addEventListener("keydown", event => {

    if (event.key !== "Escape") return;


    if (languageMenu) {

      languageMenu.classList.remove("active");

    }

    if (languageToggle) {

      languageToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    }


    if (mobileMenu) {

      mobileMenu.classList.remove("active");

    }

    if (menuToggle) {

      menuToggle.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  });


  /* =================================================
     WHATSAPP — SMALL INTERACTION
  ================================================= */

  const whatsappButton =
    document.querySelector(".whatsapp-float");


  if (whatsappButton) {

    whatsappButton.addEventListener(
      "mouseenter",
      () => {

        whatsappButton.classList.add("hovered");

      }
    );


    whatsappButton.addEventListener(
      "mouseleave",
      () => {

        whatsappButton.classList.remove("hovered");

      }
    );

  }


  /* =================================================
     FINAL INITIALIZATION
  ================================================= */

  document.body.classList.add("naya-ready");

});
