import { space, Styles } from "@/constants";
import { StyleSheet, View } from "react-native";

export default function SubjectList() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    ...Styles.container,
    gap: space(8),
  },
});
