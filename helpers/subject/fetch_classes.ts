import { ISubject } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STG_AUTH_TOKEN } from "../constants";
import { axios } from "../network";

export async function fetchSubjects(from?: Date, to?: Date) {
  const token = await AsyncStorage.getItem(STG_AUTH_TOKEN);
  if (!token) return [];

  try {
    const start = from ? from.toISOString() : undefined;
    const end = to ? to.toISOString() : undefined;

    const response = await axios.get(
      start && end ? `/subject/classes?from=${start}&to=${end}` : `/subject/classes`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const subjects = response.data.data;
    console.log(subjects);

    return subjects as ISubject[];
  } catch (error) {
    console.log(error);

    throw error;
  }
}
