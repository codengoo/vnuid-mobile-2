import { space, Styles } from "@/constants";
import { StyleSheet, View } from "react-native";

export default function StudentList() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    ...Styles.container,
    gap: space(8),
  },
});
