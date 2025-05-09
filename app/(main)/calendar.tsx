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
            fontWeight: "600",
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
          Bạn sẽ có thể thấy thời gian biểu diễn ra các phiên điểm danh ở trong trang này.
        </Text>
      </View>

      <View style={{ padding: space(24), flexDirection: "column", gap: space(12) }}>
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
              09 Tháng 5
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
          <CalendarDay active text1="Th6" text2="09" />
          <CalendarDay text1="T7" text2="10" />
          <CalendarDay text1="Cn" text2="11" />
          <CalendarDay text1="T2" text2="12" />
          <CalendarDay text1="T3" text2="13" />
          <CalendarDay text1="T4" text2="14" />
          <CalendarDay text1="T5" text2="15" />
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
            <CalendarTimeStone text1="7:00"/>
            <CalendarTimeStone text1="9:00"/>
            <CalendarTimeStone text1="11:00"/>
            <CalendarTimeStone text1="13:00"/>
            <CalendarTimeStone text1="15:00"/>
            <CalendarTimeStone text1="17:00"/>
            <CalendarTimeStone text1="19:00"/>
            <CalendarTimeStone text1="21:00"/>
          </View>

          <View style={{ flex: 1 }}>
            <CalendarEvent text1="Nhập môn An toàn thông tin" text2="INT2209" text3="201 Giảng đường 2"/>
            <CalendarEventPad height={36} />
            <CalendarEvent text1="Lập trình nhúng" text2="INT2210" text3="202 Giảng đường 1"/>
            <CalendarEventPad height={200} />
          </View>
        </Animated.ScrollView>
      </View>
    </SafeAreaView>
  );
}
