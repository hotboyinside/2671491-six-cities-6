import { PlaceCard } from '../../../components/PlaceCard';

const NEARBY_PLACES = [
  {
    id: 'amsterdam-room-01',
    image: 'img/room.jpg',
    price: 80,
    premium: false,
    rating: 80,
    title: 'Wood and stone place',
    type: 'Room',
    bookmarked: true,
  },
  {
    id: 'amsterdam-apt-02',
    image: 'img/apartment-02.jpg',
    price: 132,
    premium: false,
    rating: 80,
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    bookmarked: false,
  },
  {
    id: 'amsterdam-apt-03',
    image: 'img/apartment-03.jpg',
    price: 180,
    premium: true,
    rating: 100,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    bookmarked: false,
  },
];

export const NearbyPlaces = () => (
  <div className="container">
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {NEARBY_PLACES.map((place) => (
          <PlaceCard key={place.id} {...place} />
        ))}
      </div>
    </section>
  </div>
);
