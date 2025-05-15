import { Colors, space } from "@/constants";
import { ICourse } from "@/types";
import { StyleSheet, View } from "react-native";
import { CalendarEvent } from "../calendar_event";

interface ICalendarEventListProps {
  subjects: ICourse[];
}

export function CalendarEventList({ subjects }: ICalendarEventListProps) {
  return (
    <View style={styles.container}>
      {subjects.map((sub) => (
        <CalendarEvent subject={sub} key={sub.id} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    borderLeftWidth: space(2),
    borderColor: Colors.black100,
  },
});
