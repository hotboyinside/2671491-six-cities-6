const FEATURES = [
  { id: 'feature-entire', type: 'entire', text: 'Apartment' },
  { id: 'feature-bedrooms', type: 'bedrooms', text: '3 Bedrooms' },
  { id: 'feature-adults', type: 'adults', text: 'Max 4 adults' },
];

export const FeaturesList = () => (
  <ul className="offer__features">
    {FEATURES.map((feature) => (
      <li
        key={feature.id}
        className={`offer__feature offer__feature--${feature.type}`}
      >
        {feature.text}
      </li>
    ))}
  </ul>
);
