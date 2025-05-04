import { Dimensions } from 'react-native';

const {fontScale, scale} = Dimensions.get('screen');

export const fontSize = (fontSize: number) =>
  ((fontSize / fontScale) * 3) / scale;

export const FontSize = {
  xs: fontSize(8),
  sm: fontSize(12),
  md: fontSize(16),
  lg: fontSize(20),
  xl: fontSize(24),
  sl: fontSize(28),
};

export const FontFamily = {
  Lobster: {
    regular: 'Lobster-Regular',
  },
  Prompt: {
    normal: {
      black: 'Prompt-Black',
      bold: 'Prompt-Bold',
      extraBold: 'Prompt-ExtraBold',
      extraLight: 'Prompt-ExtraLight',
      light: 'Prompt-Light',
      medium: 'Prompt-Medium',
      regular: 'Prompt-Regular',
      semiBold: 'Prompt-SemiBold',
      thin: 'Prompt-Thin',
    },
    italic: {
      black: 'Prompt-BlackItalic',
      bold: 'Prompt-BoldItalic',
      extraBold: 'Prompt-ExtraBoldItalic',
      extraLight: 'Prompt-ExtraLightItalic',
      light: 'Prompt-LightItalic',
      medium: 'Prompt-MediumItalic',
      regular: 'Prompt-Italic',
      semiBold: 'Prompt-SemiBoldItalic',
      thin: 'Prompt-ThinItalic',
    },
  },
};

const FONT = {
  title: {},
};
