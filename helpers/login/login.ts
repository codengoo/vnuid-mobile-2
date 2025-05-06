import { IResponseLogin } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import * as LocalAuthentication from "expo-local-authentication";
import { router } from "expo-router";
import DeviceInfo from "react-native-device-info";
import { STG_AUTH_2FA_TOKEN, STG_AUTH_TOKEN } from "../constants";
import { axios } from "../network";

GoogleSignin.configure({
  webClientId: "842014203560-5h2ec7sni2ag0v1u8v3gm4hn851qo8ur.apps.googleusercontent.com",
  offlineAccess: true,
});

async function switchLogin(data: IResponseLogin, status: number) {
  switch (status) {
    case 200:
      await AsyncStorage.setItem(STG_AUTH_TOKEN, data.token);

      router.navigate("/home");
      break;

    case 202:
      await AsyncStorage.setItem(STG_AUTH_2FA_TOKEN, data.token);
      // navigationRef.navigate('Login2Fa', {
      //   token: data.token,
      //   allowMethods: data.allow,
      // });
      break;
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

    console.log(response.data);
    await switchLogin(response.data, response.status);
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

  await switchLogin(response.data, response.status);
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

    console.log(response.data);
    await switchLogin(response.data, response.status);
  } catch (error) {
    throw error;
  }
}

export async function signInWithBio() {
  const result = LocalAuthentication.authenticateAsync({
    disableDeviceFallback: true,
  });
  console.log("🚀 ~ useEffect ~ result:", result);
  throw new Error("Not implemented");
  
}
