import { space } from "@/constants";
import Svg, { Circle, Path } from "react-native-svg";
import { IIconProp } from "./type";

export function EarthIcon({ color = "black", size = space(24), stroke = 1.5 }: IIconProp) {
  return (
    <Svg
      fill="none"
      height={size}
      width={size}
      viewBox="0 0 24 24"
      stroke={color}
      strokeWidth={stroke}
    >
      <Path d="M21.54 15H17a2 2 0 00-2 2v4.54M7 3.34V5a3 3 0 003 3 2 2 0 012 2c0 1.1.9 2 2 2a2 2 0 002-2c0-1.1.9-2 2-2h3.17M11 21.95V18a2 2 0 00-2-2 2 2 0 01-2-2v-1a2 2 0 00-2-2H2.05" />
      <Circle cx={12} cy={12} r={10} />
    </Svg>
  );
}
