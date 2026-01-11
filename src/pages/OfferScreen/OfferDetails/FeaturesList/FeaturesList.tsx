export type FeaturesListProps = {
  type: string;
  bedrooms: number;
  maxAdults: number;
};

export const FeaturesList = ({
  type,
  bedrooms,
  maxAdults,
}: FeaturesListProps) => {
  const features = [
    {
      type: 'entire',
      text: type,
    },
    {
      type: 'bedrooms',
      text: `${bedrooms} Bedroom${bedrooms > 1 ? 's' : ''}`,
    },
    {
      type: 'adults',
      text: `Max ${maxAdults} adults`,
    },
  ];

  return (
    <ul className="offer__features">
      {features.map((feature) => (
        <li
          key={feature.type}
          className={`offer__feature offer__feature--${feature.type}`}
        >
          {feature.text}
        </li>
      ))}
    </ul>
  );
};
