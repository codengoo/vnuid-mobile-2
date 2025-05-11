import { ButtonLang } from "@/components";
import { Tagline } from "@/components/common";
import { StyleSheet, View } from "react-native";

export function HeaderLogin() {
  return (
    <View style={styles.container}>
      <Tagline />
      <ButtonLang />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});
