import { ButtonChip } from "@/components";
import { Colors, fontSize, space, Styles } from "@/constants";
import { useHideTabBar } from "@/context";
import {
  CalendarDayPicker,
  CalendarEvent,
  CalendarEventPad,
  CalendarTimeStone,
} from "@/screens/calendar";
import { useFocusEffect } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CalendarScreen() {
  const { scrollHandler, toggleTabBar } = useHideTabBar();
  useFocusEffect(() => {
    toggleTabBar(true);
  });

  return (
    <SafeAreaView style={{ backgroundColor: Colors.green100, flex: 1 }}>
      <View style={{ padding: space(24) }}>
        <Text style={styles.headerText}>Thời khóa biểu</Text>
        <Text style={styles.descText}>
          Bạn sẽ có thể thấy thời gian biểu diễn ra các phiên điểm danh ở trong trang này.
        </Text>
      </View>

      <View style={{ padding: space(24), flexDirection: "column", gap: space(12) }}>
        <ButtonChip label="10 Thg 5" />
        <CalendarDayPicker />
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
            <CalendarTimeStone text1="7:00" />
            <CalendarTimeStone text1="9:00" />
            <CalendarTimeStone text1="11:00" />
            <CalendarTimeStone text1="13:00" />
            <CalendarTimeStone text1="15:00" />
            <CalendarTimeStone text1="17:00" />
            <CalendarTimeStone text1="19:00" />
            <CalendarTimeStone text1="21:00" />
          </View>

          <View style={{ flex: 1 }}>
            <CalendarEvent
              text1="Nhập môn An toàn thông tin"
              text2="INT2209"
              text3="201 Giảng đường 2"
            />
            <CalendarEventPad height={36} />
            <CalendarEvent text1="Lập trình nhúng" text2="INT2210" text3="202 Giảng đường 1" />
            <CalendarEventPad height={200} />
          </View>
        </Animated.ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerText: {
    ...Styles.sectionText,
    fontSize: fontSize(40),
    lineHeight: space(40),
    textTransform: "uppercase",
    letterSpacing: space(1.5),
  },

  descText: {
    ...Styles.text,
    lineHeight: space(20),
    marginTop: space(12),
  },
});
