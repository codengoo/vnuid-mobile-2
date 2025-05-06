import { Toast } from "@/components";
import "@/locales";
import { Stack } from "expo-router";
import "react-native-reanimated";
export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false, headerTransparent: true }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(main)" />
      </Stack>
      <Toast />
    </>
  );
}
