import React from "react";
import { Image, StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";

const UserAvatar = () => {
  return (
    <Image
      style={styles.avatarImage}
      source={require("./../../assets/profile.jpg")}
    />
  );
};

export default UserAvatar;
const styles = StyleSheet.create({
  avatarImage: {
    width: s(32),
    height: vs(32),
    borderRadius: s(50),
  },
});
