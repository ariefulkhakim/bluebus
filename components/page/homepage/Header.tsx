import useAuth from "@/hooks/useAuth";
import { View, Text, HStack, Heading, VStack } from "native-base";
import React from "react";

const HeaderHome = () => {
  const { user } = useAuth();
  console.log(user.user_metadata);
  return (
    <VStack h={"80"} bg={"primary"} px={5} pt={16}>
      <Heading size={"md"} color={"white"}>
        Hello, {user && user.user_metadata ? user.user_metadata.name : ""}
      </Heading>
      <Text color={"white"}>Your Gateway to Easy Bus Travel</Text>
    </VStack>
  );
};

export default HeaderHome;
