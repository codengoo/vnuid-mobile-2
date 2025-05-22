import { ISearchResult } from "@/types";
import { getFetcher } from "../network";

export async function fetchSearch(searchText: string) {
  const fetcher = await getFetcher();
  if (!fetcher) return null;

  try {
    const response = await fetcher.get(`/search`, {
      params: {
        search: searchText,
      },
    });
    const subject = response.data.data;
    return subject as ISearchResult;
  } catch (error) {
    throw error;
  }
}
