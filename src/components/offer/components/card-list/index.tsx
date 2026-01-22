import { memo, MouseEvent } from 'react';
import { Card } from '../../../../components/offer/components/card';
import { OfferMeta } from '../../types';

interface CardListProps {
  offers: OfferMeta[];
  onCardClick?: (props: { offer: OfferMeta; event: MouseEvent<HTMLElement> }) => void;
  onCardMouseEnter?: (props: { offer: OfferMeta; event: MouseEvent<HTMLElement> }) => void;
}

function CardListComponent({ offers, onCardClick, onCardMouseEnter }: CardListProps) {
  const renderCard = (offer: OfferMeta) => {
    const handleClick = onCardClick
      ? (event: MouseEvent<HTMLElement>) => onCardClick({ offer, event })
      : undefined;

    const handleMouseEnter = onCardMouseEnter
      ? (event: MouseEvent<HTMLElement>) => onCardMouseEnter({ offer, event })
      : undefined;

    return (
      <Card
        key={offer.id}
        offer={offer}
        imageURL={offer.previewImage}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
      />
    );
  };

  return <>{offers.map(renderCard)}</>;
}

const CardList = memo(CardListComponent);
CardList.displayName = 'CardList';

export default CardList;
