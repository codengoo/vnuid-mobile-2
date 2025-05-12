import { ISearchResult } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STG_AUTH_TOKEN } from "../constants";
import { axios } from "../network";

export async function fetchSearch(searchText: string) {
  const token = await AsyncStorage.getItem(STG_AUTH_TOKEN);
  if (!token) return null;

  try {
    const response = await axios.get(`/search`, {
      params: {
        search: searchText,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const subject = response.data.data;
    return subject as ISearchResult;
  } catch (error) {
    throw error;
  }
}
