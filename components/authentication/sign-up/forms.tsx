import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema, formSignUpSchema } from "./schema.form";
import React, { useState } from "react";
import {
  Input,
  VStack,
  Text,
  Button,
  Center,
  HStack,
  Icon,
  View,
  Pressable,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

const FormSignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(formSignUpSchema),
  });

  const onSubmit: SubmitHandler<SignInSchema> = (data) => {
    console.log(data);
    // Handle sign-in logic here
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <>
      <VStack mt={10} justifyContent={"space-between"} space={"12"}>
        <View>
          <VStack space={5}>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, onBlur, value } }) => (
                <VStack>
                  <Input
                    placeholder="Full Name"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    autoCapitalize="none"
                    rounded={"lg"}
                    _focus={{
                      backgroundColor: "transparent",
                      borderColor: "primaryDark",
                    }}
                    py={2}
                    pt={3}
                    fontSize={14}
                    borderColor={"background"}
                  />
                  {errors.name && (
                    <Text color={"red.600"} mt={1}>
                      {errors.name.message}
                    </Text>
                  )}
                </VStack>
              )}
            />
            <Controller
              control={control}
              name="phone_number"
              render={({ field: { onChange, onBlur, value } }) => (
                <VStack>
                  <Input
                    placeholder="Phone Number"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    keyboardType="phone-pad"
                    autoCapitalize="none"
                    rounded={"lg"}
                    _focus={{
                      backgroundColor: "transparent",
                      borderColor: "primaryDark",
                    }}
                    py={2}
                    pt={3}
                    fontSize={14}
                    borderColor={"background"}
                  />
                  {errors.phone_number && (
                    <Text color={"red.600"} mt={1}>
                      {errors.phone_number.message}
                    </Text>
                  )}
                </VStack>
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <VStack>
                  <Input
                    placeholder="Email"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    rounded={"lg"}
                    _focus={{
                      backgroundColor: "transparent",
                      borderColor: "primaryDark",
                    }}
                    py={2}
                    pt={3}
                    fontSize={14}
                    borderColor={"background"}
                  />
                  {errors.email && (
                    <Text color={"red.600"} mt={1}>
                      {errors.email.message}
                    </Text>
                  )}
                </VStack>
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <VStack>
                  <Input
                    placeholder="Password"
                    secureTextEntry={!passwordVisible}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    rounded={"lg"}
                    _focus={{
                      backgroundColor: "transparent",
                      borderColor: "primaryDark",
                    }}
                    py={2}
                    pt={3}
                    fontSize={14}
                    borderColor={"background"}
                    placeholderTextColor={"gray-100"}
                    InputRightElement={
                      <Pressable onPress={togglePasswordVisibility}>
                        <Icon
                          as={Ionicons}
                          name={!passwordVisible ? "eye-off" : "eye"}
                          size={4}
                          mr={3}
                        />
                      </Pressable>
                    }
                  />
                  {errors.password && (
                    <Text color={"red.600"} mt={1}>
                      {errors.password.message}
                    </Text>
                  )}
                </VStack>
              )}
            />
            <Button
              py={3}
              mt={5}
              rounded={"lg"}
              bg={"primary"}
              onPress={handleSubmit(onSubmit)}
            >
              <Text color={"white"} fontWeight={"600"}>
                Sign Up
              </Text>
            </Button>
          </VStack>
          <Center my={5}>
            <Text>Or</Text>
          </Center>
          <HStack justifyContent={"center"} space={4} mb={0}>
            <Button
              variant={"outline"}
              rounded={"lg"}
              w={"32"}
              _pressed={{
                backgroundColor: "transparent",
                borderColor: "primaryDark",
              }}
            >
              <HStack space={1} alignItems={"center"}>
                <Icon
                  as={Ionicons}
                  name="logo-google"
                  size={4}
                  color={"#DB4437"}
                />
                <Text fontSize={"14px"}>Google</Text>
              </HStack>
            </Button>
            <Button
              variant={"outline"}
              w={"32"}
              rounded={"lg"}
              _pressed={{
                backgroundColor: "transparent",
                borderColor: "primaryDark",
              }}
            >
              <HStack space={1} alignItems={"center"}>
                <Icon
                  as={Ionicons}
                  name="logo-facebook"
                  size={4}
                  color={"#1877F2"}
                />
                <Text fontSize={"14px"}>Facebook</Text>
              </HStack>
            </Button>
          </HStack>
        </View>
        <Center>
          <Text>
            Have any account? {""}
            <Link href={"/sign-in"} style={{ fontWeight: "900" }}>
              Sign In
            </Link>
          </Text>
        </Center>
      </VStack>
    </>
  );
};

export default FormSignUp;
