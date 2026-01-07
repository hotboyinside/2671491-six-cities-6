import { AmenitiesList } from './AmenitiesList';
import { FeaturesList } from './FeaturesList';
import { HostInfo } from './HostInfo';
import { ReviewsSection } from './ReviewsSection';

export const OfferDetails = () => (
  <div className="offer__wrapper">
    <div className="offer__mark">
      <span>Premium</span>
    </div>
    <div className="offer__name-wrapper">
      <h1 className="offer__name">
        Beautiful &amp; luxurious studio at great location
      </h1>
      <button className="offer__bookmark-button button" type="button">
        <svg className="offer__bookmark-icon" width="31" height="33">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    </div>
    <div className="offer__rating rating">
      <div className="offer__stars rating__stars">
        <span style={{ width: '80%' }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="offer__rating-value rating__value">4.8</span>
    </div>
    <FeaturesList />
    <div className="offer__price">
      <b className="offer__price-value">€120</b>
      <span className="offer__price-text">&nbsp;night</span>
    </div>
    <AmenitiesList />
    <HostInfo />
    <ReviewsSection />
  </div>
);
