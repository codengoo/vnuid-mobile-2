import { space } from '@/constants';
import Svg, { Circle, Path } from 'react-native-svg';
import { IIconProp } from './type';

export function MapIcon({
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
      <Path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 01-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0112 0" />
      <Circle cx={12} cy={8} r={2} />
      <Path d="M8.714 14h-3.71a1 1 0 00-.948.683l-2.004 6A1 1 0 003 22h18a1 1 0 00.948-1.316l-2-6a1 1 0 00-.949-.684h-3.712" />
    </Svg>
  );
}
