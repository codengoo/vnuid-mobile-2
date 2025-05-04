import { COLOR, FontFamily, fontSize } from '@/constants';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  hiText: {
    fontFamily: FontFamily.Prompt.normal.medium,
    fontSize: fontSize(16),
    color: COLOR.text,
  },
  appText: {
    fontFamily: FontFamily.Lobster.regular,
    fontSize: fontSize(32),
    color: COLOR.text,
  },
});
