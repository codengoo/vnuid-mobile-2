import { Colors, space, Space } from '@/constants';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: Space.sm,
    alignItems: 'center',
    backgroundColor: Colors.green200,
    padding: space(4),
    borderRadius: space(99),
  },

  flagWrapper: {
    width: space(24),
    height: space(24),
    borderRadius: space(20),
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
