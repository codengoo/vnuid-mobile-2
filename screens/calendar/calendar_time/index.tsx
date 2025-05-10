import { space, Styles } from "@/constants";
import { StyleSheet, Text, View } from "react-native";

interface ICalendarTimeStoneProps {
  label: string;
}
export function CalendarTimeStone({ label }: ICalendarTimeStoneProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    ...Styles.subText,
    fontSize: space(12),
  },

  container: {
    height: space(70),
  }
});
