import { space } from "@/constants";
import dayjs, { Dayjs } from "dayjs";
import { useCallback, useMemo, useState } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { CalendarDay } from "../calendar_day";
interface DayItem {
  label: string; // "T2" đến "CN"
  date: string; // "dd/mm"
  dateObj: Dayjs;
}

interface ICalendarDayProps {
  current: Dayjs;
}

const weekDays = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
const getDayLabel = (date: Dayjs): string => {
  const day = date.day(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  return weekDays[(day + 6) % 7]; // chuyển Sunday (0) → CN (cuối)
};

const generateDays = (startDate: Dayjs, count: number): DayItem[] => {
  return Array.from({ length: count }, (_, i) => {
    const date = startDate.add(i, "day");
    return {
      label: getDayLabel(date),
      date: date.date() == 1 ? date.format("D/M") : date.format("DD"),
      dateObj: date,
    };
  });
};

export function CalendarDayPicker({ current }: ICalendarDayProps) {
  const [data, setData] = useState<DayItem[]>(() => generateDays(dayjs(), 21)); // 3 tuần đầu
  const ITEM_WIDTH = useMemo(() => {
    const width = Dimensions.get("screen").width;
    return (width - space(36)) / 7;
  }, []);

  const handleEndReached = useCallback(() => {
    const lastDate = data[data.length - 1].dateObj;
    const nextDays = generateDays(lastDate.add(1, "day"), 7);
    setData((prevData) => [...prevData, ...nextDays]);
  }, [data]);

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => (
          <CalendarDay
            text1={item.label}
            text2={item.date}
            width={ITEM_WIDTH}
            active={item.dateObj.isSame(current, "day")}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        showsHorizontalScrollIndicator={false}
        getItemLayout={(data, index) => ({
          length: ITEM_WIDTH,
          offset: ITEM_WIDTH * index,
          index,
        })}
        snapToInterval={ITEM_WIDTH}
        decelerationRate="fast"
        snapToAlignment="start"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});
