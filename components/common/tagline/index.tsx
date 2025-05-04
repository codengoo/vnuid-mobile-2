import {Text, View} from 'react-native';
import {styles} from './styles';

export function Tagline() {
  return (
    <View style={styles.container}>
      <Text style={styles.hiText}>Welcome to</Text>
      <Text style={styles.appText}>Attendance</Text>
    </View>
  );
}
