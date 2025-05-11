import { space } from "@/constants";
import Svg, { Path } from "react-native-svg";
import { IIconProp } from "./type";

export function BackpackIcon({ color = "black", size = space(24), stroke = 1.5 }: IIconProp) {
  return (
    <Svg
      fill="none"
      height={size}
      width={size}
      viewBox="0 0 24 24"
      stroke={color}
      strokeWidth={stroke}
    >
      <Path d="M4 10a4 4 0 014-4h8a4 4 0 014 4v10a2 2 0 01-2 2H6a2 2 0 01-2-2zM8 10h8M8 18h8" />
      <Path d="M8 22v-6a2 2 0 012-2h4a2 2 0 012 2v6M9 6V4a2 2 0 012-2h2a2 2 0 012 2v2" />
    </Svg>
  );
}
