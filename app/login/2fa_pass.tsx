import { AtInput, Icon } from "@/components";
import { LoginContentLayout, LoginDecoratorLayout, LoginLayout } from "@/components/layout";
import { space } from "@/constants";
import { useUser } from "@/context";
import { handleLoginBase, signInWith2FaPass } from "@/helpers/login";
import { HeaderLogin, LoginSave, LoginSection } from "@/screens/login";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Image, StyleSheet, View } from "react-native";

export default function LoginPass2FaScreen() {
  const [password, setPassword] = useState("");
  const [isSave, setSave] = useState(false);
  const { t } = useTranslation("login");
  const { setUser } = useUser();
  const [isLoading, setLoading] = useState(false);

  const handleLogin = async () => {
    await handleLoginBase(()=>signInWith2FaPass(password, isSave), setLoading, setUser, t, true);
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
            onEnter={handleLogin}
            setValue={setPassword}
            value={password}
            mode="password"
          />

          <LoginSave isSave={isSave} setSave={setSave} />
        </View>

        <LoginSection handleLogin={handleLogin} isLoading={isLoading} />
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
