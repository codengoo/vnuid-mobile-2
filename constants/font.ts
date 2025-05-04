import { Dimensions } from "react-native";

const { fontScale, scale } = Dimensions.get("screen");

export const fontSize = (fontSize: number) =>
  ((fontSize / fontScale) * 3) / scale;

export const FontSize = {
  xs: fontSize(8),
  sm: fontSize(12),
  md: fontSize(16),
  lg: fontSize(20),
  xl: fontSize(24),
  sl: fontSize(28),
};

export const FontFamily = {
  Lobster: "Lobster",
  Prompt: "Prompt",
};

const FONT = {
  title: {},
};
