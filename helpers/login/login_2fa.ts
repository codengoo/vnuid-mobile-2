import { IResponseLogin } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { STG_AUTH_2FA_TOKEN, STG_AUTH_TOKEN } from "../constants";
import { getFetcher } from "../network";

async function switchLogin(data: IResponseLogin, status: number) {
  switch (status) {
    case 200:
      await AsyncStorage.setItem(STG_AUTH_TOKEN, data.token);
      router.replace("/home");
      return data.token;

    default:
      throw new Error("Could not login");
  }
}

export async function signInWith2FaPass(password: string, save: boolean) {
  try {
    const _2faToken = await AsyncStorage.getItem(STG_AUTH_2FA_TOKEN);
    if (!_2faToken || _2faToken.trim() === "") {
      throw new Error("Missing 2fa token");
    }

    const fetcher = await getFetcher(false);
    if (!fetcher) return null;

    const response = await fetcher.post("/auth/login_pass_2fa", {
      token: _2faToken,
      password: password,
      save_device: save,
    });

    const token = await switchLogin(response.data, response.status);
    return token;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function signInWithOTP2Fa(code: string, save: boolean) {
  try {
    const _2faToken = await AsyncStorage.getItem(STG_AUTH_2FA_TOKEN);
    if (!_2faToken || _2faToken.trim() === "") {
      throw new Error("Missing 2fa token");
    }

    const fetcher = await getFetcher(false);
    if (!fetcher) return null;

    const response = await fetcher.post("/auth/login_otp_2fa", {
      token: _2faToken,
      code: code,
      save_device: save,
    });

    const token = await switchLogin(response.data, response.status);
    return token;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function signInWithNfc2Fa(nfc: string, save: boolean) {
  try {
    const _2faToken = await AsyncStorage.getItem(STG_AUTH_2FA_TOKEN);
    if (!_2faToken || _2faToken.trim() === "") {
      throw new Error("Missing 2fa token");
    }

    const fetcher = await getFetcher(false);
    if (!fetcher) return null;

    const response = await fetcher.post("/auth/login_nfc_2fa", {
      token: _2faToken,
      nfc_code: nfc,
      save_device: save,
    });

    const token = await switchLogin(response.data, response.status);
    return token;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
