import { ICourse } from "@/types";
import { getFetcher } from "../network";

export async function fetchSubjects(from?: Date, to?: Date) {
  const fetcher = await getFetcher();
  if (!fetcher) return [];

  try {
    const start = from ? from.toISOString() : undefined;
    const end = to ? to.toISOString() : undefined;

    const response = await fetcher.get(
      start && end ? `/subject/classes?from=${start}&to=${end}` : `/subject/classes`
    );
    const subjects = response.data.data;
    return subjects as ICourse[];
  } catch (error) {
    console.log(error);

    throw error;
  }
}
