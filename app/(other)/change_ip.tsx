import { AtButtonBox, AtInput } from "@/components";
import { Styles } from "@/constants";
import { STG_IP } from "@/helpers/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChangeIPScreen() {
  const [ip, setIp] = useState<string>("");

  const loadIP = async () => {
    const IP = await AsyncStorage.getItem(STG_IP);
    if (IP) setIp(IP);
  };

  const handleSave = async () => {
    await AsyncStorage.setItem(STG_IP, ip);
    router.replace("/login");
  };

  useFocusEffect(
    useCallback(() => {
      loadIP();
    }, [])
  );

  return (
    <SafeAreaView style={Styles.container}>
      <AtInput value={ip} setValue={setIp} mode="text" />
      <AtButtonBox title="Save" onPress={handleSave} center color="yellow" />
    </SafeAreaView>
  );
}
