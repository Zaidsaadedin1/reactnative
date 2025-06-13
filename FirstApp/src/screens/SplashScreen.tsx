import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   navigation.replace("HomeScreen", { data: "asasa" });
    // }, 5000);
    const timer = setTimeout(() => {
      navigation.replace("LoginScreen", { data: "asasa" });
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={styles.splashScreen}
      />
      <Text style={styles.title}>Welcome</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282c34",
    justifyContent: "center",
    alignItems: "center",
  },
  splashScreen: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
    letterSpacing: 2,
  },
  loader: {
    marginTop: 10,
  },
});
