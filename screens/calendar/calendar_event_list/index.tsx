import { Colors, space } from "@/constants";
import { ISubject } from "@/types";
import { StyleSheet, View } from "react-native";
import { CalendarEvent } from "../calendar_event";

interface ICalendarEventListProps {
  subjects: ISubject[];
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
