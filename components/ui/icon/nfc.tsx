import { space } from '@/constants';
import Svg, { Path } from 'react-native-svg';
import { IIconProp } from './type';

export function NfcIcon({
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
      <Path d="M11 20a3 3 0 01-3-3V6l5 5" />
      <Path d="M13 4a3 3 0 013 3v11l-5-5" />
      <Path d="M4 7a3 3 0 013-3h10a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3z" />
    </Svg>
  );
}
