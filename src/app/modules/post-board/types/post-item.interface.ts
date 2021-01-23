import {DateTime} from 'luxon';

export interface PostItemInterface {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  text: string;
  date: DateTime;
}
