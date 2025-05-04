import { space } from '@/constants';
import Svg, { Path } from 'react-native-svg';
import { IIconProp } from './type';

export function QRIcon({
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
      <Path d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1zM7 17v.01M14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1zM7 7v.01M4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1zM17 7v.01M14 14h3M20 14v.01M14 14v3M14 20h3M17 17h3M20 17v3" />
    </Svg>
  );
}
