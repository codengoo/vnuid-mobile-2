import AsyncStorage from "@react-native-async-storage/async-storage";
import * as LocalAuthentication from "expo-local-authentication";
import { STG_AUTH_BIO } from "../constants";
import { getFetcher } from "../network";
export async function setBio(password: string): Promise<boolean> {
  const { success } = await LocalAuthentication.authenticateAsync();
  if (!success) return false;

  const fetcher = await getFetcher();
  if (!fetcher) return false;

  try {
    const response = await fetcher.post("/auth/set_biometric", {
      password: password,
    });

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

export async function setAuthenticator(password: string): Promise<string | null> {
  const fetcher = await getFetcher();
  if (!fetcher) return null;

  try {
    const response = await fetcher.post("/auth/set_authenticator", {
      password: password,
    });
    console.log(response.data);
    if (response.status === 200) return response.data.data.code;

    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function checkPass(password: string): Promise<boolean> {
  const fetcher = await getFetcher();
  if (!fetcher) return false;

  try {
    const response = await fetcher.post("/auth/check_password", {
      password: password,
    });

    if (response.status === 200) {
      return response.data.data.valid;
    }

    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
}
