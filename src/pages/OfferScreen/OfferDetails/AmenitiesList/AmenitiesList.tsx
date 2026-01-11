type AmenitiesListProps = {
  goods: string[];
};

export const AmenitiesList = ({ goods }: AmenitiesListProps) => (
  <div className="offer__inside">
    <h2 className="offer__inside-title">What&apos;s inside</h2>
    <ul className="offer__inside-list">
      {goods.map((amenity) => (
        <li key={amenity} className="offer__inside-item">
          {amenity}
        </li>
      ))}
    </ul>
  </div>
);
