import {Dimensions} from 'react-native';

const {scale} = Dimensions.get('screen');

export const space = (space: number) => (space * 3) / scale; // 3 is standard scale

export const Space = {
  xs: space(4),
  sm: space(8),
  md: space(12),
  sd: space(16),
  lg: space(24),
  xl: space(32),
  sl: space(40),
};

export const SPACE = {
  
}