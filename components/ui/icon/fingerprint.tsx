import { space } from '@/constants';
import Svg, { Path } from 'react-native-svg';
import { IIconProp } from './type';

export function FingerprintIcon({
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
       <Path d="M12 10a2 2 0 00-2 2c0 1.02-.1 2.51-.26 4M14 13.12c0 2.38 0 6.38-1 8.88M17.29 21.02c.12-.6.43-2.3.5-3.02M2 12a10 10 0 0118-6M2 16h.01M21.8 16c.2-2 .131-5.354 0-6" />
      <Path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 01.34-2M8.65 22c.21-.66.45-1.32.57-2M9 6.8a6 6 0 019 5.2v2" />
    </Svg>
  );
}
