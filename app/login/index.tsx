import { AtBottomSheet, AtButtonBox, AtButtonLink, ButtonLang, Icon } from "@/components";
import { GoogleIcon, QRIcon } from "@/components/ui/icon";
import { COLOR, Space, space, Styles } from "@/constants";
import { useUser } from "@/context";
import { handleLoginBase, signInWithBio, signInWithGoogle } from "@/helpers/login";
import { ButtonChangeIP } from "@/screens/common";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginMainScreen() {
  const { t } = useTranslation("login");
  const { setUser } = useUser();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [isLoading, setLoading] = useState(false);

  const handleLogin = async (fn: () => Promise<string | null>, isShowError?: boolean) => {
    await handleLoginBase(fn, setLoading, setUser, t, isShowError);
  };
  const showModal = () => bottomSheetModalRef.current?.present();

  const navigateToQRLogin = () => router.push({ pathname: "/login/qr" });
  const navigateToPassLogin = () => router.push({ pathname: "/login/pass" });
  const navigateToNfcLogin = () =>
    router.push({ pathname: "/login/2fa_nfc", params: { is_2fa: "true" } });

  const handleGoogleLogin = async () => {
    handleLogin(signInWithGoogle);
  };
  const handleBioLogin = async (showError: boolean) => {
    handleLogin(signInWithBio, showError);
  };

  useEffect(() => {
    handleBioLogin(false);
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar hidden />
      <SafeAreaView style={styles.header} edges={["top"]}>
        <View style={styles.langWrapper}>
          <ButtonChangeIP />
          <ButtonLang />
        </View>
        <Image
          source={require("@/assets/images/logo_vnu_color.png")}
          style={{ height: space(124), aspectRatio: 2 }}
          resizeMode="contain"
        />
        <Image
          source={require("@/assets/images/login_main.png")}
          style={{ height: space(350), marginBottom: -space(16) }}
          resizeMode="contain"
        />
      </SafeAreaView>

      <SafeAreaView edges={["bottom"]} style={styles.content}>
        <View style={styles.mainOptions}>
          <AtButtonBox
            title="Google"
            expandable
            icon={GoogleIcon}
            onPress={handleGoogleLogin}
            disabled={isLoading}
            widthFull
          />
          <AtButtonBox
            title="QR code"
            expandable
            icon={QRIcon}
            disabled={isLoading}
            widthFull
            onPress={navigateToQRLogin}
          />

          <TouchableOpacity style={styles.touchBtn} onPress={() => handleBioLogin(true)}>
            <Icon.FingerprintIcon size={Space.lg} color={COLOR.text} stroke={2} />
          </TouchableOpacity>

          <AtButtonLink title={t("try_other_way")} onPress={showModal} />
          <Text style={styles.helper}>{t("login_helper")}</Text>
        </View>
      </SafeAreaView>

      <AtBottomSheet ref={bottomSheetModalRef}>
        <View style={styles.bsContent}>
          <Text style={Styles.text}>{t("alternate_login_helper")}</Text>
          <AtButtonBox
            title={t("using_password")}
            icon={Icon.PasswordIcon}
            expandable
            color="yellow"
            onPress={navigateToPassLogin}
          />
          <AtButtonBox
            title={t("using_NFC")}
            icon={Icon.NfcIcon}
            expandable
            color="yellow"
            onPress={navigateToNfcLogin}
          />
        </View>
      </AtBottomSheet>
    </GestureHandlerRootView>
  );
}

export const styles = StyleSheet.create({
  langWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    paddingHorizontal: Space.sd,
    gap: Space.sm,
  },

  touchBtn: {
    padding: space(12),
    borderWidth: space(2),
    borderColor: COLOR.text,
    borderRadius: space(999),
  },

  container: {
    backgroundColor: COLOR.background,
    flex: 1,
    position: "relative",
  },

  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    flexGrow: 1,
  },

  content: {
    backgroundColor: COLOR.backgroundBox,
    borderRadius: space(40),

    position: "absolute",
    bottom: 0,
    left: 0,
  },

  mainOptions: {
    ...Styles.content,
    alignItems: "center",
    marginBottom: space(20),
  },

  bsContent: {
    ...Styles.content,
    gap: space(20),
    padding: Space.sd,
  },
  helper: {
    ...Styles.helperText,
    textAlign: "center",
  },
});
