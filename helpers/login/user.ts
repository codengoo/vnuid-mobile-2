import { IUser } from "@/types";
import { getFetcher } from "../network";

export async function fetchUserData(token: string): Promise<IUser | null> {
  const fetcher = await getFetcher();
  if (!fetcher) return null;
  try {
    const response = await fetcher.get("/user/me");
    const user = response.data.data;
    return user as IUser;
  } catch (error) {
    throw error;
  }
}
