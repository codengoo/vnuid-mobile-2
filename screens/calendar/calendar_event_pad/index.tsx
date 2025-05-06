import { Colors, space } from "@/constants";
import { View } from "react-native";

interface ICalendarEventPadProps {
  height: number;
}
export function CalendarEventPad({ height }: ICalendarEventPadProps) {
  return (
    <View
      style={{
        height: height,
        borderLeftWidth: space(2),
        borderLeftColor: Colors.black100,
      }}
    ></View>
  );
}
