import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export async function logout() {
  // await AsyncStorage.removeItem(STG_AUTH_TOKEN);
  // await AsyncStorage.removeItem(STG_AUTH_BIO);
  // await AsyncStorage.removeItem(STG_UID);

  await AsyncStorage.clear();

  router.replace("/login");
}
