import clsx from 'clsx';
import { Offer } from '../../../types/offers';
import { calcRatingWidth } from '../../../utils/calcRatingWidth';
import { AmenitiesList } from './AmenitiesList';
import { FeaturesList } from './FeaturesList';
import { HostInfo } from './HostInfo';
import { ReviewsSection } from './ReviewsSection';

type OfferDetailsProps = {
  offer: Offer;
};

export const OfferDetails = ({ offer }: OfferDetailsProps) => {
  const {
    title,
    type,
    bedrooms,
    maxAdults,
    rating,
    price,
    goods,
    host,
    isPremium,
    isFavorite,
  } = offer;

  return (
    <div className="offer__wrapper">
      {isPremium && (
        <div className="offer__mark">
          <span>Premium</span>
        </div>
      )}

      <div className="offer__name-wrapper">
        <h1 className="offer__name">{title}</h1>
        <button
          className={clsx('offer__bookmark-button', 'button', {
            'offer__bookmark-button--active': isFavorite,
          })}
          type="button"
        >
          <svg className="offer__bookmark-icon" width="31" height="33">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="offer__rating rating">
        <div className="offer__stars rating__stars">
          <span style={{ width: calcRatingWidth(rating) }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="offer__rating-value rating__value">{rating}</span>
      </div>
      <FeaturesList type={type} bedrooms={bedrooms} maxAdults={maxAdults} />
      <div className="offer__price">
        <b className="offer__price-value">€{price}</b>
        <span className="offer__price-text">&nbsp;night</span>
      </div>
      <AmenitiesList goods={goods} />
      <HostInfo {...host} />
      <ReviewsSection />
    </div>
  );
};
