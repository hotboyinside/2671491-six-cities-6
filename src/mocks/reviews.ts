import { Review } from '../types/review';

export const REVIEWS: Review[] = [
  {
    id: 'b67dd-1',
    user: {
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
    },
    rating: 4,
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2019-04-24',
  },
  {
    id: 'b67dd-2',
    user: {
      name: 'Sophie',
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    rating: 5,
    comment:
      'Amazing location! The host was super friendly and the room was clean. Highly recommend.',
    date: '2023-10-10',
  },
  {
    id: 'b67dd-3',
    user: {
      name: 'Alex',
      avatarUrl: 'img/avatar-max.jpg',
    },
    rating: 3,
    comment:
      'It was okay, but the heating did not work properly. A bit cold at night.',
    date: '2023-11-05',
  },
];
