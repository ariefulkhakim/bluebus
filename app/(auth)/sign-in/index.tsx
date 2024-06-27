import { Stack, useRouter } from "expo-router";
import {
  Center,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  VStack,
  Icon,
  Container,
  Heading,
} from "native-base";
import React from "react";
import {
  Keyboard,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FormSignIn from "@/components/authentication/sign-in/forms";

const SignIn = () => {
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
                <Heading mb={2}>Sign In</Heading>
                <Text lineHeight={24}>
                  Sign in to your account to continue your journey.
                </Text>
              </Container>
            </VStack>
            <FormSignIn />
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
