import dayjs from "dayjs";

export const formatDate = (
  dateString: string | null | undefined
): string | null => {
  if (!dateString) {
    return null;
  }
  return dayjs(dateString).format("DD MMM, YYYY");
};
