import { Colors, fontSize, space, Styles } from "@/constants";
import { ISubject } from "@/types";
import { differenceInHours, set, startOfDay, startOfHour } from "date-fns";
import { router } from "expo-router";
import { useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ICalendarEventProp {
  subject: ISubject;
}
export function CalendarEvent({ subject }: ICalendarEventProp) {
  const height = useMemo(() => {
    const start = startOfHour(new Date(subject.start_time));
    const end = startOfHour(new Date(subject.end_time));
    const hours = differenceInHours(end, start);
    return hours * space(70);
  }, [subject]);

  const top = useMemo(() => {
    const start = startOfHour(new Date(subject.start_time));
    const hours = differenceInHours(start, set(startOfDay(new Date()), { hours: 7 }));
    return hours * space(70);
  }, [subject]);

  const navigateToSubjectDetails = () => router.navigate(`/subject?subject_id=${subject.id}`);

  return (
    <TouchableOpacity
      onPress={navigateToSubjectDetails}
      style={[
        styles.container,
        height != undefined && { height },
        top !== undefined && { top, left: space(-2) },
      ]}
    >
      <View style={styles.event}>
        <Text style={styles.subjectText}>{subject.name}</Text>
        <Text style={styles.text}>{subject.code}</Text>
        <Text style={styles.text}>{subject.address}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderLeftWidth: space(2),
    borderLeftColor: Colors.yellow900,
    paddingLeft: space(20),
    flexDirection: "row",
  },
  event: {
    padding: space(12),
    backgroundColor: Colors.yellow200,
    width: "100%",
    borderRadius: space(8),
    overflow: "hidden",
  },

  text: {
    ...Styles.text,
    fontSize: fontSize(14),
  },

  subjectText: {
    ...Styles.text,
    fontWeight: "500",
  },
});
