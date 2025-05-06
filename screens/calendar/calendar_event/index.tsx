import { Colors, space } from '@/constants';
import { Text, View } from 'react-native';

export function CalendarEvent() {
  return (
    <View
      style={{
        borderLeftWidth: space(2),
        borderLeftColor: Colors.yellow900,
        paddingLeft: space(20),
      }}>
      <View
        style={{
          height: space(100),
          padding: space(12),
          backgroundColor: Colors.yellow200,
          width: '100%',
          borderRadius: space(8),
        }}>
        <Text>anasd</Text>
      </View>
    </View>
  );
}
