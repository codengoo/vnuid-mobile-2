import { Colors, space, Styles } from '@/constants';
import { useEffect } from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { Icon } from '../ui';

export function AtLoading() {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 1000,
        easing: Easing.linear,
      }),
      -1, // infinite loop
      false, // no reverse
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rotation.value}deg`}],
    };
  }, [rotation]);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Image
        source={require('@/assets/images/illus_wait.png')}
        style={styles.illus}
      />
      <View style={styles.loading}>
        <Animated.View style={[animatedStyle]}>
          <Icon.LoadingIcon stroke={2} size={20} />
        </Animated.View>
        <Text style={Styles.text}>Loading...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.yellow100,
    flexDirection: 'column',
    gap: space(12),
    padding: space(32),
  },

  illus: {
    width: '100%',
    objectFit: 'scale-down',
    maxHeight: '40%',
  },

  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: space(12),
  },
});
