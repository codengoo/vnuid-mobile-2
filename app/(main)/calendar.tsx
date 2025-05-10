import { AtLoading, ButtonChip } from "@/components";
import { Colors, fontSize, space, Styles } from "@/constants";
import { useHideTabBar } from "@/context";
import { fetchSubjects } from "@/helpers/subject";
import { CalendarDayPicker, CalendarEventList, CalendarTimeStoneList } from "@/screens/calendar";
import { ISubject } from "@/types";
import { isInInterval } from "@/utils";
import { useFocusEffect } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CalendarScreen() {
  const { scrollHandler, toggleTabBar } = useHideTabBar();
  const [isLoading, setLoading] = useState(false);
  const [subjects, setSubjects] = useState<ISubject[]>([]);
  const [todaySubjects, setTodaySubjects] = useState<ISubject[]>([]);
  const [date, setDate] = useState<Date>(new Date());

  useFocusEffect(() => {
    toggleTabBar(true);
  });

  const fetchingData = async () => {
    try {
      setLoading(true);
      const data = await fetchSubjects();
      if (data) setSubjects(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  useEffect(() => {
    const subs = subjects.filter((subject) => isInInterval(new Date(subject.opening_day), date));
    const sorted = [...subs].sort(
      (a, b) => new Date(a.start_time).getTime() - new Date(b.start_time).getTime()
    );
    
    setTodaySubjects(sorted);
  }, [date, subjects]);

  if (isLoading) return <AtLoading></AtLoading>;

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
        <CalendarDayPicker value={date} onChange={(date) => setDate(date)} />
      </View>

      <View style={{ flex: 1 }}>
        <Animated.ScrollView
          style={styles.body}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexDirection: "row", padding: space(20) }}
        >
          <CalendarTimeStoneList />
          <CalendarEventList subjects={todaySubjects} />
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

  body: {
    backgroundColor: Colors.white,
    borderRadius: space(20),
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
  },
});
