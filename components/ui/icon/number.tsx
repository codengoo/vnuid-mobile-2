import { space } from '@/constants';
import Svg, { Path } from 'react-native-svg';
import { IIconProp } from './type';

export function NumberIcon({
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
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M3 10l2-2v8M9 8h3a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 00-1 1v2a1 1 0 001 1h3M17 8h2.5A1.5 1.5 0 0121 9.5v1a1.5 1.5 0 01-1.5 1.5H18h1.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5H17" />
    </Svg>
  );
}
