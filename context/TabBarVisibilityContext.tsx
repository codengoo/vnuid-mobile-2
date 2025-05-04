import React, {createContext, useContext} from 'react';
import {
  SharedValue,
  useAnimatedScrollHandler,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const TabBarVisibilityContext = createContext<{
  translateY: SharedValue<number>;
} | null>(null);

interface ITabBarVisibilityContext {
  children: React.ReactNode;
}

export const TabBarVisibilityProvider = ({
  children,
}: ITabBarVisibilityContext) => {
  const translateY = useSharedValue(0);
  return (
    <TabBarVisibilityContext.Provider value={{translateY}}>
      {children}
    </TabBarVisibilityContext.Provider>
  );
};

export const useTabBarVisibility = () => {
  const context = useContext(TabBarVisibilityContext);
  if (!context) {
    throw new Error(
      'useTabBarVisibility must be used within TabBarVisibilityProvider',
    );
  }
  return context;
};

export const useHideTabBar = () => {
  const positionToHide = 200;
  const {translateY} = useTabBarVisibility();
  const lastScrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      const currentY = event.contentOffset.y;
      const diff = currentY - lastScrollY.value;

      if (diff > 5) {
        // Scroll down: hide
        translateY.value = withTiming(positionToHide, {duration: 300});
      } else if (diff < -5) {
        // Scroll up: show
        translateY.value = withTiming(0, {duration: 300});
      }

      lastScrollY.value = currentY;
    },
  });

  const toggleTabBar = (isShow: boolean) => {
    translateY.value = withTiming(isShow ? 0 : positionToHide, {duration: 300});
  };

  return {scrollHandler, toggleTabBar};
};
