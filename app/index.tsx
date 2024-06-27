import React from "react";
import { useRouter } from "expo-router";
import { Button, Container, Heading, Image, Text, VStack } from "native-base";

const OnBoardingScreen = () => {
  const route = useRouter();
  return (
    <VStack
      alignItems={"center"}
      flex={1}
      paddingTop={0}
      space={12}
      justifyContent={"center"}
    >
      <Image
        source={require("@/assets/images/onboarding.png")}
        alt="img-onboarding"
        width={300}
        height={300}
      />
      <Container alignItems={"center"}>
        <Heading textAlign={"center"} size={"lg"} mb={3}>
          Welcome To{" "}
          <Heading
            color={"primary"}
            textTransform={"uppercase"}
            fontWeight={"900"}
          >
            BlueBus
          </Heading>
        </Heading>
        <Text textAlign={"center"} lineHeight={25} paddingX={4}>
          Easily book your bus tickets, choose your favorite seats, and track
          your journey in real-time.
        </Text>
      </Container>
      <Button
        onPress={() => route.navigate("/sign-in")}
        mt={16}
        bg={"primary"}
        px={10}
        py={3}
        rounded={"lg"}
      >
        <Text color={"white"} fontWeight={"600"}>
          Get Started
        </Text>
      </Button>
    </VStack>
  );
};

export default OnBoardingScreen;
