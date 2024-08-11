// @ts-ignore
import logo from "./extensions/logo.jpg";

const config = {
  auth: {
    logo,
  },

  head: {
    favicon: logo,
  },

  menu: {
    logo,
  },

  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Gesco Dashboard",

      "app.components.LeftMenu.navbrand.workplace": "Testing",

      "Auth.form.welcome.title": "Welcom to Gesco Dashboard",

      "Auth.form.welcome.subtitle": "Login to your account",

      "Settings.profile.form.section.experience.interfaceLanguageHelp":
        "Preference changes will apply only to you.",
    },
  },
  // Disable video tutorials
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { releases: false },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
