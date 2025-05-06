import { router } from "expo-router";
import { STG_AUTH_TOKEN } from "../constants";

export async function logout() {
  localStorage.removeItem(STG_AUTH_TOKEN);
  router.navigate("/login");
}
