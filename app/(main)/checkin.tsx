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
import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Toast from "react-native-toast-message";

export default function CheckinScreen() {
  const { toggleTabBar } = useHideTabBar();
  const [sessions, setSessions] = useState<ISession[]>([]);
  const [face, setFace] = useState<number[]>([]);
  const [isLoading, setLoading] = useState(false);

  const { dir, handleFaceMatch, stage } = useFaceChallenge();

  const setupFace = async () => {
    const face = await getFace();
    if (face.length === 0) {
      router.navigate("/first_login");
      return false;
    } else {
      setFace(face);
      return true;
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
      router.replace("/home");
      return false;
    } else {
      setSessions(sessions);
      return true;
    }
  };

  const handleCompleteCheckin = () => {
    try {
      setLoading(true);

      Toast.show({
        type: "success",
        text1: "Thành công",
        text2: "Điểm danh thành công",
      });
    } catch (error) {
      console.log(error);
      Toast.show({
        type: "error",
        text1: "Lỗi",
        text2: "Không thể thực hiện điểm danh",
      });
    } finally {
      setLoading(false);
      router.replace("/home");
    }
  };

  const prepare = async () => {
    setLoading(true);
    toggleTabBar(false);
    const isFaceOk = await setupFace();
    if (!isFaceOk) return;
    const isSessionOk = await fetchSession();
    if (!isSessionOk) return;
    setLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      // if (stage === "done") reset();
      prepare();
    }, [])
  );

  useEffect(() => {
    if (stage === "done") {
      handleCompleteCheckin();
    } else if (stage === "failed") {
      Toast.show({
        type: "error",
        text1: "Lỗi",
        text2: "Khuôn mặt không trùng khớp",
      });
      router.replace("/home");
    }
  }, [stage]);

  return (
    <CameraScanFace onResult={isLoading ? undefined : handleFaceMatch} embedding={face}>
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
