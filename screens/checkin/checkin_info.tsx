import { Colors, space } from "@/constants";
import { ISession } from "@/types";
import { StyleSheet, View } from "react-native";
import { SessionInfo } from "./session_info";
import { WifiInfo } from "./wifi_info";

interface ICheckinInfoProps {
  sessions: ISession[];
  isOk: boolean;
}

export function CheckinInfo({ sessions, isOk }: ICheckinInfoProps) {
  return (
    <>
      {sessions[0] && (
        <View style={styles.container}>
          <SessionInfo session={sessions[0]} />
          <WifiInfo wifi={sessions[0].course.room.wifi} isOk={isOk} />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: space(20),
    borderRadius: space(20),
    gap: space(12),
    opacity: 0.7,
  },
});
