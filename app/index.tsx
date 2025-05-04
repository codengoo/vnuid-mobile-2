import { AtButtonBox } from "@/components";
import {
  COLOR,
  Colors,
  FontFamily,
  fontSize,
  Space,
  space,
  Styles,
} from "@/constants";
import { FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Onboarding() {
  const { t } = useTranslation("onboard");

  const handlePressLogin = () => {
    router.push("/");
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
            <FontAwesome6
              name="arrow-right-to-bracket"
              size={Space.sd}
              color={COLOR.text}
            />
            <FontAwesome6
              name="fingerprint"
              size={Space.sd}
              color={COLOR.text}
            />
          </View>

          <View style={styles.intro}>
            <Text style={styles.titleText}>Attendance</Text>
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
    flex: 1,
    padding: Space.md,
    paddingTop: Space.md,
    paddingBottom: Space.sl,
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

  titleText: {
    ...Styles.header,
    fontSize: fontSize(40),
    fontFamily: FontFamily.Lobster,
  },

  descriptionText: {
    ...Styles.text,
  },
});
