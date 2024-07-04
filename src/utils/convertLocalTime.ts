import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';

dayjs.extend(relativeTime);
dayjs.locale('ko');

export const convertLocalTime = (utcTime: string) => {
  return dayjs(utcTime).fromNow();
};