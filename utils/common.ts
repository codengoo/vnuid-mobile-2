import { differenceInCalendarDays, format, isBefore, startOfDay } from "date-fns";

export const random = (start: number, end: number) =>
  Math.floor(Math.random() * (end - start) + start);

export const greeting = () => {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 5 && hour < 11) {
    return "Buổi sáng vui vẻ";
  } else if (hour >= 11 && hour < 13) {
    return "Buổi trưa vui vẻ";
  } else if (hour >= 13 && hour < 18) {
    return "Buổi chiều vui vẻ";
  } else {
    return "Buổi tối vui vẻ";
  }
};

export const isInInterval = (eventStart: Date, checkDate: Date) => {
  const start = startOfDay(eventStart);
  const check = startOfDay(checkDate);

  if (isBefore(check, start)) return false;

  const days = differenceInCalendarDays(check, start);
  return days % 7 === 0;
};

export const formatTime = (time: Date | string) => {
  const date = new Date(time);
  return `${date.getHours()}h${date.getMinutes()}`;
};

export function formatDateTime(date: Date | string = new Date()) {
  try {
    const datetime = new Date(date);
    const result = format(datetime, "dd-MM-yyyy hh:mm");
    return result;
  } catch (error) {
    return null;
  }
}
