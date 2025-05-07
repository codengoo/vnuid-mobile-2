import AsyncStorage from "@react-native-async-storage/async-storage";
import { STG_AUTH_TOKEN, STG_FACE_EMD } from "../constants";
import { axios } from "../network";

export async function registerFace(face: number[]): Promise<boolean> {
  const token = await AsyncStorage.getItem(STG_AUTH_TOKEN);
  if (!token) return false;

  try {
    const response = await axios.post(
      "/checkin/face/register",
      {
        embedding: face,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      await AsyncStorage.setItem(STG_FACE_EMD, JSON.stringify(face));
      return true;
    }

    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
}
