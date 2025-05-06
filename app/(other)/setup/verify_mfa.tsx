import * as LocalAuthentication from "expo-local-authentication";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function VerifyingFingerprintScreen() {
  const { password } = useLocalSearchParams<{ password: string }>();

  useEffect(() => {
    LocalAuthentication.authenticateAsync().then((result) => {
      router.replace("/profile");
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["bottom", "top"]}>
      <Text>Verify Fingerprint</Text>
    </SafeAreaView>
  );
}
