import { space } from '@/constants';
import Svg, { Path } from 'react-native-svg';
import { IIconProp } from './type';

export function GoogleIcon({
  color = 'black',
  size = space(24),
  stroke = 1.5,
}: IIconProp) {
  return (
    <Svg fill={color} height={size} width={size} viewBox="0 0 24 24">
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path d="M12 2a9.96 9.96 0 016.29 2.226 1 1 0 01.04 1.52l-1.51 1.362a1 1 0 01-1.265.06 6 6 0 102.103 6.836l.001-.004h-3.66a1 1 0 01-.992-.883L13 13v-2a1 1 0 011-1h6.945a1 1 0 01.994.89c.04.367.061.737.061 1.11 0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" />
    </Svg>
  );
}
