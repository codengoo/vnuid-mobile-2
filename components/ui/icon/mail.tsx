import { space } from '@/constants';
import Svg, { Path, Rect } from 'react-native-svg';
import { IIconProp } from './type';

export function MailIcon({
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
      <Rect width={20} height={16} x={2} y={4} rx={2} />
      <Path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
    </Svg>
  );
}
