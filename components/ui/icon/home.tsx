import { space } from '@/constants';
import Svg, { Path } from 'react-native-svg';
import { IIconProp } from './type';

export function HomeIcon({
  color = 'black',
  size = space(24),
  stroke = 1.5,
}: IIconProp) {
  return (
    <Svg fill="none" height={size} width={size} viewBox="0 0 24 24">
      <Path
        d="M6.5 7c1.461-1.461 3.093-2.581 4.197-3.26a2.474 2.474 0 012.605 0C14.406 4.42 16.04 5.54 17.5 7c3.168 3.168 3 5 3 8 0 1.41-.11 2.599-.228 3.463-.123.91-.916 1.537-1.834 1.537H17a2 2 0 01-2-2v-2a3 3 0 00-6 0v2a2 2 0 01-2 2H5.562c-.918 0-1.711-.627-1.835-1.537A25.992 25.992 0 013.5 15c0-3-.168-4.832 3-8z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
      />
    </Svg>
  );
}
