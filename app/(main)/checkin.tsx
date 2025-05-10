import { CameraScanFace } from "@/components";
import { space } from "@/constants";
import { useHideTabBar } from "@/context";
import { getFace } from "@/helpers/checkin";
import { fetchSessionNow } from "@/helpers/subject";
import { useFaceChallenge } from "@/hooks";
import { ActionFace } from "@/screens/checkin";
import { CheckinInfo } from "@/screens/checkin/checkin_info";
import { ISession } from "@/types";
import { useFocusEffect } from "@react-navigation/native";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Toast from "react-native-toast-message";

export default function CheckinScreen() {
  const { toggleTabBar } = useHideTabBar();
  const [sessions, setSessions] = useState<ISession[]>([]);
  const [face, setFace] = useState<number[]>([]);
  const [isLoading, setLoading] = useState(false);

  const { dir, handleFace, stage } = useFaceChallenge();

  const setupFace = async () => {
    const face = await getFace();
    if (face.length === 0) {
      router.navigate("/first_login");
    } else {
      setFace(face);
    }
  };

  const fetchSession = async () => {
    const sessions = await fetchSessionNow();
    if (sessions.length === 0) {
      Toast.show({
        type: "error",
        text1: "Lỗi",
        text2: "Không có phiên điểm danh nào đang diễn ra",
      });
    } else {
      setSessions(sessions);
    }
  };

  useFocusEffect(() => {
    // setupFace();
    fetchSession();
    toggleTabBar(false);
  });

  return (
    <CameraScanFace onResult={isLoading ? () => {} : handleFace}>
      <View style={styles.container}>
        <ActionFace dir={dir} stage={stage} />
        <CheckinInfo sessions={sessions} />
      </View>
    </CameraScanFace>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: space(20),
  },
});
