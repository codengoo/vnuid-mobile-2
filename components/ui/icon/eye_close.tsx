import { space } from '@/constants';
import Svg, { Path } from 'react-native-svg';
import { IIconProp } from './type';

export function EyeCloseIcon({
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
      <Path d="M15 18l-.722-3.25M2 8a10.645 10.645 0 0020 0M20 15l-1.726-2.05M4 15l1.726-2.05M9 18l.722-3.25" />
    </Svg>
  );
}
