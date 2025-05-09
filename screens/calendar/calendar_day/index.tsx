import { COLOR, Colors, FontFamily, fontSize, space } from "@/constants";
import { Text, TouchableOpacity } from "react-native";

interface ICalendarDayProps {
  active?: boolean;
  date?: Date;
  text1: string;
  text2: string;
}
export function CalendarDay({ active, text1, text2 }: ICalendarDayProps) {
  return (
    <TouchableOpacity
      style={[
        {
          flexDirection: "column",
          alignItems: "center",
          padding: space(4),
          paddingHorizontal: space(8),
          borderBottomWidth: space(2),
          borderColor: "transparent",
        },
        active && { borderColor: Colors.green300 },
      ]}
    >
      <Text
        style={[
          {
            fontFamily: FontFamily.Prompt,
            fontSize: fontSize(16),
            color: COLOR.text,
          },
          active && { color: Colors.green300 },
        ]}
      >
        {text1}
      </Text>
      <Text
        style={[
          { fontFamily: FontFamily.Prompt, fontWeight: "500" },
          active && {
            color: Colors.green300,
          },
        ]}
      >
        {text2}
      </Text>
    </TouchableOpacity>
  );
}
