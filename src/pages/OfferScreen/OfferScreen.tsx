import { Header } from '../../components/Header';
import { OFFERS } from '../../mocks/offers';
import { Gallery } from './Gallery';
import { NearbyPlaces } from './NearbyPlaces';
import { OfferDetails } from './OfferDetails';

export function OfferScreen() {
  const currentOffer = OFFERS[0];

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <Gallery images={currentOffer.images} />
          <div className="offer__container container">
            <OfferDetails offer={currentOffer} />
          </div>
          <section className="offer__map map"></section>
        </section>
        <NearbyPlaces />
      </main>
    </div>
  );
}
