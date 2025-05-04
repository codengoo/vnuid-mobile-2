import { StyleSheet } from "react-native";
import { COLOR } from "./colors";
import { FontFamily, FontSize } from "./font";

export const Styles = StyleSheet.create({
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.Prompt,
    color: COLOR.textSub,
    textAlign: "center",
  },

  header: {
    textAlign: "center",
    color: COLOR.text,
    fontFamily: FontFamily.Prompt,
  },
});
