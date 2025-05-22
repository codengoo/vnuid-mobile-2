import { getFetcher } from "../network";

export async function getKeys() {
  const fetcher = await getFetcher();
  if (!fetcher) return null;

  const publicKey = "";

  try {
    const response = await fetcher.post(`/checkin/key`, { key: publicKey });
    const key = response.data.data;
    return key as string;
  } catch (error) {
    throw error;
  }
}
