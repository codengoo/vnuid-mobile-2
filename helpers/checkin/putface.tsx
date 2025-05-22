import AsyncStorage from "@react-native-async-storage/async-storage";
import { STG_FACE_EMD } from "../constants";
import { getFetcher } from "../network";

export async function registerFace(face: number[]) {
  const fetcher = await getFetcher();
  if (!fetcher) return false;

  try {
    const response = await fetcher.post("/checkin/face/register", { embedding: face });

    if (response.status === 200) {
      await AsyncStorage.setItem(STG_FACE_EMD, JSON.stringify(face));
      return true;
    }
  } catch (error) {
    throw error;
  }
}
