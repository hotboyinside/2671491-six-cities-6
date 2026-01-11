import { OfferImage } from '../../../types/offers';

type GalleryProps = {
  images: OfferImage[];
};

export const Gallery = ({ images }: GalleryProps) => (
  <div className="offer__gallery-container container">
    <div className="offer__gallery">
      {images.map((image) => (
        <div key={image.id} className="offer__image-wrapper">
          <img className="offer__image" src={image.src} alt="Photo studio" />
        </div>
      ))}
    </div>
  </div>
);
