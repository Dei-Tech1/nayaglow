/* =================================================
   NAYAGLOW 2.0 — MAIN JAVASCRIPT
================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const preloader = document.getElementById("preloader");
  const siteHeader = document.getElementById("siteHeader");
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const languageToggle = document.getElementById("languageToggle");
  const languageMenu = document.getElementById("languageMenu");
  const languageLabel = document.getElementById("languageLabel");
  const revealElements = document.querySelectorAll(".reveal");


window.addEventListener("load", () => {

  setTimeout(() => {

    const preloader = document.querySelector(".preloader");

    if (preloader) {
      preloader.classList.add("hide");
    }

  }, 500);

});
   
  /* =================================================
     HEADER
  ================================================= */

  function updateHeader() {

    if (!siteHeader) return;

    siteHeader.classList.toggle(
      "scrolled",
      window.scrollY > 40
    );

  }

  window.addEventListener("scroll", updateHeader);

  updateHeader();


  /* =================================================
     MOBILE MENU
  ================================================= */

  if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", () => {

      const open =
        mobileMenu.classList.toggle("active");

      menuToggle.classList.toggle(
        "active",
        open
      );

      menuToggle.setAttribute(
        "aria-expanded",
        open ? "true" : "false"
      );

    });


    mobileMenu
      .querySelectorAll("a")
      .forEach(link => {

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

    languageToggle.addEventListener(
      "click",
      event => {

        event.stopPropagation();

        const open =
          languageMenu.classList.toggle("active");

        languageToggle.setAttribute(
          "aria-expanded",
          open ? "true" : "false"
        );

      }
    );


    document.addEventListener("click", event => {

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

    /* =================================================
       FRENCH
    ================================================= */

    fr: {

      navHome: "Accueil",
      navCollection: "Collection",
      navRitual: "Rituel",
      navMothers: "Pour les mamans",
      navStory: "Notre histoire",
      navMaison: "La Maison",
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
        "Née au Congo • Enracinée en Afrique • Pensée pour le monde.",


      /* LA MAISON */

      maisonEyebrow:
        "LA MAISON NAYAGLOW",

      maisonTitle:
        'Une beauté <br><em>qui vous ressemble.</em>',

      maisonIntro:
        "NayaGlow est une vision de la beauté née au Congo, inspirée par l'Afrique et pensée pour accompagner les femmes partout dans le monde.",

      maisonButton:
        "Découvrir la collection",

      maisonBadge:
        "CONGO<br>AFRIQUE<br>MONDE",

      manifestoEyebrow:
        "NOTRE PHILOSOPHIE",

      manifestoTitle:
        'La beauté commence<br><em>quand on revient à soi.</em>',

      manifestoText1:
        "Nous croyons qu'un soin peut être bien plus qu'un produit. Il peut devenir un moment de pause, de confiance et de reconnexion à soi.",

      manifestoText2:
        "NayaGlow crée un univers où la beauté rencontre la nature, le bien-être et le plaisir de prendre soin de soi.",

      valuesEyebrow:
        "NOS VALEURS",

      valuesTitle:
        'Ce qui guide<br><em>NayaGlow.</em>',

      valueOneTitle:
        "Nature",

      valueOneText:
        "Nous puisons notre inspiration dans la richesse du monde naturel.",

      valueTwoTitle:
        "Douceur",

      valueTwoText:
        "Des expériences pensées pour apporter confort, simplicité et plaisir.",

      valueThreeTitle:
        "Authenticité",

      valueThreeText:
        "Une beauté qui accompagne chaque femme sans lui demander de devenir quelqu'un d'autre.",

      valueFourTitle:
        "Connexion",

      valueFourText:
        "Une marque née au Congo, enracinée en Afrique et ouverte sur le monde.",

      globalEyebrow:
        "CONGO • AFRIQUE • MONDE",

      globalTitle:
        'Née ici.<br><em>Pensée pour partout.</em>',

      globalText:
        "NayaGlow porte une identité profondément africaine tout en regardant vers le monde. Notre ambition est de créer une expérience beauté capable de voyager, de connecter les cultures et de faire rayonner une nouvelle vision du soin.",

      contactEyebrow:
        "PARLONS BEAUTÉ",

      contactTitle:
        'Votre prochain rituel<br><em>commence par un message.</em>',

      contactText:
        "Une question sur nos soins, une commande ou simplement envie d'en savoir plus ? Notre équipe est à votre écoute.",

      contactWhatsapp:
        "Écrire sur WhatsApp",

      footerExplore:
        "EXPLORER",

      footerContact:
        "CONTACT",

      footerWorld:
        "Congo • Africa • Worldwide"

    },


    /* =================================================
       ENGLISH
    ================================================= */

    en: {

      navHome: "Home",
      navCollection: "Collection",
      navRitual: "Ritual",
      navMothers: "For Mothers",
      navStory: "Our Story",
      navMaison: "Our House",
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
        "Born in Congo • Rooted in Africa • Made for the world.",


      /* OUR HOUSE */

      maisonEyebrow:
        "THE NAYAGLOW HOUSE",

      maisonTitle:
        'Beauty <br><em>that feels like you.</em>',

      maisonIntro:
        "NayaGlow is a beauty vision born in Congo, inspired by Africa and created to accompany women everywhere in the world.",

      maisonButton:
        "Discover the collection",

      maisonBadge:
        "CONGO<br>AFRICA<br>WORLD",

      manifestoEyebrow:
        "OUR PHILOSOPHY",

      manifestoTitle:
        'Beauty begins<br><em>when we return to ourselves.</em>',

      manifestoText1:
        "We believe beauty care can be much more than a product. It can become a moment of pause, confidence and reconnection with yourself.",

      manifestoText2:
        "NayaGlow creates a world where beauty meets nature, well-being and the pleasure of taking care of yourself.",

      valuesEyebrow:
        "OUR VALUES",

      valuesTitle:
        'What guides<br><em>NayaGlow.</em>',

      valueOneTitle:
        "Nature",

      valueOneText:
        "We draw our inspiration from the richness and beauty of the natural world.",

      valueTwoTitle:
        "Softness",

      valueTwoText:
        "Experiences designed to bring comfort, simplicity and pleasure.",

      valueThreeTitle:
        "Authenticity",

      valueThreeText:
        "Beauty that supports every woman without asking her to become someone else.",

      valueFourTitle:
        "Connection",

      valueFourText:
        "A brand born in Congo, rooted in Africa and open to the world.",

      globalEyebrow:
        "CONGO • AFRICA • WORLD",

      globalTitle:
        'Born here.<br><em>Made for everywhere.</em>',

      globalText:
        "NayaGlow carries a deeply African identity while looking toward the world. Our ambition is to create a beauty experience that travels, connects cultures and brings a new vision of self-care to more women.",

      contactEyebrow:
        "LET'S TALK BEAUTY",

      contactTitle:
        'Your next ritual<br><em>starts with a message.</em>',

      contactText:
        "A question about our products, an order or simply want to know more? Our team is here for you.",

      contactWhatsapp:
        "Message us on WhatsApp",

      footerExplore:
        "EXPLORE",

      footerContact:
        "CONTACT",

      footerWorld:
        "Congo • Africa • Worldwide"

    }

  };


  /* =================================================
     CHANGE LANGUAGE
  ================================================= */

  function changeLanguage(language) {

    if (!translations[language]) return;

    const selected =
      translations[language];


    document
      .querySelectorAll("[data-i18n]")
      .forEach(element => {

        const key =
          element.getAttribute("data-i18n");

        if (
          selected[key] !== undefined
        ) {

          element.innerHTML =
            selected[key];

        }

      });


    document.documentElement.lang =
      language;


    if (languageLabel) {

      languageLabel.textContent =
        language.toUpperCase();

    }


    if (languageMenu) {

      languageMenu.classList.remove("active");

    }


    if (languageToggle) {

      languageToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    }


    localStorage.setItem(
      "nayaGlowLanguage",
      language
    );

  }


  /* =================================================
     LANGUAGE BUTTONS
  ================================================= */

  document
    .querySelectorAll(
      ".language-menu button[data-language]"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          changeLanguage(
            button.getAttribute(
              "data-language"
            )
          );

        }
      );

    });


  /* =================================================
     LOAD LANGUAGE
  ================================================= */

  const savedLanguage =
    localStorage.getItem(
      "nayaGlowLanguage"
    );


  changeLanguage(
    translations[savedLanguage]
      ? savedLanguage
      : "fr"
  );


  /* =================================================
     SCROLL REVEAL
  ================================================= */

  if (
    "IntersectionObserver" in window
  ) {

    const observer =
      new IntersectionObserver(
        (entries, observerInstance) => {

          entries.forEach(entry => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "visible"
              );

              observerInstance.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.12,
          rootMargin:
            "0px 0px -40px 0px"
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
    .querySelectorAll(
      'a[href^="#"]'
    )
    .forEach(link => {

      link.addEventListener(
        "click",
        event => {

          const targetId =
            link.getAttribute("href");

          if (
            !targetId ||
            targetId === "#"
          ) return;

          const target =
            document.querySelector(
              targetId
            );

          if (!target) return;

          event.preventDefault();

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }
      );

    });


  /* =================================================
     ESCAPE KEY
  ================================================= */

  document.addEventListener(
    "keydown",
    event => {

      if (event.key !== "Escape") return;


      if (languageMenu) {

        languageMenu.classList.remove(
          "active"
        );

      }


      if (languageToggle) {

        languageToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      }


      if (mobileMenu) {

        mobileMenu.classList.remove(
          "active"
        );

      }


      if (menuToggle) {

        menuToggle.classList.remove(
          "active"
        );

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      }

    }
  );


  /* =================================================
     FINAL INITIALIZATION
  ================================================= */

  document.body.classList.add(
    "naya-ready"
  );

});
