import { Colors, space } from "@/constants";
import { ISession } from "@/types";
import { StyleSheet, View } from "react-native";
import { SessionInfo } from "./session_info";
import { WifiInfo } from "./wifi_info";

interface ICheckinInfoProps {
  sessions: ISession[];
}

export function CheckinInfo({ sessions }: ICheckinInfoProps) {
  return (
    <View style={styles.container}>
      {sessions[0] && <SessionInfo session={sessions[0]} />}
      <WifiInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: space(20),
    borderRadius: space(20),
    gap: space(12),
    opacity: 0.7
  },
});
