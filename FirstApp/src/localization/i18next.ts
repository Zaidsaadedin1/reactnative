import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import ar from "./ar.json";
import { LanguageStorage } from "../components/language/LanguageStorage";

// Initialize i18next with default configuration
const initI18next = async () => {
  // Get saved language from AsyncStorage
  const savedLanguage = await LanguageStorage.getLanguage();

  return i18next.use(initReactI18next).init({
    resources: {
      en: {
        translation: en,
      },
      ar: {
        translation: ar,
      },
    },
    lng: savedLanguage, // Use saved language or default
    fallbackLng: savedLanguage, // Fallback to saved language
    defaultNS: "translation",
    ns: ["translation"],
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });
};

// Function to change language and save to AsyncStorage
export const changeLanguage = async (language: string) => {
  try {
    await i18next.changeLanguage(language);
    await LanguageStorage.saveLanguage(language);
    console.log("Language changed to:", language);
  } catch (error) {
    console.error("Error changing language:", error);
  }
};

// Initialize i18next
initI18next();

export default i18next;
