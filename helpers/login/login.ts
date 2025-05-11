import { IResponseLogin } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import * as LocalAuthentication from "expo-local-authentication";
import { router } from "expo-router";
import DeviceInfo from "react-native-device-info";
import { STG_AUTH_2FA_TOKEN, STG_AUTH_BIO, STG_AUTH_TOKEN, STG_UID } from "../constants";
import { axios } from "../network";

GoogleSignin.configure({
  webClientId: "842014203560-5h2ec7sni2ag0v1u8v3gm4hn851qo8ur.apps.googleusercontent.com",
  offlineAccess: true,
});

async function switchLogin(data: IResponseLogin, status: number): Promise<string | null> {
  switch (status) {
    case 200:
      await AsyncStorage.setItem(STG_AUTH_TOKEN, data.token);
      await AsyncStorage.setItem(STG_UID, data.uid);

      router.navigate("/home");
      return data.token;

    case 202:
      await AsyncStorage.setItem(STG_AUTH_2FA_TOKEN, data.token);
      router.push({
        pathname: "/login/2fa",
        params: { allowMethods: data.allow, token: data.token },
      });
      return null;
    default:
      throw new Error("Could not login");
  }
}

async function loginGoogle(): Promise<string | undefined> {
  try {
    const t = await GoogleSignin.hasPlayServices();
    if (!t) return;

    const userInfo = await GoogleSignin.signIn();
    return userInfo.data?.idToken || void 0;
  } catch (error) {
    console.error("Google Sign-In Error:", error);
    return void 0;
  }
}

/**
 * ====Login section====
 */

export async function signInWithPass(username: string, password: string) {
  const deviceID = await DeviceInfo.getUniqueId();
  const deviceName = await DeviceInfo.getDeviceName();

  try {
    const response = await axios.post("/auth/login_pass", {
      password: password,
      email: username,
      device_id: deviceID,
      device_name: deviceName,
    });

    const token = await switchLogin(response.data, response.status);
    return token;
  } catch (error) {
    throw error;
  }
}

export async function signInWithGoogle() {
  const idToken = await loginGoogle();
  if (!idToken) throw new Error("Google Sign-In failed");

  const deviceID = await DeviceInfo.getUniqueId();
  const deviceName = await DeviceInfo.getDeviceName();

  const response = await axios.post("/auth/login_google", {
    id_token: idToken,
    device_id: deviceID,
    device_name: deviceName,
  });

  const token = await switchLogin(response.data, response.status);
  return token;
}

export async function signInWithNfc(nfc: string, uid: string) {
  const deviceID = await DeviceInfo.getUniqueId();
  const deviceName = await DeviceInfo.getDeviceName();

  try {
    const response = await axios.post("/auth/login_nfc", {
      nfc_code: nfc,
      uid: uid,
      device_id: deviceID,
      device_name: deviceName,
    });

    const token = await switchLogin(response.data, response.status);
    return token;
  } catch (error) {
    throw error;
  }
}

export async function signInWithBio() {
  const bio_code = await AsyncStorage.getItem(STG_AUTH_BIO);
  if (!bio_code) throw new Error("Fingerprint not set");
  const { success } = await LocalAuthentication.authenticateAsync();
  if (!success) throw new Error("Fingerprint authentication failed");
  const uid = await AsyncStorage.getItem(STG_UID);
  if (!uid) throw new Error("UID not found");

  const deviceID = await DeviceInfo.getUniqueId();
  const deviceName = await DeviceInfo.getDeviceName();

  const response = await axios.post("/auth/login_bio", {
    device_id: deviceID,
    device_name: deviceName,
    uid: uid,
    bio_code: bio_code,
  });

  const token = await switchLogin(response.data, response.status);
  return token;
}
