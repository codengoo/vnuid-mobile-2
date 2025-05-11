import { Icon } from "@/components";
import { LoginContentLayout, LoginDecoratorLayout, LoginLayout } from "@/components/layout/login";
import { space } from "@/constants";
import { signInWithNfc } from "@/helpers/login";
import { HeaderLogin, LoginForm, LoginSection } from "@/screens/login";
import { StaticScreenProps } from "@react-navigation/native";
import { router } from "expo-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Image } from "react-native";
// import NfcManager, { NfcTech } from "react-native-nfc-manager";
import Toast from "react-native-toast-message";

type Props = StaticScreenProps<{
  is2fa: boolean;
}>;

export default function LoginNfcScreen() {
  const { t } = useTranslation("login");

  const handleSignin = async (nfc: string, uid: string) => {
    try {
      await signInWithNfc(nfc, uid);
    } catch (error) {
      Toast.show({
        type: "error",
        text1: t("toast_failed"),
        text2: t("toast_failed_description"),
        autoHide: true,
      });
      //   goBack();
    }
  };

  async function handleStartNfc() {
    // await NfcManager.start();

    try {
      //   await NfcManager.requestTechnology(NfcTech.Ndef);
      //   const tag = await NfcManager.getTag();
      //   console.log(tag);
      //   if (!tag) throw new Error("Invalid tag");
      //   const message = tag.ndefMessage;
      //   const raw = message[0].payload[0] as string;
      //   const data = JSON.parse(raw);
      //   await handleSignin(data.fontcolor, data.uid);
    } catch (ex) {
      //   console.warn("Error reading NFC", ex);
      //   NfcManager.cancelTechnologyRequest();
    }
  }

  useEffect(() => {
    // NfcManager.isEnabled().then((isEnabled) => {
    //   if (isEnabled) {
    //     handleStartNfc();
    //   } else {
    //     Toast.show({
    //       type: "error",
    //       text1: t("toast_nfc_disabled_title"),
    //       text2: t("toast_nfc_disabled_description"),
    //       autoHide: true,
    //     });
    //   }
    // });
  }, []);

  const navigateToScanNfc = () => {
    router.navigate("/login/2fa_nfc_qr");
  };

  return (
    <LoginLayout>
      <LoginDecoratorLayout>
        <HeaderLogin />
        <Image
          source={require("@/assets/images/login_nfc.png")}
          style={{ height: space(350), aspectRatio: 1 }}
          resizeMode="contain"
        />
      </LoginDecoratorLayout>

      <LoginContentLayout>
        <LoginForm description=" Move your student card to correct position to read info" />

        <LoginSection
          handleLogin={navigateToScanNfc}
          isLoading={false}
          title="Scan QR on card"
          icon={Icon.QRIcon}
        />
      </LoginContentLayout>
    </LoginLayout>
  );
}
