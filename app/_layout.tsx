import { Toast } from "@/components";
import { UserProvider } from "@/context";
import "@/locales";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import "react-native-reanimated";
export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <UserProvider>
        <Stack screenOptions={{ headerShown: false, headerTransparent: true }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(main)" />
        </Stack>
      </UserProvider>
      <Toast />
    </>
  );
}
