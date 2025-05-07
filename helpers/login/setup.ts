import AsyncStorage from "@react-native-async-storage/async-storage";
import * as LocalAuthentication from "expo-local-authentication";
import { STG_AUTH_BIO, STG_AUTH_TOKEN } from "../constants";
import { axios } from "../network";
export async function setBio(password: string): Promise<boolean> {
  const { success } = await LocalAuthentication.authenticateAsync();
  if (!success) return false;

  const token = await AsyncStorage.getItem(STG_AUTH_TOKEN);
  if (!token) return false;

  try {
    const response = await axios.post(
      "/auth/set_biometric",
      {
        password: password,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      await AsyncStorage.setItem(STG_AUTH_BIO, response.data.data.key);
      return true;
    }

    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function checkPass(password: string): Promise<boolean> {
  const token = await AsyncStorage.getItem(STG_AUTH_TOKEN);
  if (!token) return false;

  try {
    const response = await axios.post(
      "/auth/check_password",
      {
        password: password,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      return response.data.data.valid;
    }

    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
}
