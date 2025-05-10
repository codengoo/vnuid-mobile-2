import AsyncStorage from "@react-native-async-storage/async-storage";
import { STG_AUTH_TOKEN } from "../constants";
import { axios } from "../network";

export async function getKeys() {
  const token = await AsyncStorage.getItem(STG_AUTH_TOKEN);
  if (!token) return null;

  const publicKey = "";

  try {
    const response = await axios.post(
      `/checkin/key`,
      { key: publicKey },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const key = response.data.data;
    return key as string;
  } catch (error) {
    throw error;
  }
}
