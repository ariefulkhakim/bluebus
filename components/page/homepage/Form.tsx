import { View, Text, VStack, Box } from "native-base";
import React from "react";
import FormBooking from "./booking/form";

const FormBookingScreen = () => {
  return (
    <Box
      shadow={2}
      position={"absolute"}
      p={5}
      bg={"primaryDark"}
      top={"56"}
      left={5}
      maxWidth={"80"}
    >
      <FormBooking />
    </Box>
  );
};

export default FormBookingScreen;
