import {PostItemInterface} from '../modules/post-board/types/post-item.interface';
import {DateTime} from 'luxon';

/**
 * https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
 */

export function getRandomInt(min, max): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Returns random item from array or number
 */
const getRandomItem = (source: string[] | number | object): string | number | null => {
  if (Array.isArray(source)) {
    return source[Math.round(Math.random() * Math.floor(source.length - 1))];
  } else if (typeof source === 'number') {
    const result = Math.random() * Math.floor(source);
    return Math.round(result);
  }

  return null;
};

/**
 * Populates rows with random content
 */
export const populatePostsData = (rowsLength: number): PostItemInterface[] => {
  const content = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    'Duis maximus orci nec tincidunt aliquet. ',
    'Nulla fringilla laciniafringilla. Nulla diam est, congue sed rutrum hendrerit, feugiat nec erat. Nulla fringilla laciniafringilla. Nulla diam est, congue sed rutrum hendrerit, feugiat nec erat.',
    'Quisque nisl libero, tincidunt vitae viverra eget, auctor non purus. ',
    'Aenean ultricies convallis mi, a volutpat ipsum efficitur scelerisque. ',
    'Nam venenatis nisi non erat tincidunt, quis maximus libero eleifend. ',
    'Nullam sed nunc vel urna vestibulum vehicula. Nam finibus tempor orci. ',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  ];
  const authors = [
    {firstName: 'John', lastName: 'Doe'},
    {firstName: 'Andrii', lastName: 'Davis'},
    {firstName: 'Johnny', lastName: 'Silverhand'},
    {firstName: 'Maariya', lastName: 'Jarvis'},
    {firstName: 'Vienna', lastName: 'Huynh'},
    {firstName: 'Guto', lastName: 'Fleming'},
    {firstName: 'Alyssia', lastName: 'Page'},
    {firstName: 'Sukhmani', lastName: ' O\'Gallagher'},
  ];
  const dates = [
    '2018-07-28T12:58:29.370691Z',
    '2015-08-30T12:58:29.370691Z',
    '2019-10-22T14:44:27.370691Z',
    '2021-08-21T20:58:29.370691Z',
    '2019-10-30T16:33:21.370691Z',
    '2018-09-08T12:58:29.370691Z',
    '2020-04-11T17:52:29.370691Z'
  ];

  const data = [];
  for (let i = 1; i < rowsLength; i++) {
    // ensure first line very small height
    let text = 'AAAAAAAAA';
    if (i !== 0) {
      text = getRandomItem(content) as string;
    }

    data.push({
      id: i,
      name: getRandomItem(authors),
      text,
      date: DateTime.fromISO(getRandomItem(dates)?.toString()),
    });
  }

  return data;
};
