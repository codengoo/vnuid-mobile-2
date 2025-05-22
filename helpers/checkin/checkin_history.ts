import { ICheckin } from "@/types";
import { getFetcher } from "../network";

export async function getCheckinHistory() {
  const fetcher = await getFetcher();
  if (!fetcher) return false;

  try {
    const response = await fetcher.get(`/checkin/checkin/`);

    if (response.status === 200) {
      return response.data.data as ICheckin[];
    }
  } catch (error) {
    throw error;
  }
}
