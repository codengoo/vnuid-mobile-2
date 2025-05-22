import { AtButtonBox } from "@/components";
import { Styles } from "@/constants";
import { setAuthenticator } from "@/helpers/login";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import Toast from "react-native-toast-message";
export default function VerifyingFingerprintScreen() {
  const { password } = useLocalSearchParams<{ password: string }>();
  const router = useRouter();
  const [mfaCode, setMfaCode] = useState<string>("");
  const handleSetAuthenticator = async () => {
    const code = await setAuthenticator(password);
    if (code) {
      setMfaCode(code);
    } else {
      Toast.show({
        type: "error",
        text1: "Failed",
        text2: "Please try again",
        autoHide: true,
      });
    }
  };

  const handleGoback = () => {
    router.replace("/profile");
  };

  useEffect(() => {
    handleSetAuthenticator();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={Styles.centerText}>Quét QR code vào ứng dụng Authenticator</Text>
      {mfaCode && <QRCode value={mfaCode} size={200} color="black" backgroundColor="white" />}
      <AtButtonBox title="Quay lại" onPress={handleGoback} center color="yellow" widthFull />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Styles.container,
    alignItems: "center",
  },
});
