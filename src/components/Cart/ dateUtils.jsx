import dayjs from "dayjs";

export const getCurrentDate = (format = "D MMM YYYY") => dayjs().format(format);
