import { space } from '@/constants';
import Svg, { G, Path } from 'react-native-svg';
import { IIconProp } from './type';

export function LoginIcon({
  color = 'black',
  size = space(24),
  stroke = 1.5,
}: IIconProp) {
  return (
    <Svg fill="none" height={size} width={size} viewBox="0 0 24 24">
      <G
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}>
        <Path d="M14 4h3.5c3.058 0 3 4 3 8s.058 8-3 8H14M15 12H3" />
        <Path d="M11 16l4-4-4-4" />
      </G>
    </Svg>
  );
}
