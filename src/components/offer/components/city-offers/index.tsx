import { Dispatch, SetStateAction, useCallback, useMemo } from 'react';
import { Offer, OfferMeta } from '../..';
import { City } from '../../../../components/city/types';
import CardList from '../../../../components/offer/components/card-list';
import { getComparatorBySortType } from '../../helpers/get-comparator-by-sort-type';
import { SortSelect } from '../sort-select';
import { useSortSelectOptions } from '../sort-select/hooks/use-sort-select-options';

export default function CityOffers({
  city,
  offers,
  setCurrentOffer,
}: {
  city: City;
  offers: OfferMeta[];
  setCurrentOffer: Dispatch<SetStateAction<Offer | undefined>>;
}) {
  const { select, selectedOption } = useSortSelectOptions();
  const handleCardMouseEnter = useCallback(
    ({ offer }: { offer: OfferMeta }) => setCurrentOffer(offer),
    [setCurrentOffer]
  );

  const comparator = useMemo(
    () => getComparatorBySortType(selectedOption.value),
    [selectedOption]
  );
  const sortedOffers = useMemo(
    () => [...offers].sort(comparator),
    [comparator, offers]
  );

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {sortedOffers.length} places to stay in {city.name}
      </b>
      <SortSelect select={select} />
      <div className="cities__places-list places__list tabs__content">
        <CardList offers={sortedOffers} onCardMouseEnter={handleCardMouseEnter} />
      </div>
    </section>
  );
}
