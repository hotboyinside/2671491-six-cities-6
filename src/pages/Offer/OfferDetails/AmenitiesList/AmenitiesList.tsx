const AMENITIES = [
  { id: 'amenity-wifi', name: 'Wi-Fi' },
  { id: 'amenity-washing', name: 'Washing machine' },
  { id: 'amenity-towels', name: 'Towels' },
  { id: 'amenity-heating', name: 'Heating' },
  { id: 'amenity-coffee', name: 'Coffee machine' },
  { id: 'amenity-baby', name: 'Baby seat' },
  { id: 'amenity-kitchen', name: 'Kitchen' },
  { id: 'amenity-dishwasher', name: 'Dishwasher' },
  { id: 'amenity-tv', name: 'Cabel TV' },
  { id: 'amenity-fridge', name: 'Fridge' },
];

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
