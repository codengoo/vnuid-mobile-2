import { CameraScanQr } from "@/components/camera";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
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
    <CameraScanQr />
  );
}

