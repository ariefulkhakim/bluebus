import { Stack, useRouter } from "expo-router";
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  VStack,
  Icon,
  Container,
  Heading,
} from "native-base";
import React from "react";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FormSignUp from "@/components/authentication/sign-up/forms";

const SignUp = () => {
  const route = useRouter();
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
            py={12}
            bg={"text"}
          >
            <VStack space={8}>
              <Icon
                onPress={() => route.back()}
                as={Ionicons}
                name="arrow-back-circle"
                size={10}
              />
              <Container pl={2}>
                <Heading mb={2}>Sign Up</Heading>
                <Text lineHeight={24}>
                  Discover seamless travel planning and exclusive deals.
                </Text>
              </Container>
            </VStack>
            <FormSignUp />
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;
