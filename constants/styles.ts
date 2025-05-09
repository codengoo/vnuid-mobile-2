import { StyleSheet } from "react-native";
import { COLOR, Colors } from "./colors";
import { FontFamily, fontSize, FontSize } from "./font";
import { Space, space } from "./space";

const TextStyle = StyleSheet.create({
  text: {
    fontSize: FontSize.md,
    fontFamily: FontFamily.Prompt,
    color: COLOR.text,
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

  sectionText: {
    ...TextStyle.text,
    fontSize: FontSize.sl,
    fontWeight: "600",
  },

  appText: {
    ...TextStyle.text,
    fontSize: fontSize(36),
    textAlign: "center",
    fontWeight: "600",
    fontFamily: FontFamily.Lobster,
  },

  content: {
    display: "flex",
    padding: space(40),
    flexDirection: "column",
    justifyContent: "space-between",
    gap: Space.lg,
  },

  section: {
    backgroundColor: Colors.yellow400,
    borderRadius: space(20),
    padding: space(20),
    borderColor: Colors.black700,
    borderWidth: space(2),
    flexDirection: "column",
    alignItems: "center",
    gap: space(12),
  },

  container: {
    flex: 1,
    padding: space(20),
    justifyContent: "flex-start",
    gap: space(36),
    backgroundColor: Colors.yellow100,
  },
});
