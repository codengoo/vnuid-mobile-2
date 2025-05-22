import { CameraScanFace } from "@/components";
import { space } from "@/constants";
import { useHideTabBar } from "@/context";
import { getFace } from "@/helpers/checkin";
import { checkin } from "@/helpers/checkin/checkin";
import { fetchSessionNow } from "@/helpers/subject";
import { useFaceChallenge } from "@/hooks";
import { ActionFace } from "@/screens/checkin";
import { CheckinInfo } from "@/screens/checkin/checkin_info";
import { ISession } from "@/types";
import { useFocusEffect } from "@react-navigation/native";
import { router } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { PermissionsAndroid, StyleSheet, View } from "react-native";
import Toast from "react-native-toast-message";
import WifiManager, { WifiEntry } from "react-native-wifi-reborn";

export default function CheckinScreen() {
  const { toggleTabBar } = useHideTabBar();
  const [sessions, setSessions] = useState<ISession[]>([]);
  const [wifiInfo, setWifiInfo] = useState<WifiEntry[]>([]);
  const [face, setFace] = useState<number[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [isWifiOk, setWifiOk] = useState(false);
  const { dir, handleFaceMatch, stage } = useFaceChallenge();
  async function getSignalStrength(): Promise<boolean> {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (granted !== PermissionsAndroid.RESULTS.GRANTED) return false;
    try {
      const info = await WifiManager.reScanAndLoadWifiList();
      console.log(info);
      setWifiInfo(info);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
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
    console.log(sessions);

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

  const handleCompleteCheckin = async () => {
    try {
      setLoading(true);
      if (isWifiOk && sessions && sessions[0]) {
        await checkin(sessions[0].id);
        Toast.show({
          type: "success",
          text1: "Thành công",
          text2: "Điểm danh thành công",
        });
      } else throw new Error("Wifi không đúng");
    } catch (error) {
      console.log(error);
      Toast.show({
        type: "error",
        text1: "Lỗi",
        text2: error instanceof Error ? error.message : "Không thể thực hiện điểm danh",
        autoHide: false,
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

    const wifiStatus = await getSignalStrength();
    if (!wifiStatus) return;

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

  useEffect(() => {
    const wifiRef = sessions[0]?.course?.room?.wifi.map((w) => ({
      type: w.type,
      rssi: w.rssi,
      name: w.wifi.name,
      mac: w.wifi.mac,
    }));

    if (!wifiRef) return;

    const isOk = wifiRef.some((wifi_status) => {
      return wifiInfo.some((w) => {
        const sameMAC = wifi_status.mac === w.BSSID;
        const isCorrentValue =
          wifi_status.type === "SMALLER"
            ? wifi_status.rssi >= w.level
            : wifi_status.rssi <= w.level;

        return sameMAC && isCorrentValue;
      });
    });

    setWifiOk(isOk);
  }, [sessions, wifiInfo]);

  return (
    <CameraScanFace onResult={isLoading ? undefined : handleFaceMatch} embedding={face}>
      <View style={styles.container}>
        <ActionFace dir={dir} stage={stage} />
        <CheckinInfo sessions={sessions} isOk={isWifiOk} />
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
