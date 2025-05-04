import { space } from '@/constants';
import Svg, { Circle, Path } from 'react-native-svg';
import { IIconProp } from './type';

export function UserIcon({
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
      <Path d="M18 20a6 6 0 00-12 0" />
      <Circle cx={12} cy={10} r={4} />
      <Circle cx={12} cy={12} r={10} />
    </Svg>
  );
}
