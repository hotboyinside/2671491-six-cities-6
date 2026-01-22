import { Offer } from '../types/offers';
import { shuffleArray } from '../utils/shuffleArray';

const GALLERY_IMAGES = [
  'img/room.jpg',
  'img/apartment-01.jpg',
  'img/apartment-02.jpg',
  'img/apartment-03.jpg',
  'img/studio-01.jpg',
  'img/apartment-01.jpg',
];

export const OFFERS: Offer[] = [
  {
    id: 'offer-1',
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
    price: 120,
    rating: 4.8,
    isPremium: true,
    isFavorite: false,
    bedrooms: 3,
    maxAdults: 4,
    mainImage: 'img/apartment-01.jpg',
    images: shuffleArray(GALLERY_IMAGES)
      .slice(0, 6)
      .map((src, i) => ({ id: `img-${i}`, src })),
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    host: {
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
      description: [
        'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.',
        'The building is green and from 18th century.',
      ],
    },
    location: { latitude: 52.3909553943508, longitude: 4.85309666406198 },
  },
  {
    id: 'offer-2',
    title: 'Wood and stone place',
    type: 'Private Room',
    price: 80,
    rating: 4.0,
    isPremium: false,
    isFavorite: true,
    bedrooms: 1,
    maxAdults: 2,
    mainImage: 'img/room.jpg',
    images: shuffleArray(GALLERY_IMAGES)
      .slice(0, 6)
      .map((src, i) => ({ id: `img-${i}`, src })),
    goods: ['Wi-Fi', 'Towels', 'Heating', 'Fridge'],
    host: {
      name: 'Max',
      isPro: false,
      avatarUrl: 'img/avatar-max.jpg',
      description: [
        'This purely natural house is located in the forest area.',
        'Perfect for those who want to escape the city noise.',
      ],
    },
    location: { latitude: 52.3609553943508, longitude: 4.85309666406198 },
  },
  {
    id: 'offer-3',
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    rating: 4.7,
    isPremium: false,
    isFavorite: false,
    bedrooms: 2,
    maxAdults: 3,
    mainImage: 'img/apartment-02.jpg',
    images: shuffleArray(GALLERY_IMAGES)
      .slice(0, 6)
      .map((src, i) => ({ id: `img-${i}`, src })),
    goods: [
      'Wi-Fi',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
      'Coffee machine',
    ],
    host: {
      name: 'Katerina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
      description: [
        'Enjoy the amazing view of the canal from your window.',
        'Walking distance to all major attractions.',
      ],
    },
    location: { latitude: 52.3909553943508, longitude: 4.929309666406198 },
  },
  {
    id: 'offer-4',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    rating: 5.0,
    isPremium: true,
    isFavorite: true,
    bedrooms: 4,
    maxAdults: 6,
    mainImage: 'img/apartment-03.jpg',
    images: shuffleArray(GALLERY_IMAGES)
      .slice(0, 6)
      .map((src, i) => ({ id: `img-${i}`, src })),
    goods: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
      'Parking',
    ],
    host: {
      name: 'Elena',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
      description: [
        'Modern furniture, fresh renovation and a lot of light.',
        'Ideal for big families or groups of friends.',
      ],
    },
    location: { latitude: 52.3809553943508, longitude: 4.939309666406198 },
  },
];
