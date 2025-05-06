import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { STG_AUTH_TOKEN } from "../constants";

export function logout() {
  AsyncStorage.removeItem(STG_AUTH_TOKEN);
  router.replace("/login");
}
