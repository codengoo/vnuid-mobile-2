import { COLOR, FontFamily, FontSize, Space } from '@/constants';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: Space.sd,
    paddingVertical: Space.sm
  },
  title: {
    fontFamily: FontFamily.Prompt,
    fontWeight: "600",
    color: COLOR.text,
    fontSize: FontSize.md,
  },
});
