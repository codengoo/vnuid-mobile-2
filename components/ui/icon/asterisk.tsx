import { space } from '@/constants';
import Svg, { Path, Rect } from 'react-native-svg';
import { IIconProp } from './type';

export function AsteriskIcon({
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
      <Rect width={18} height={18} x={3} y={3} rx={2} />
      <Path d="M12 8v8M8.5 14l7-4M8.5 10l7 4" />
    </Svg>
  );
}
