import { AtChip } from "@/components";
import { space } from "@/constants";
import { StyleSheet, View } from "react-native";

export function WifiInfoItem() {
  return (
    <View style = {styles.container}>
      <AtChip label="00:1A:2B:3C:4D:5E" color="gray" />
      <AtChip label="-75dB" color="yellow"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: space(4),
    alignItems: "center"
  }
});
