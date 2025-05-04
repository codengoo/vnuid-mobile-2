import { space } from '@/constants';
import Svg, { Path } from 'react-native-svg';
import { IIconProp } from './type';

export function PasswordIcon({
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
      <Path d="M12 10v4M10 13l4-2M10 11l4 2M5 10v4M3 13l4-2M3 11l4 2M19 10v4M17 13l4-2M17 11l4 2" />
    </Svg>
  );
}
