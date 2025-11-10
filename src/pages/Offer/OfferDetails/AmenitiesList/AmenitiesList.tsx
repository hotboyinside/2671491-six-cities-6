import { AMENITIES } from '../../../../const/amenities';

export const AmenitiesList = () => (
  <div className="offer__inside">
    <h2 className="offer__inside-title">What&apos;s inside</h2>
    <ul className="offer__inside-list">
      {AMENITIES.map((amenity) => (
        <li key={amenity.id} className="offer__inside-item">
          {amenity.name}
        </li>
      ))}
    </ul>
  </div>
);
