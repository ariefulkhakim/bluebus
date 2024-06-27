import { View, Text } from "react-native";
import React from "react";
import { Button } from "native-base";
import useAuth from "@/hooks/useAuth";

const ProfileScreen = () => {
  const { signOut, loading } = useAuth();
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button
        onPress={signOut}
        disabled={loading}
        isLoading={loading}
        isLoadingText="Processing...."
      >
        Log Out
      </Button>
    </View>
  );
};

export default ProfileScreen;
