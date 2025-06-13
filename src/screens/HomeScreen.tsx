import React from "react";
import { Text, ScrollView, StyleSheet, Button } from "react-native";
import { s } from "react-native-size-matters";
import { useDispatch } from "react-redux";
import {
  useNavigation,
  useRoute,
  NavigationProp,
  RouteProp,
} from "@react-navigation/native";
import { useTranslation } from "react-i18next";

type RootStackParamList = {
  HomeScreen: { data?: string };
  ContactUsScreen: undefined;
};

const HomeScreen = () => {
  const { t } = useTranslation();

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, "HomeScreen">>();
  const dispatch = useDispatch();

  const data = route.params?.data;

  function toggleMenu(): any {
    throw new Error("Function not implemented.");
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Meditations</Text>
      <Text>Welcome to the Home Screen!</Text>
      <Text>
        Here you can find various meditation exercises to help you relax and
        focus.
      </Text>
      <Text>
        Start your journey by selecting a meditation below. {data ?? ""}
      </Text>

      <Button
        title={t("home.goToContact")} // ✅ Use translation key
        onPress={() => navigation.navigate("ContactUsScreen")}
      />

      <Button
        title="Open Contact Form"
        onPress={() => dispatch(toggleMenu())}
      />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: s(20),
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: s(24),
    fontWeight: "bold",
    marginBottom: s(20),
    marginTop: s(20),
  },
});
