import { AtButtonLink } from "@/components";
import { Tagline } from "@/components/common/tagline";
import { COLOR, FontFamily, FontSize, space, Space } from "@/constants";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginQRMain() {
  const { t } = useTranslation("login");
  const navigateToMainLogin = () => router.back();

  return (
    <SafeAreaView style={styles.container}>
      <Tagline />

      <View style={styles.qrCodeWrapper}>
        <QRCode
          backgroundColor="transparent"
          value="https://www.npmjs.com/package/react-native-qrcode-svg"
          size={248}
        />
      </View>

      <View style={styles.helperWrapper}>
        <Text style={styles.helperTitle}>{t("helper_qr_title")}</Text>
        <Text style={styles.helperDetails}>{t("helper_qr_details")}</Text>
      </View>

      <AtButtonLink title={t("go_back")} onPress={navigateToMainLogin} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.background,
    flex: 1,
    padding: Space.sl,
    paddingTop: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },

  qrCodeWrapper: {
    backgroundColor: COLOR.backgroundBoxHighlight,
    padding: Space.sd,
    borderRadius: space(20),
  },

  helperWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: Space.md,
  },

  helperTitle: {
    fontFamily: FontFamily.Prompt,
    color: COLOR.text,
    textAlign: "center",
    fontSize: FontSize.md,
  },

  helperDetails: {
    fontFamily: FontFamily.Prompt,
    color: COLOR.textSub,
    textAlign: "center",
    fontSize: FontSize.sm,
  },
});
