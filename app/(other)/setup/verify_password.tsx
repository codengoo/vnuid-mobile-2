import { AtButtonBox, AtInput, Icon } from "@/components";
import { LoginContentLayout, LoginDecoratorLayout, LoginLayout } from "@/components/layout";
import { FontFamily, space } from "@/constants";
import { checkPass } from "@/helpers/login";
import { Href, router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, Text } from "react-native";
import Toast from "react-native-toast-message";

export default function VerifyPasswordScreen() {
  const { nextScreen } = useLocalSearchParams<{ nextScreen: string }>();
  const [password, setPassword] = useState("");

  const handleCheckPassword = async () => {
    const url = `${nextScreen}?password=${password}`;
    const isValid = await checkPass(password);
    if (isValid) {
      router.navigate(url as Href);
    } else {
      Toast.show({
        type: "error",
        text1: "Failed",
        text2: "Please try again",
        autoHide: true,
      });
      setPassword("");
    }
  };

  return (
    <LoginLayout>
      <LoginDecoratorLayout>
        <Image
          source={require("@/assets/images/login_pass.png")}
          style={{ height: space(350), aspectRatio: 1 }}
          resizeMode="contain"
        />
      </LoginDecoratorLayout>
      <LoginContentLayout>
        <Text
          style={{
            textAlign: "center",
            fontFamily: FontFamily.Prompt,
          }}
        >
          We need to verify your password before continuing
        </Text>
        <AtInput
          icon={Icon.PasswordIcon}
          placeholder="Password"
          onEnter={handleCheckPassword}
          setValue={setPassword}
          value={password}
          mode="password"
        />

        <AtButtonBox
          title="Tiếp tục"
          widthFull
          center
          color="yellow"
          onPress={handleCheckPassword}
        />
      </LoginContentLayout>
    </LoginLayout>
  );
}
