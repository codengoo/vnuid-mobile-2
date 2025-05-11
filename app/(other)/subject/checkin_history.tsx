import { AtChip } from "@/components";
import { fontSize, space, Styles } from "@/constants";
import { StyleSheet, Text, View } from "react-native";

export default function CheckinStoryScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardText}>Công nghệ phần mềm</Text>
        <View style={{ gap: space(8), flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.cardText2}>Checkin 7:00</Text>
          <AtChip label="07:00:00 12/05/2025" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Styles.container,
    gap: space(8),
  },

  card: {
    ...Styles.section,
    padding: space(8),
    paddingHorizontal: space(12),
    alignItems: "flex-start",
    borderRadius: space(14),
    gap: space(8),
  },

  cardText: {
    ...Styles.sectionText,
    fontSize: fontSize(20),
  },

  cardText2: {
    ...Styles.text,
    fontSize: fontSize(16),
    fontWeight: "500",
  },
});
