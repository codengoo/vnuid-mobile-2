import AsyncStorage from "@react-native-async-storage/async-storage";
import { STG_AUTH_TOKEN, STG_FACE_EMD } from "../constants";
import { axios } from "../network";

export async function getFace(): Promise<number[]> {
  const token = await AsyncStorage.getItem(STG_AUTH_TOKEN);
  if (!token) return [];

  try {
    const response = await axios.get("/checkin/face/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

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
