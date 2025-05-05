import { TabBarVisibilityProvider } from "@/context";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <TabBarVisibilityProvider>
      <Tabs screenOptions={{ headerShown: false, headerTransparent: true }}>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
          }}
        />
      </Tabs>
    </TabBarVisibilityProvider>
  );
}
