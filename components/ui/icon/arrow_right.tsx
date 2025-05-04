import { space } from '@/constants';
import Svg, { Path } from 'react-native-svg';
import { IIconProp } from './type';

export function ArrowRightIcon({
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
      <Path d="M18 8l4 4-4 4M2 12h20" />
    </Svg>
  );
}
