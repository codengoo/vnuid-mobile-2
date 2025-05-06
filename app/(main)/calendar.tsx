import { Icon } from "@/components";
import { COLOR, Colors, FontFamily, fontSize, space } from "@/constants";
import { useHideTabBar } from "@/context";
import {
  CalendarDay,
  CalendarEvent,
  CalendarEventPad,
  CalendarTimeStone,
} from "@/screens/calendar";
import { useFocusEffect } from "@react-navigation/native";
import { useEffect } from "react";
import { Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CalendarScreen() {
  const { scrollHandler, toggleTabBar } = useHideTabBar();
  useFocusEffect(() => {
    toggleTabBar(true);
  });

  useEffect(() => {
    console.log("mount");
    return () => console.log("unmount");
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: Colors.green100, flex: 1 }}>
      <View style={{ padding: space(24) }}>
        <Text
          style={{
            fontSize: fontSize(40),
            fontFamily: FontFamily.Prompt,
            lineHeight: space(40),
            color: COLOR.text,
            textTransform: "uppercase",
            letterSpacing: space(1.5),
          }}
        >
          View all your sessions
        </Text>

        <Text
          style={{
            fontSize: fontSize(16),
            color: COLOR.text,
            fontFamily: FontFamily.Prompt,
            lineHeight: space(20),
            marginTop: space(12),
          }}
        >
          Consequat eleifend lectus morbi lectus cubilia enim pretium eros. Nam
          lobortis amet amet lectus luctus sociosqu suscipit posuere.{" "}
        </Text>
      </View>

      <View
        style={{ padding: space(24), flexDirection: "column", gap: space(12) }}
      >
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: space(4),
              backgroundColor: Colors.black700,
              borderRadius: space(99),
              padding: space(8),
              paddingHorizontal: space(16),
            }}
          >
            <Text
              style={{
                color: Colors.white,
                fontFamily: FontFamily.Prompt,
                fontSize: fontSize(14),
              }}
            >
              Dec 07
            </Text>
            <Icon.ChevronRightIcon size={20} color={Colors.white} stroke={2} />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <CalendarDay active />
          <CalendarDay />
          <CalendarDay />
          <CalendarDay />
          <CalendarDay />
          <CalendarDay />
          <CalendarDay />
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <Animated.ScrollView
          style={{
            backgroundColor: Colors.white,
            borderRadius: space(20),
            borderBottomEndRadius: 0,
            borderBottomStartRadius: 0,
          }}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexDirection: "row", padding: space(20) }}
        >
          <View
            style={{
              paddingRight: space(20),
              height: "100%",
            }}
          >
            <CalendarTimeStone />
            <CalendarTimeStone />
            <CalendarTimeStone />
            <CalendarTimeStone />
            <CalendarTimeStone />
            <CalendarTimeStone />
            <CalendarTimeStone />
            <CalendarTimeStone />
            <CalendarTimeStone />
            <CalendarTimeStone />
            <CalendarTimeStone />
            <CalendarTimeStone />
            <CalendarTimeStone />
            <CalendarTimeStone />
          </View>

          <View style={{ flex: 1 }}>
            <CalendarEvent />
            <CalendarEventPad height={36} />
            <CalendarEvent />
            <CalendarEventPad height={200} />
          </View>
        </Animated.ScrollView>
      </View>
    </SafeAreaView>
  );
}
