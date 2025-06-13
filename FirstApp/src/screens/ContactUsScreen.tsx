import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  Modal,
} from "react-native";
import UserAvatar from "../components/UserAvatar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { s, vs } from "react-native-size-matters";
import SocialComponent from "../components/socialComponent";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { menuReducer } from "../store/reducers/menuReducer";

const ContactUsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.menuReducer.isOpen);
  console.log("ContactUsScreen isOpen:", isOpen);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.view1}>
        <Ionicons name="arrow-back-circle-outline" size={s(32)} color="black" />
        <UserAvatar />
      </View>
      <Text style={styles.ContactUs}>Contact Us</Text>
      <View style={styles.view2}>
        <Text style={styles.platforms}>Social media platforms</Text>
        <SocialComponent
          icon={<Feather name="send" size={20} color="black" />}
          platformName="React Native"
        />
        <SocialComponent
          icon={<Feather name="github" size={20} color="black" />}
          platformName="GitHub"
        />
        <SocialComponent
          icon={<Feather name="twitter" size={20} color="black" />}
          platformName="Twitter"
        />
        <SocialComponent
          icon={<Feather name="facebook" size={20} color="black" />}
          platformName="Facebook"
        />
        <SocialComponent
          icon={<Feather name="instagram" size={20} color="black" />}
          platformName="Instagram"
        />
        <SocialComponent
          icon={<Feather name="linkedin" size={20} color="black" />}
          platformName="LinkedIn"
        />
        <SocialComponent
          icon={<Feather name="youtube" size={20} color="black" />}
          platformName="YouTube"
        />
      </View>
      |
      <Modal
        animationType="slide"
        transparent={true}
        visible={isOpen}
        onRequestClose={() => dispatch(menuReducer.actions.closeMenu())}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              width: s(300),
              height: vs(200),
              backgroundColor: "#fff",
              borderRadius: s(10),
              padding: s(20),
            }}
          >
            <Text style={{ fontSize: s(18), fontWeight: "bold" }}>
              Contact Form
            </Text>
            <Button
              title="Close"
              onPress={() => {
                dispatch(menuReducer.actions.closeMenu());
              }}
            />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: s(10),
    backgroundColor: "#fff",
  },
  view1: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: s(20),
  },
  view2: {
    flex: 2,
    marginTop: s(20),
    padding: s(10),
    backgroundColor: "#f5f5f5",
    borderRadius: s(8),
  },
  platforms: {
    fontSize: s(18),
    fontWeight: "bold",
    marginBottom: s(10),
  },
  ContactUs: {
    fontSize: s(24),
    fontWeight: "bold",
    marginBottom: s(10),
    textAlign: "center",
  },
});
