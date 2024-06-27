import {
  HStack,
  Heading,
  KeyboardAvoidingView,
  ScrollView,
  Text,
} from "native-base";
import React from "react";
import { Stack } from "expo-router";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import HeaderHome from "./components/Header";

const HomeScreen = () => {
  return (
    <>
      <KeyboardAvoidingView
        h={{
          base: "100%",
          lg: "auto",
        }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            flex={1}
            px={7}
            py={8}
            bg={"text"}
          >
            <HeaderHome />
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

export default HomeScreen;
