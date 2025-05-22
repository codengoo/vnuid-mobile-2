import { AxiosError } from "axios";
import DeviceInfo from "react-native-device-info";
import { getFetcher } from "../network";

export async function checkin(session: string) {
  const fetcher = await getFetcher();
  if (!fetcher) return false;
  const deviceID = await DeviceInfo.getUniqueId();

  try {
    const response = await fetcher.post(`/checkin/checkin/${session}`, {
      verified: true,
      device_id: deviceID,
      time: new Date().toISOString(),
      token: "abc"
    });

    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    if (error instanceof AxiosError) console.log(error.response?.data);
    else console.log((error as Error).message);

    throw error;
  }
}
