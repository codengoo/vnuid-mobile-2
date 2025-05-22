import DeviceInfo from "react-native-device-info";
import { getFetcher } from "../network";

export async function checkin(session: string) {
  const fetcher = await getFetcher();
  if (!fetcher) return false;
  const deviceID = await DeviceInfo.getUniqueId();

  try {
    const response = await fetcher.post(`/checkin/${session}`, {
      isVerify: true,
      deviceId: deviceID,
      time: new Date().toISOString(),
    });

    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    throw error;
  }
}
