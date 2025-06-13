import i18next, { changeLanguage } from "./../../localization/i18next";
import React, { use } from "react";
import { useTranslation } from "react-i18next";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";

const LanguageBottomSheet = () => {
  const { t } = useTranslation();
  const handleLanguageChange = async (language: string) => {
    try {
      SheetManager.hide("languageBottomSheet");
      await changeLanguage(language);
      console.log("Language changed successfully");
    } catch (error) {
      console.error("Failed to change language:", error);
    }
  };
  return (
    <ActionSheet
      id="languageBottomSheet"
      gestureEnabled={true}
      defaultOverlayOpacity={0.3}
      containerStyle={{
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 16,
      }}
    >
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 16 }}>
          Select Language
        </Text>
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            handleLanguageChange("en");
            console.log("english selected");
          }}
        >
          <Text style={styles.text}>{t("English")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => console.log("Spanish selected")}
        >
          <Text style={styles.text}>Spanish</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => console.log("French selected")}
        >
          <Text style={styles.text}>French</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            handleLanguageChange("ar");
            console.log("Arabic selected");
          }}
        >
          <Text style={styles.text}>{t("Arabic")}</Text>
        </TouchableOpacity>
      </View>
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  text: {
    fontSize: 18,
    color: "#333",
  },
});

export default LanguageBottomSheet;
