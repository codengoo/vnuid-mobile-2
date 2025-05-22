import AsyncStorage from "@react-native-async-storage/async-storage";
import { STG_FACE_EMD } from "../constants";
import { getFetcher } from "../network";

export async function getFace(): Promise<number[]> {
  const fetcher = await getFetcher();
  if (!fetcher) return [];

  try {
    const response = await fetcher.get("/checkin/face/me");

    if (response.status === 200) {
      const face = response.data.data.face_data as number[];
      await AsyncStorage.setItem(STG_FACE_EMD, JSON.stringify(face));
      return face;
    }

    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
}
