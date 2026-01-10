import { Header } from '../../components/Header';
import { Gallery } from './Gallery';
import { NearbyPlaces } from './NearbyPlaces';
import { OfferDetails } from './OfferDetails';

export function OfferScreen() {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <Gallery />
          <div className="offer__container container">
            <OfferDetails />
          </div>
          <section className="offer__map map"></section>
        </section>
        <NearbyPlaces />
      </main>
    </div>
  );
}
