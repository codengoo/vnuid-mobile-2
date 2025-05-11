import { Stack } from "expo-router";

export default function LoginLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, headerTransparent: true }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="pass" />
      <Stack.Screen name="qr" />
      <Stack.Screen name="2fa" />
      <Stack.Screen name="2fa_nfc" />
      <Stack.Screen name="2fa_nfc_qr" />
      <Stack.Screen name="2fa_pass" />
      <Stack.Screen name="2fa_mfa" />
    </Stack>
  );
}
