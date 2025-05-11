import { AtButtonBox, AtButtonLink, Icon } from "@/components";
import { LoginContentLayout, LoginDecoratorLayout, LoginLayout } from "@/components/layout/login";
import { COLOR, space, Styles } from "@/constants";
import { HeaderLogin } from "@/screens/login";
import { StaticScreenProps } from "@react-navigation/native";
import { router, useLocalSearchParams } from "expo-router";
import { useTranslation } from "react-i18next";
import { Image, StyleSheet, Text, View } from "react-native";

type Props = StaticScreenProps<{
  token: string;
  allowMethods: string[];
}>;

export default function Login2FaScreen({ route }: Props) {
  const args = useLocalSearchParams();
  const { t } = useTranslation("login");
  const token = args["token"] as string;
  const allowMethods = (args["allowMethods"] as string).split(",");

  return (
    <LoginLayout>
      <LoginDecoratorLayout>
        <HeaderLogin />
        <Image
          source={require("@/assets/images/login_2fa.png")}
          style={{ height: space(350), aspectRatio: 1 }}
          resizeMode="contain"
        />
      </LoginDecoratorLayout>

      <LoginContentLayout>
        <View>
          <Text style={Styles.centerText}>
            We cannot recognize your current device, so we need one more challenge to verify it's
            you.
          </Text>
        </View>

        {allowMethods.length === 0 ? (
          <View style={styles.wrapperSection}>
            <Text style={Styles.centerText}>
              Sorry, but you can not login right now, please try other ways
            </Text>
          </View>
        ) : null}

        <View style={styles.actionWrapper}>
          {allowMethods.includes("qr") && (
            <AtButtonBox title="Scan QR code" color="yellow" icon={Icon.QRIcon} widthFull />
          )}

          {allowMethods.includes("nfc") && (
            <AtButtonBox
              title="Scan NFC"
              color="yellow"
              icon={Icon.CardIcon}
              widthFull
              onPress={() => router.push({ pathname: "/login/2fa_nfc" })}
            />
          )}

          {allowMethods.includes("otp") && (
            <AtButtonBox title="Enter MFA code" color="yellow" icon={Icon.AsteriskIcon} widthFull />
          )}

          {allowMethods.includes("pass") && (
            <AtButtonBox
              title="Enter password"
              color="yellow"
              icon={Icon.PasswordIcon}
              widthFull
              onPress={() => router.push({ pathname: "/login/2fa_pass" })}
            />
          )}

          {allowMethods.includes("code") ? (
            <AtButtonBox
              title="Enter in-app code"
              color="yellow"
              widthFull
              icon={Icon.NumberIcon}
              //   onPress={() => navigate("LoginCode2Fa")}
            />
          ) : null}

          {allowMethods.length === 0 && (
            <AtButtonLink title="Go back" onPress={() => router.back()} />
          )}
        </View>
      </LoginContentLayout>
    </LoginLayout>
  );
}

export const styles = StyleSheet.create({
  actionWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: space(8),
  },

  wrapperSection: {
    backgroundColor: COLOR.backgroundBoxHighlight,
    padding: space(16),
    borderRadius: space(12),
    borderWidth: space(2),
    borderColor: COLOR.borderButton,
    borderStyle: "dashed",
    width: "100%",
  },
});
