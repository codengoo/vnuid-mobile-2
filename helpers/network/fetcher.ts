import AsyncStorage from "@react-native-async-storage/async-storage";
import { default as _axios } from "axios";
import { STG_AUTH_TOKEN, STG_IP } from "../constants";

export async function getFetcher(needAuth: boolean = true) {
  const baseURL = await AsyncStorage.getItem(STG_IP);
  const token = await AsyncStorage.getItem(STG_AUTH_TOKEN);
  if (!token && needAuth) return null;

  return _axios.create({
    baseURL:
      !baseURL || baseURL.trim().length === 0
        ? "http://192.168.10.5:1234"
        : `http://${baseURL}:1234`,
    headers: needAuth
      ? {
          Authorization: `Bearer ${token}`,
        }
      : void 0,
    timeout: 5000,
  });
}
