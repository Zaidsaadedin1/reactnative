import AsyncStorage from "@react-native-async-storage/async-storage";

const LANGUAGE_KEY = "selected_language";

export const LanguageStorage = {
  // Save language to AsyncStorage
  saveLanguage: async (language: string) => {
    try {
      await AsyncStorage.setItem(LANGUAGE_KEY, language);
      console.log("Language saved:", language);
    } catch (error) {
      console.error("Error saving language:", error);
    }
  },

  // Get language from AsyncStorage
  getLanguage: async () => {
    try {
      const language = await AsyncStorage.getItem(LANGUAGE_KEY);
      return language || "en"; // Default to 'en' if no language is saved
    } catch (error) {
      console.error("Error getting language:", error);
      return "en"; // Return default language on error
    }
  },

  // Remove language from AsyncStorage (optional)
  removeLanguage: async () => {
    try {
      await AsyncStorage.removeItem(LANGUAGE_KEY);
      console.log("Language removed from storage");
    } catch (error) {
      console.error("Error removing language:", error);
    }
  },
};
