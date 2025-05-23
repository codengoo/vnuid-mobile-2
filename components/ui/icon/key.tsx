import { space } from '@/constants';
import Svg, { Circle, Path } from 'react-native-svg';
import { IIconProp } from './type';

export function KeyIcon({
  color = 'black',
  size = space(24),
  stroke = 1.5,
}: IIconProp) {
  return (
    <Svg fill={color} height={size} width={size} viewBox="0 0 24 24">
      <Path d="M2.586 17.414A2 2 0 002 18.828V21a1 1 0 001 1h3a1 1 0 001-1v-1a1 1 0 011-1h1a1 1 0 001-1v-1a1 1 0 011-1h.172a2 2 0 001.414-.586l.814-.814a6.5 6.5 0 10-4-4z" />
      <Circle cx={16.5} cy={7.5} r={0.5} fill="currentColor" />
    </Svg>
  );
}
