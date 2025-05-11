import { AtButtonBox, AtButtonLink, Icon } from "@/components";
import { IIcon } from "@/components/ui/icon";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";

interface IProps {
  isLoading: boolean;
  handleLogin: () => void;
  icon?: IIcon;
  title?: string;
}
export function LoginSection({
  handleLogin,
  isLoading,
  icon = Icon.LoginIcon,
  title = "Login",
}: IProps) {
  const { t } = useTranslation("login");

  return (
    <View style={styles.container}>
      <AtButtonBox
        title={title}
        color="yellow"
        center
        icon={icon}
        onPress={handleLogin}
        disabled={isLoading}
        widthFull
      />
      <AtButtonLink title={t("go_back")} onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
