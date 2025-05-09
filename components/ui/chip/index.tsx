import { Colors, fontSize, space, Styles } from "@/constants";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface IAtChipProps {
  onPress?: () => void;
  label: string;
}

export function AtChip({ onPress, label }: IAtChipProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: space(4),
    paddingHorizontal: space(12),
    backgroundColor: Colors.green300,
    borderRadius: space(99),
    marginTop: space(8),
  },
  text: {
    ...Styles.text,
    fontSize: fontSize(14),
  },
});
