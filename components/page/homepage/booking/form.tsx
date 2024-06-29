import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formBookingSchema, BookingSchema } from "./schema.form";
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

const FormBooking = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingSchema>({
    resolver: zodResolver(formBookingSchema),
  });

  const onSubmit: SubmitHandler<BookingSchema> = async (data) => {
    console.log(data);
  };
  return (
    <VStack w={"full"}>
      <Controller
        control={control}
        name="start_line"
        render={({ field: { onChange, onBlur, value } }) => (
          <VStack>
            <Input
              placeholder="From"
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
            {errors.start_line && (
              <Text color={"red.600"} mt={1}>
                {errors.start_line.message}
              </Text>
            )}
          </VStack>
        )}
      />
      <Controller
        control={control}
        name="end_line"
        render={({ field: { onChange, onBlur, value } }) => (
          <VStack>
            <Input
              placeholder="To"
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
              InputLeftElement={
                <Icon as={Ionicons} name={"bus"} size={4} mr={3} />
              }
            />
            {errors.end_line && (
              <Text color={"red.600"} mt={1}>
                {errors.end_line.message}
              </Text>
            )}
          </VStack>
        )}
      />
      <Button
        py={3}
        mt={3}
        rounded={"lg"}
        bg={"primary"}
        onPress={handleSubmit(onSubmit)}
        //   isLoading={loading}
        //   isLoadingText="Processing..."
        //   disabled={loading}
      >
        <Text color={"white"} fontWeight={"600"}>
          Sign In
        </Text>
      </Button>
    </VStack>
  );
};

export default FormBooking;
