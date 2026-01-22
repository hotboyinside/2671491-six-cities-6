import classNames from 'classnames';
import { useEffect, useMemo } from 'react';
import { Navigate } from 'react-router-dom';

import { OfferMeta } from '../..';
import { Card } from '../../../../components/offer/components/card';
import { setErrorMessage } from '../../../error/features/set-error-message';
import RouterPaths from '../../../router/constants/router-paths';
import { Loader } from '../../../ui/components/loader';
import { useFavoriteOffersQuery } from '../../hooks/use-favorite-offers-query';

export function Favorites() {
  const { data: favoriteOffers, isLoading, isError, error } = useFavoriteOffersQuery();

  useEffect(() => {
    if (isError) {
      setErrorMessage(error?.cause?.message);
    }
  }, [isError, error]);

  const offersByCity = useMemo(() => {
    const grouped: Record<string, OfferMeta[]> = {};
    favoriteOffers?.forEach((offer) => {
      const cityName = offer.city.name;
      if (!grouped[cityName]) {
        grouped[cityName] = [];
      }
      grouped[cityName].push(offer);
    });
    return grouped;
  }, [favoriteOffers]);

  const isEmpty = !favoriteOffers || favoriteOffers.length === 0;

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Navigate to={RouterPaths.error} />;
  }

  return (
    <section className={classNames('favorites', isEmpty && 'favorites--empty')}>
      {isEmpty ? (
        <div className="favorites__status-wrapper">
          <h1 className="visually-hidden">Favorites (empty)</h1>
          <b className="favorites__status">Nothing yet saved.</b>
          <p className="favorites__status-description">
            Save properties to narrow down search or plan your future trips.
          </p>
        </div>
      ) : (
        <>
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {Object.entries(offersByCity).map(([cityName, cityOffers]) => (
              <li className="favorites__locations-items" key={cityName}>
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>{cityName}</span>
                    </a>
                  </div>
                </div>

                <div className="favorites__places">
                  {cityOffers.map((offer) => (
                    <Card
                      key={offer.id}
                      offer={offer}
                      imageURL={offer.previewImage}
                      variant="favorites"
                    />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
