import { space } from "@/constants";
import Svg, { Circle, Path } from "react-native-svg";
import { IIconProp } from "./type";

export function InfoIcon({
  color = "black",
  size = space(24),
  stroke = 1.5,
}: IIconProp) {
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
      <Path d="M12 16v-4M12 8h.01" />
    </Svg>
  );
}
