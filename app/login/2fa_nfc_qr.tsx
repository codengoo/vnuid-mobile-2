import { AtCamera } from "@/components/camera";
import { Colors, space } from "@/constants";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
import { useCodeScanner } from "react-native-vision-camera";

export default function ScanNfcQrScreen() {
  //   const {is2fa = false} = route.params || {};
  const { t } = useTranslation("login");
  const hasScannedRef = useRef(false);

  const handleSignin = async (nfc: string, uid: string) => {
    try {
      //   if (is2fa) await signInWithNfc(nfc, uid);
      //   else await signInWithNfc2Fa(nfc, true);
    } catch (error) {
      //   Toast.show({
      //     type: 'error',
      //     text1: t('toast_failed'),
      //     text2: t('toast_failed_description'),
      //     autoHide: true,
      //   });
      //   goBack();
    }
  };

  const codeScanner = useCodeScanner({
    codeTypes: ["qr"],
    onCodeScanned: async (codes) => {
      if (codes.length > 0 && !hasScannedRef.current) {
        const raw = codes[0].value;
        if (!raw) return;
        try {
          const data = JSON.parse(raw);
          hasScannedRef.current = true;
          console.log(data);
          await handleSignin(data.nfc, data.uid);
        } catch (error) {
          hasScannedRef.current = false;
        }
      }
    },
  });

  return (
    <AtCamera position="back">
      <View style={styles.squareFrame} />

      <Text style={styles.instructionText}>Align QR code in the box</Text>
    </AtCamera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // full screen
    justifyContent: "center",
    alignItems: "center",
  },
  squareFrame: {
    width: space(250),
    height: space(250),
    borderWidth: space(2),
    borderColor: Colors.white,
    borderRadius: space(20),
    boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.7)",
  },
  instructionText: {
    marginTop: 20,
    color: "white",
    fontSize: 16,
  },
});
