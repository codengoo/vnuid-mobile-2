import { StyleSheet } from "react-native";
import { COLOR } from "./colors";
import { FontFamily, FontSize } from "./font";
import { Space, space } from "./space";

const TextStyle = StyleSheet.create({
  text: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.Prompt,
    color: COLOR.text,
    textAlign: "center",
  },
});

export const Styles = StyleSheet.create({
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    ...TextStyle.text,
  },

  subText: {
    ...TextStyle.text,
    color: COLOR.textSub,
  },

  helperText: {
    ...TextStyle.text,
    fontSize: FontSize.sm,
  },

  headerText: {
    textAlign: "center",
    color: COLOR.text,
    fontFamily: FontFamily.Prompt,
  },

  content: {
    display: "flex",
    padding: space(40),
    flexDirection: "column",
    justifyContent: "space-between",
    gap: Space.lg,
  },
});
