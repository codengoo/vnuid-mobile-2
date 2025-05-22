import { ISession } from "@/types";
import { getFetcher } from "../network";

export async function fetchSessionNow(from?: Date, to?: Date) {
  const fetcher = await getFetcher();
  if (!fetcher) return [];

  try {
    const response = await fetcher.get(`/subject/sessions/now`);
    const sessions = response.data.data;
    return sessions as ISession[];
  } catch (error) {
    throw error;
  }
}
