import { Icon } from "@/components";
import { Colors } from "@/constants";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function VerifyingFingerprintScreen() {
  const { password } = useLocalSearchParams<{ password: string }>();

  useEffect(() => {
    // LocalAuthentication.authenticateAsync().then((result) => {
    //   router.replace("/profile");
    // });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["bottom", "top"]}>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.yellow100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={require("@/assets/images/illus_wait_2.png")} style={{ width: "75%" }} />
        <TouchableOpacity>
          <Icon.FingerprintIcon />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
