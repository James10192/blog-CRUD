import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Traductions
const resources = {
  en: {
    translation: {
      "Welcome": "Welcome",
      "Sign In": "Sign In",
      // Ajoutez d'autres traductions ici
    }
  },
  fr: {
    translation: {
      "Welcome": "Bienvenue",
      "Sign In": "Se connecter",
      // Ajoutez d'autres traductions ici
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr", // langue par défaut
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
