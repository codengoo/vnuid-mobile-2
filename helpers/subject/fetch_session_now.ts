import { ISession } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STG_AUTH_TOKEN } from "../constants";
import { axios } from "../network";

export async function fetchSessionNow(from?: Date, to?: Date) {
  const token = await AsyncStorage.getItem(STG_AUTH_TOKEN);
  if (!token) return [];

  try {
    const response = await axios.get(`/subject/sessions/now`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const sessions = response.data.data;
    return sessions as ISession[];
  } catch (error) {
    throw error;
  }
}
