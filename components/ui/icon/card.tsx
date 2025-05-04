import { space } from '@/constants';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import { IIconProp } from './type';

export function CardIcon({
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
      <Path d="M16 10h2M16 14h2M6.17 15a3 3 0 015.66 0" />
      <Circle cx={9} cy={11} r={2} />
      <Rect x={2} y={5} width={20} height={14} rx={2} />
    </Svg>
  );
}
