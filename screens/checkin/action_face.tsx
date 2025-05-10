import { Colors, space, Styles } from "@/constants";
import { IDirection } from "@/helpers/checkin";
import { StyleSheet, Text, View } from "react-native";

interface IActionFaceProps {
  stage: string;
  dir: IDirection;
}
export function ActionFace({ dir, stage }: IActionFaceProps) {
  return (
    <View style={{ flexDirection: "row", justifyContent:"center" }}>
      <View style={styles.challenge}>
        {stage === "done" ? (
          <Text>Done</Text>
        ) : (
          <View style={styles.wrapper}>
            <Text style={styles.helpText}>Hướng mặt</Text>
            <Text>{dir}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  challenge: {
    marginTop: space(20),
    paddingHorizontal: space(16),
    paddingVertical: space(8),
    borderRadius: space(99),
    backgroundColor: "white",
    borderWidth: space(1),
    borderColor: Colors.black500,
  },

  helpText: {
    ...Styles.text,
    fontSize: space(14),
    fontWeight: "500",
  },

  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: space(8),
  },
});
