import { COLOR, Colors, space } from '@/constants';
import { useTabBarVisibility } from '@/context';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BottomTabbar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const {translateY} = useTabBarVisibility();
  
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
  }));

  return (
    <Animated.View style={[animatedStyle]}>
      <SafeAreaView
        edges={['bottom']}
        style={{
          position: 'absolute',
          bottom: space(48),
          left: 0,
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100%',
        }}>
        <View
          style={{
            backgroundColor: Colors.black700,
            borderRadius: space(99),
            padding: space(12),
            gap: space(16),
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const isFocused = state.index === index;
            const icon = options.tabBarIcon?.({
              focused: isFocused,
              color: isFocused ? COLOR.text : Colors.white,
              size: 24,
            });

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <TouchableOpacity
                onPress={onPress}
                key={route.key}
                style={[
                  {
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: space(99),
                    padding: space(12),
                  },
                  isFocused && {backgroundColor: Colors.white},
                ]}>
                {icon}
              </TouchableOpacity>
            );
          })}
        </View>
      </SafeAreaView>
    </Animated.View>
  );
}
