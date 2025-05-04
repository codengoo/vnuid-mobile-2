import { space } from '@/constants';
import Svg, { Circle, Path } from 'react-native-svg';
import { IIconProp } from './type';

export function EyeOpenIcon({
  color = 'black',
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
      strokeWidth={stroke}>
      <Path d="M2.062 12.348a1 1 0 010-.696 10.75 10.75 0 0119.876 0 1 1 0 010 .696 10.75 10.75 0 01-19.876 0" />
      <Circle cx={12} cy={12} r={3} />
    </Svg>
  );
}
