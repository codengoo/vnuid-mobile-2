import AsyncStorage from "@react-native-async-storage/async-storage";
import DeviceInfo from "react-native-device-info";
import { STG_AUTH_TOKEN } from "../constants";
import { axios } from "../network";

export async function checkin(session: string) {
  const token = await AsyncStorage.getItem(STG_AUTH_TOKEN);
  if (!token) return false;
  const deviceID = await DeviceInfo.getUniqueId();

  try {
    const response = await axios.post(
      `/checkin/${session}`,
      {
        isVerify: true,
        deviceId: deviceID,
        time: new Date().toISOString(),
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    throw error;
  }
}
