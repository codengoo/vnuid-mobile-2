import { IUser } from "@/types";
import { TFunction } from "i18next";
import { Dispatch, SetStateAction } from "react";
import Toast from "react-native-toast-message";
import { fetchUserData } from "./user";

export const handleLoginBase = async (
  fn: () => Promise<string | null>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setUser: Dispatch<SetStateAction<IUser | null>>,
  t: TFunction<"login", undefined>,
  isShowError = true
) => {
  try {
    setLoading(true);

    const token = await fn();
    if (token) {
      const userData = await fetchUserData(token);
      setUser(userData);
    }
  } catch (error) {
    isShowError &&
      Toast.show({
        type: "error",
        text1: t("toast_failed"),
        text2: t("toast_failed_description"),
        autoHide: true,
      });
  } finally {
    setLoading(false);
  }
};
