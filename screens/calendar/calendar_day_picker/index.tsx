import { space } from "@/constants";
import { addDays, format, isSameDay, startOfWeek } from "date-fns";
import { useCallback, useMemo, useState } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { CalendarDay } from "../calendar_day";
interface DayItem {
  label: string; // "T2" đến "CN"
  date: string; // "dd/mm"
  dateObj: Date;
}

interface ICalendarDayProps {
  value?: Date;
  onChange?: (date: Date) => void;
}

const weekDays = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
const getDayLabel = (date: Date): string => {
  const day = date.getDay();
  return weekDays[(day + 6) % 7];
};

const generateDays = (startDate: Date, count: number): DayItem[] => {
  return Array.from({ length: count }, (_, i) => {
    const date = addDays(startDate, i);
    const day = date.getDate();
    return {
      label: getDayLabel(date),
      date: day === 1 ? format(date, "d/M") : format(date, "dd"),
      dateObj: date,
    };
  });
};

export function CalendarDayPicker({ value: current = new Date(), onChange }: ICalendarDayProps) {
  const today = new Date();
  const firstMonday = startOfWeek(today, { weekStartsOn: 1 });
  const [data, setData] = useState<DayItem[]>(() => generateDays(firstMonday, 28)); // 4 tuần đầu

  const ITEM_WIDTH = useMemo(() => {
    const width = Dimensions.get("screen").width;
    return (width - space(36)) / 7;
  }, []);

  const handleEndReached = useCallback(() => {
    const lastDate = data[data.length - 1].dateObj;
    const nextDays = generateDays(addDays(lastDate, 1), 28);
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
            active={isSameDay(item.dateObj, current)}
            onPress={() => onChange?.(item.dateObj)}
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
