import { PlaceCard } from '../../../components/PlaceCard';
import { NEARBY_PLACES } from '../../../mocks/nearbyPlaces';

export const NearbyPlaces = () => (
  <div className="container">
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {NEARBY_PLACES.map((place) => (
          <PlaceCard key={place.id} {...place} onClick={() => {}} />
        ))}
      </div>
    </section>
  </div>
);
