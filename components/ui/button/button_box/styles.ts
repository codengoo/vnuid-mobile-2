import { Color, COLOR, FontFamily, FontSize, space, Space } from "@/constants";
import { StyleSheet } from "react-native";

export interface IAtButtonStyle {
  color?: "default" | "yellow" | "green";
  disabled?: boolean;
}

export const style = ({ color = "default", disabled }: IAtButtonStyle) =>
  StyleSheet.create({
    container: {
      opacity: disabled ? 0.5 : 1,
      backgroundColor:
        color === "default"
          ? COLOR.backgroundButton
          : color === "green"
          ? Color.green300
          : COLOR.backgroundButtonHighlight,
      borderRadius: Space.sd,
      borderColor: COLOR.borderButton,
      borderWidth: space(2),
      padding: Space.sd,

      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    widthFull: {
      width: "100%",
    },

    titleWrapper: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: Space.md,
    },

    title: {
      fontFamily: FontFamily.Prompt.normal.semiBold,
      color:
        color === "default"
          ? COLOR.text
          : color === "green"
          ? COLOR.textButton
          : COLOR.text,
      fontSize: FontSize.md,
    },

    center: {
      textAlign: "center",
      justifyContent: "center",
    },
  });
