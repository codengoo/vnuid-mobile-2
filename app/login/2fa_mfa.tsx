import { AtInput, Icon } from "@/components";
import { LoginContentLayout, LoginDecoratorLayout, LoginLayout } from "@/components/layout";
import { space } from "@/constants";
import { useUser } from "@/context";
import { handleLoginBase, signInWithCode2Fa } from "@/helpers/login";
import { HeaderLogin, LoginSave } from "@/screens/login";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Image } from "react-native";

export default function LoginCode2faScreen() {
  const [code, setCode] = useState("");
  const [isSave, setSave] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { setUser } = useUser();
  const { t } = useTranslation("login");

  const handleLogin = async () => {
    await handleLoginBase(() => signInWithCode2Fa(code, isSave), setLoading, setUser, t, true);
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
        <AtInput
          icon={Icon.PasswordIcon}
          placeholder="Ma code"
          onEnter={handleLogin}
          setValue={setCode}
          value={code}
          mode="text"
        />

        <LoginSave isSave={isSave} setSave={setSave} />
      </LoginContentLayout>
    </LoginLayout>
  );
}
