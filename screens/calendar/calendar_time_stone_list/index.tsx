import { space } from "@/constants";
import { format, set } from "date-fns";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { CalendarTimeStone } from "../calendar_time";

interface TimeItem {
  label: string; // '07:00'
  timeObj: Date;
}

const generateTimeList = (startHour: number, endHour: number): TimeItem[] => {
  const times: TimeItem[] = [];
  const now = new Date();
  for (let hour = startHour; hour <= endHour; hour++) {
    const time = set(now, { hours: hour, minutes: 0, seconds: 0, milliseconds: 0 });
    times.push({
      label: format(time, "HH:mm"),
      timeObj: time,
    });
  }
  return times;
};

export function CalendarTimeStoneList() {
  const times = useMemo(() => generateTimeList(7, 21), []);

  return (
    <View style={styles.container}>
      {times.map((time) => (
        <CalendarTimeStone key={time.label} label={time.label} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: space(20),
    height: "100%",
  },
});
