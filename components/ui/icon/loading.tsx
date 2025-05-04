import { space } from '@/constants';
import Svg, { Path } from 'react-native-svg';
import { IIconProp } from './type';

export function LoadingIcon({
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
      <Path d="M21 12a9 9 0 11-6.219-8.56" />
    </Svg>
  );
}
