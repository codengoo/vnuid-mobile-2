import { Colors, space, Styles } from "@/constants";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ICalendarDayProps {
  active?: boolean;
  date?: Date;
  text1: string;
  text2: string;
  width?: number;
  onPress?: () => void;
}
export function CalendarDay({ active, text1, text2, width, onPress }: ICalendarDayProps) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        width !== undefined && { width },
        active && { borderColor: Colors.green300 },
      ]}
      onPress={onPress}
    >
      <Text style={[Styles.subText, active && { color: Colors.green300 }]}>{text1}</Text>
      <Text style={[styles.text, active && { color: Colors.green300 }]}>{text2}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    padding: space(4),
    paddingHorizontal: space(8),
    borderBottomWidth: space(2),
    borderColor: "transparent",
  },

  text: {
    ...Styles.text,
    fontWeight: "600",
  },
});
