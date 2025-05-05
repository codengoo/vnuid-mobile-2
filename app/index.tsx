import { AtButtonBox, Icon } from "@/components";
import { COLOR, Colors, Space, space, Styles } from "@/constants";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Onboarding() {
  const { t } = useTranslation("onboard");

  const handlePressLogin = () => {
    router.push("/login");
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
            <Icon.LoginIcon size={space(18)} color={COLOR.text} stroke={2.5} />
            <Icon.HomeIcon size={space(18)} color={COLOR.text} stroke={2.5} />
          </View>

          <View style={styles.intro}>
            <Text style={Styles.appText}>Attendance</Text>
            <Text style={styles.descriptionText}>{t("description")}</Text>
          </View>
        </View>

        <AtButtonBox
          onPress={handlePressLogin}
          title="Login to start"
          center
          color="green"
        />
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
    ...Styles.content,
    flex: 1,
    padding: Space.md,
    paddingBottom: Space.sl,
  },

  intro: {
    display: "flex",
    flexDirection: "column",
    gap: Space.sm,
    padding: Space.xl,
  },

  dot: {
    backgroundColor: Colors.yellow500,
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
    ...Styles.center,
    backgroundColor: COLOR.backgroundBox,
    height: "50%",
    borderBottomEndRadius: space(60),
    overflow: "hidden",
  },

  descriptionText: {
    ...Styles.subText,
  },
});
