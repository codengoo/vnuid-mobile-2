import { IUser } from "@/types";
import { axios } from "../network";

export async function fetchUserData(token: string): Promise<IUser> {
  try {
    const response = await axios.get("/user/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const user = response.data.data;
    return user as IUser;
  } catch (error) {
    throw error;
  }
}
