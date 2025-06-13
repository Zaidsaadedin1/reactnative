import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SheetManager } from "react-native-actions-sheet";
import { useTranslation } from "react-i18next";

const ProfileScreen = () => {
  const { t } = useTranslation();

  type IoniconName =
    | "person-outline"
    | "settings-outline"
    | "notifications-outline"
    | "language-outline";

  const tabs: {
    label: string;
    icon: IoniconName;
    onPress: () => void;
  }[] = [
    {
      label: t("account") || "Account",
      icon: "person-outline",
      onPress: () => console.log("Account pressed"),
    },
    {
      label: t("settings") || "Settings",
      icon: "settings-outline",
      onPress: () => console.log("Settings pressed"),
    },
    {
      label: t("notifications") || "Notifications",
      icon: "notifications-outline",
      onPress: () => console.log("Notifications pressed"),
    },
    {
      label: t("language") || "Language",
      icon: "language-outline",
      onPress: () => SheetManager.show("languageBottomSheet"),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {tabs.map((tab, index) => (
        <TouchableOpacity key={index} style={styles.tab} onPress={tab.onPress}>
          <View style={styles.tabContent}>
            <Ionicons
              name={tab.icon}
              size={24}
              color="#333"
              style={styles.icon}
            />
            <Text style={styles.label}>{tab.label}</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#888" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    flex: 1,
  },
  tab: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    justifyContent: "space-between",
  },
  tabContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 16,
  },
  label: {
    fontSize: 16,
    color: "#333",
  },
});

export default ProfileScreen;
