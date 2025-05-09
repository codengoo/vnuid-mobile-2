import { COLOR, FontFamily, space } from "@/constants";
import { Text, View } from "react-native";

interface ICalendarTimeStoneProps{
  text1: string
}
export function CalendarTimeStone({text1}: ICalendarTimeStoneProps) {
  return (
    <View style={{ height: space(68) }}>
      <Text
        style={{
          fontFamily: FontFamily.Prompt,
          color: COLOR.textSub,
          fontSize: space(12),
        }}
      >
        {text1}
      </Text>
    </View>
  );
}
