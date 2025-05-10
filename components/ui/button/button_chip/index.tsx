import { Colors, fontSize, space, Styles } from "@/constants";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ChevronRightIcon } from "../../icon";

interface IButtonChipProps {
  label: string;
  onPress?: () => void;
}

export function ButtonChip({ label, onPress }: IButtonChipProps) {
  return (
    <TouchableOpacity style={{ flexDirection: "row" }}>
      <View style={styles.container}>
        <Text style={styles.text}>{label}</Text>
        <ChevronRightIcon size={20} color={Colors.white} stroke={2} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: space(4),
    backgroundColor: Colors.black700,
    borderRadius: space(99),
    padding: space(8),
    paddingHorizontal: space(16),
  },

  text: {
    ...Styles.text,
    color: Colors.white,
    fontSize: fontSize(14),
  },
});
