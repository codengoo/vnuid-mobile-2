import { space } from "@/constants";
import Svg, { Circle, Path } from "react-native-svg";
import { IIconProp } from "./type";

export function CircleCheckIcon({ color = "black", size = space(24), stroke = 1.5 }: IIconProp) {
  return (
    <Svg
      fill="none"
      height={size}
      width={size}
      viewBox="0 0 24 24"
      stroke={color}
      strokeWidth={stroke}
    >
      <Circle cx={12} cy={12} r={10} />
      <Path d="M9 12l2 2 4-4" />
    </Svg>
  );
}
