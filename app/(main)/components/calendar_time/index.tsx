import { COLOR, FontFamily, space } from "@/constants";
import { Text, View } from "react-native";

export default function CalendarTimeStone() {
  return (
    <View style={{ height: space(68) }}>
      <Text
        style={{
          fontFamily: FontFamily.Prompt,
          color: COLOR.textSub,
          fontSize: space(12),
        }}
      >
        7:00 AM
      </Text>
    </View>
  );
}
