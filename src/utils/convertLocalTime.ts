import moment from 'moment';
import 'moment/locale/ko';

export const convertLocalTime = (utcTime: string) => {
  return moment(utcTime).fromNow();
};
