import { Colors, space, Styles } from "@/constants";
import { StyleSheet, Text, View } from "react-native";
import { AtCamera } from "../camera";

export function CameraScanQr() {
  return (
    <AtCamera position="back">
      <View style={styles.squareFrame} />
      <Text style={styles.instructionText}>Align QR code in the box</Text>
    </AtCamera>
  );
}

const styles = StyleSheet.create({
  squareFrame: {
    width: space(250),
    height: space(250),
    borderWidth: space(2),
    borderColor: Colors.white,
    borderRadius: space(20),
    boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.7)",
  },
  instructionText: {
    ...Styles.text,
    color: Colors.white,
    marginTop: space(16),
  },
});
