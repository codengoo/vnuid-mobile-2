import { Icon } from "@/components";
import { Colors, space, Styles } from "@/constants";
import { StyleSheet, Text, View } from "react-native";
import { WifiInfoItem } from "./wifi_item";

export function WifiInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.statusWrapper}>
        <Text style={styles.textStatus}>Kiểm tra vị trí thành công</Text>
        <View style={styles.checkIcon}>
          <Icon.CircleCheckIcon size={18} color="white" stroke={1.75} />
        </View>
      </View>

      <View style={styles.wifiInfoWrapper}>
        <WifiInfoItem />
        <WifiInfoItem />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: space(4),
  },

  checkIcon: {
    backgroundColor: Colors.green300,
    padding: space(4),
    borderRadius: space(99),
  },

  statusWrapper: {
    flexDirection: "row",
    gap: space(8),
    alignItems: "center",
  },

  textStatus: {
    ...Styles.text,
    fontWeight: "500",
    fontSize: space(14),
  },

  wifiInfoWrapper: {
    gap: space(10),
  },
});
