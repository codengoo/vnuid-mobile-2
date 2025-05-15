import { AtChip } from "@/components";
import { space } from "@/constants";
import { IWifiStatus } from "@/types";
import { StyleSheet, View } from "react-native";

interface IWifiInfoItemProps {
  wifi: IWifiStatus;
}
export function WifiInfoItem({ wifi }: IWifiInfoItemProps) {
  return (
    <View style={styles.container}>
      <AtChip label={wifi.wifi.mac} color="gray" />
      <AtChip label={wifi.rssi.toString()} color="yellow" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: space(4),
    alignItems: "center",
  },
});
