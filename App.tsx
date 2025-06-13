import React, { useEffect, useState } from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainStackNavigation from "./src/navigations/MainStackNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import LanguageBottomSheet from "./src/components/language/languageBottomSheet";
import { I18nextProvider } from "react-i18next";
import i18next from "./src/localization/i18next";
import { LanguageStorage } from "./src/components/language/LanguageStorage";

export default function App() {
  const [isLanguageLoaded, setIsLanguageLoaded] = useState(false);

  useEffect(() => {
    const loadLanguage = async () => {
      try {
        const savedLanguage = await LanguageStorage.getLanguage();
        await i18next.changeLanguage(savedLanguage);
        setIsLanguageLoaded(true);
      } catch (error) {
        console.error("Error loading language:", error);
        setIsLanguageLoaded(true); // Continue with default language
      }
    };

    loadLanguage();
  }, []);

  if (!isLanguageLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <LanguageBottomSheet />
        <SafeAreaProvider>
          <NavigationContainer>
            <MainStackNavigation />
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </I18nextProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
});
