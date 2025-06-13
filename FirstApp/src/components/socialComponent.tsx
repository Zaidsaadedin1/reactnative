import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { s } from "react-native-size-matters";

type SocialComponentProps = {
  icon: React.ReactNode;
  platformName: string;
};

const SocialComponent = ({ icon, platformName }: SocialComponentProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.platformSection}>
        {icon}
        <Text style={styles.platformName}>{platformName}</Text>
      </View>
      <TouchableOpacity
        onPress={() => console.log(`Send message to ${platformName}`)}
      >
        <View style={styles.sendButton}>
          <Feather name="send" size={24} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SocialComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    padding: s(10),
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#e0e0e0",
    borderRadius: s(20),
    margin: s(5),
  },

  platformName: {
    fontSize: s(16),
    color: "#333",
    paddingLeft: s(10),
  },
  platformSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sendButton: {
    backgroundColor: "#f0f0f0",
    padding: s(10),
    borderRadius: s(5),
    alignItems: "center",
  },
});
