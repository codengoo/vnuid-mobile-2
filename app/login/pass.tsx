import { AtInput, Icon } from "@/components";
import { LoginContentLayout, LoginDecoratorLayout, LoginLayout } from "@/components/layout";
import { space } from "@/constants";
import { useUser } from "@/context";
import { handleLoginBase, signInWithPass } from "@/helpers/login";
import { HeaderLogin, LoginForm, LoginSave, LoginSection } from "@/screens/login";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Image } from "react-native";

export default function LoginPassScreen() {
  const { t } = useTranslation("login");
  const { setUser } = useUser();
  const [uid, setUid] = useState("");
  const [password, setPassword] = useState("");
  const [isSave, setSave] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleLogin = () => {
    handleLoginBase(() => signInWithPass(uid, password), setLoading, setUser, t, true);
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
        <LoginForm description="Type your username and password to continue">
          <AtInput
            icon={Icon.NumberIcon}
            placeholder="21020365"
            value={uid}
            setValue={setUid}
            mode="numeric"
          />
          <AtInput
            icon={Icon.PasswordIcon}
            placeholder="***"
            value={password}
            setValue={setPassword}
            mode="password"
          />

          <LoginSave isSave={isSave} setSave={setSave} />
        </LoginForm>
        <LoginSection handleLogin={handleLogin} isLoading={isLoading} />
      </LoginContentLayout>
    </LoginLayout>
  );
}
