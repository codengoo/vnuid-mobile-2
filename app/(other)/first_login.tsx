import { AtAvatar, AtButtonBox, AtButtonLink } from "@/components";
import { Colors, FontFamily, fontSize, space } from "@/constants";
import { router } from "expo-router";

import { StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FirstLoginScreen() {
  const navigateToRegister = () => router.navigate("/register_face");
  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <StatusBar hidden />

      <View style={{ gap: space(20) }}>
        <View style={styles.header}>
          <AtAvatar shape="circle" size={128} isPadding borderSize={4} />

          <View style={styles.description}>
            <Text style={styles.welcome}>Welcome</Text>
            <Text style={styles.name}>Do Tuan Nghia</Text>
          </View>
        </View>

        <View style={styles.note}>
          <Text style={styles.note_text}>
            Be aware that, you only can register one time and will be use this face to verify later.
            But if your face change so much in the future so that our app cannot recognize you or
            frequently encounter facial recognition errors, you can contact the admin to and
            re-register your face.
          </Text>
        </View>
      </View>

      <View style={{ gap: space(12), alignItems: "center" }}>
        <AtButtonBox
          title="Register face"
          color="yellow"
          center
          widthFull
          onPress={navigateToRegister}
        />

        <AtButtonLink title="Admin contact" onPress={() => router.navigate("/admin_contact")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.yellow100,
    padding: space(20),
    justifyContent: "space-between",
  },

  header: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: space(8),
  },

  name: {
    fontFamily: FontFamily.Lobster,
    fontSize: fontSize(32),
  },

  welcome: {
    fontFamily: FontFamily.Prompt,
  },

  description: {
    alignItems: "center",
  },

  note: {
    padding: space(16),
    backgroundColor: Colors.green100,
    borderRadius: space(16),
    borderWidth: space(2),
    borderColor: Colors.green300,
  },

  note_text: {
    fontFamily: FontFamily.Prompt,
    fontSize: fontSize(14),
    textAlign: "justify",
  },
});
