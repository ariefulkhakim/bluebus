import useAuth from "@/hooks/useAuth";
import { View, Text, HStack } from "native-base";
import React from "react";

const HeaderHome = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <HStack>
      <Text>Hello, Arieful</Text>
    </HStack>
  );
};

export default HeaderHome;
