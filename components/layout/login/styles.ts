import { COLOR, space, Space } from '@/constants';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.background,
    flex: 1,
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
  },

  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: Space.sl,
  },

  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },

  content_body: {
    backgroundColor: COLOR.backgroundBox,
    borderRadius: space(40),
    display: 'flex',
    padding: space(40),
    gap: Space.xl,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: Space.md,
  },
});
