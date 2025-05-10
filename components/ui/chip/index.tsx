import { Colors, fontSize, space, Styles } from "@/constants";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface IAtChipProps {
  onPress?: () => void;
  label: string;
  color?: "green" | "yellow" | "gray";
}

export function AtChip({ onPress, label, color = "green" }: IAtChipProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        color === "green" && { backgroundColor: Colors.green300 },
        color === "gray" && { backgroundColor: Colors.black100 },
        color === "yellow" && { backgroundColor: Colors.yellow300 },
      ]}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: space(4),
    paddingHorizontal: space(12),
    borderRadius: space(99),
  },
  text: {
    ...Styles.text,
    fontSize: fontSize(14),
  },
});
