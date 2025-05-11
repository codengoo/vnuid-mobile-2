import { AtInput, Icon } from "@/components";
import { LoginContentLayout, LoginDecoratorLayout, LoginLayout } from "@/components/layout";
import { AtCheckbox } from "@/components/ui/checkbox";
import { space } from "@/constants";
import { signInWith2FaPass } from "@/helpers/login";
import { HeaderLogin, LoginSection } from "@/screens/login";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Image, StyleSheet, View } from "react-native";
import Toast from "react-native-toast-message";

export default function LoginPass2FaScreen() {
  const [password, setPassword] = useState("");
  const [isSave, setSave] = useState(false);
  const { t } = useTranslation("login");
  const [isLoading, setLoading] = useState(false);

  const handleSignin = async () => {
    try {
      setLoading(true);
      await signInWith2FaPass(password, isSave);
    } catch (error) {
      Toast.show({
        type: "error",
        text1: t("toast_failed"),
        text2: t("toast_failed_description"),
        autoHide: true,
      });
    } finally {
      setLoading(false);
      setPassword("");
    }
  };

  return (
    <LoginLayout>
      <LoginDecoratorLayout>
        <HeaderLogin />
        <Image
          source={require("@/assets/images/login_pass.png")}
          style={{ height: space(350), aspectRatio: 1 }}
          resizeMode="contain"
        />
      </LoginDecoratorLayout>
      <LoginContentLayout>
        <View style={styles.container}>
          <AtInput
            icon={Icon.PasswordIcon}
            placeholder="***"
            onEnter={handleSignin}
            setValue={setPassword}
            value={password}
            mode="password"
          />

          <View
            style={{
              flex: 1,
              width: "100%",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: space(4),
            }}
          >
            <AtCheckbox checked={isSave} setValue={setSave} label="Save device" />
          </View>
        </View>

        <LoginSection handleLogin={handleSignin} isLoading={isLoading} />
      </LoginContentLayout>
    </LoginLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    gap: space(8),
    alignItems: "center",
  },
});
