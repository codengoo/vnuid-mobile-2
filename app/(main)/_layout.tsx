import { BottomTabbar, Icon } from "@/components";
import { TabBarVisibilityProvider } from "@/context";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <TabBarVisibilityProvider>
      <Tabs
        tabBar={(props) => <BottomTabbar {...props} />}
        screenOptions={{ headerShown: false, headerTransparent: true }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: ({ color }) => (
              <Icon.HomeIcon color={color} size={32} stroke={1.75} />
            ),
          }}
        />

        <Tabs.Screen
          name="checkin"
          options={{
            tabBarIcon: ({ color }) => (
              <Icon.FingerprintIcon color={color} size={32} stroke={1.75} />
            ),
          }}
        />

        <Tabs.Screen
          name="calendar"
          options={{
            tabBarIcon: ({ color }) => (
              <Icon.LineIcon color={color} size={32} stroke={1.75} />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color }) => (
              <Icon.UserIcon color={color} size={32} stroke={1.75} />
            ),
          }}
        />
      </Tabs>
    </TabBarVisibilityProvider>
  );
}
