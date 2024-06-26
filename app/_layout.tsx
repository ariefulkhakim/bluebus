import { NativeBaseProvider } from "native-base";
import { useFonts } from "expo-font";
import { Slot, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { FontSetting } from "@/utils/fontSetting";
import { theme } from "@/constants/Themed";
import "react-native-reanimated";
import { AuthProvider } from "@/context/AuthContext";
import AuthMiddleware from "@/middleware/AuthMiddleware";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts(FontSetting);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <NativeBaseProvider isSSR={false} theme={theme}>
        <AuthMiddleware />
      </NativeBaseProvider>
    </AuthProvider>
  );
}
