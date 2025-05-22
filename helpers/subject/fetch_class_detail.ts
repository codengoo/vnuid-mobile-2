import { ICourse } from "@/types";
import { getFetcher } from "../network";

export async function fetchSubjectDetail(sid: string) {
  const fetcher = await getFetcher();
  if (!fetcher) return false;

  try {
    const response = await fetcher.get(`/subject/class/${sid}`);
    const subject = response.data.data;
    return subject as ICourse;
  } catch (error) {
    throw error;
  }
}
