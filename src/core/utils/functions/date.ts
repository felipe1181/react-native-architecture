import moment from 'moment';

export function formatDateByHour(date: string) {
  return moment(date).format('HH');
}
