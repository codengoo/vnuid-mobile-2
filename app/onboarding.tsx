import { Icon } from "@/components";
import { AtButtonBox } from "@/components/ui/button";
import {
  Color,
  COLOR,
  FontFamily,
  FontSize,
  fontSize,
  Space,
  space,
} from "@/constants";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Onboarding() {
  const { t } = useTranslation("onboard");

  const handlePressLogin = () => {
    router.push("/onboarding");
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <SafeAreaView style={styles.header}>
        <Image
          source={require("@/assets/images/onboarding_1.png")}
          style={{ width: "75%" }}
          resizeMode="contain"
        />
      </SafeAreaView>

      <SafeAreaView style={styles.content} edges={["bottom"]}>
        <View>
          <View style={styles.stepWrapper}>
            <View style={styles.dot}></View>
            <Icon.LoginIcon size={Space.sd} stroke={2.5} color={COLOR.text} />
            <Icon.HomeIcon size={Space.sd} stroke={2.5} color={COLOR.text} />
          </View>

          <View style={styles.intro}>
            <Text style={styles.headerText}>Attendance</Text>
            <Text style={styles.bodyText}>{t("description")}</Text>
          </View>
        </View>

        <AtButtonBox onPress={handlePressLogin} title="Login to start" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.background,
    flex: 1,
  },

  content: {
    flex: 1,
    padding: Space.md,
    paddingTop: Space.md,
    paddingBottom: Space.sl,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },

  intro: {
    display: "flex",
    flexDirection: "column",
    gap: Space.sm,
    padding: Space.xl,
  },

  dot: {
    backgroundColor: Color.yellow500,
    height: space(16),
    width: space(40),
    borderRadius: space(16),
  },

  stepWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: Space.sm,
  },

  header: {
    backgroundColor: COLOR.backgroundBox,
    height: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottomEndRadius: space(60),
    overflow: "hidden",
  },

  headerText: {
    fontSize: fontSize(40),
    fontFamily: FontFamily.Lobster.regular,
    textAlign: "center",
    color: COLOR.text,
  },

  bodyText: {
    textAlign: "center",
    fontSize: FontSize.md,
    fontFamily: FontFamily.Prompt.normal.medium,
    color: COLOR.textSub,
  },

  body: {},
});
