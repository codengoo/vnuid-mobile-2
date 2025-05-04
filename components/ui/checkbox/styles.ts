import { COLOR, FontFamily, fontSize, space } from "@/constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: space(16),
  },
  checkbox: {
    width: space(28),
    height: space(28),
    borderRadius: space(8),
    borderWidth: space(2),
    borderColor: COLOR.borderInput,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOR.background,
  },

  checked: {
    backgroundColor: COLOR.backgroundButtonHighlight,
    borderColor: COLOR.borderInput,
  },

  disabledCheckbox: {
    backgroundColor: "#e0e0e0",
    borderColor: "#ccc",
  },

  label: {
    fontSize: fontSize(16),
    color: COLOR.text,
    flexShrink: 1,
    fontFamily: FontFamily.Prompt,
    fontWeight: "600",
  },

  disabledLabel: {
    color: "#aaa",
  },
});
