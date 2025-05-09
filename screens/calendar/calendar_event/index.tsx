import { Colors, FontFamily, space } from "@/constants";
import { Text, View } from "react-native";

interface ICalendarEventProp {
  text1: string;
  text2: string;
  text3: string;
}
export function CalendarEvent({ text1, text2, text3 }: ICalendarEventProp) {
  return (
    <View
      style={{
        borderLeftWidth: space(2),
        borderLeftColor: Colors.yellow900,
        paddingLeft: space(20),
      }}
    >
      <View
        style={{
          height: space(100),
          padding: space(12),
          backgroundColor: Colors.yellow200,
          width: "100%",
          borderRadius: space(8),
        }}
      >
        <Text style={{ fontFamily: FontFamily.Prompt, fontWeight: "500" }}>{text1}</Text>
        <Text style={{ fontFamily: FontFamily.Prompt, fontWeight: "400", fontSize: space(12) }}>
          {text2}
        </Text>
        <Text style={{ fontFamily: FontFamily.Prompt, fontWeight: "400", fontSize: space(12) }}>
          {text3}
        </Text>
      </View>
    </View>
  );
}
