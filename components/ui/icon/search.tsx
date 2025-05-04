import { space } from '@/constants';
import Svg, { Circle, Path } from 'react-native-svg';
import { IIconProp } from './type';

export function SearchIcon({
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
       <Circle cx={11} cy={11} r={8} />
       <Path d="M21 21l-4.3-4.3" />
    </Svg>
  );
}
