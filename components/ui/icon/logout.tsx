import { space } from '@/constants';
import Svg, { Path } from 'react-native-svg';
import { IIconProp } from './type';

export function LogoutIcon({
  color = 'black',
  size = space(24),
  stroke = 1.5,
}: IIconProp) {
  return (
    <Svg fill={color} height={size} width={size} viewBox="0 0 24 24">
      <Path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
      <Path d="M16 17L21 12 16 7" />
      <Path d="M21 12L9 12" />
    </Svg>
  );
}
