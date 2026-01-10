const GALLERY_IMAGES = [
  { id: 'gallery-1', src: 'img/room.jpg' },
  { id: 'gallery-2', src: 'img/apartment-01.jpg' },
  { id: 'gallery-3', src: 'img/apartment-02.jpg' },
  { id: 'gallery-4', src: 'img/apartment-03.jpg' },
  { id: 'gallery-5', src: 'img/studio-01.jpg' },
  { id: 'gallery-6', src: 'img/apartment-01.jpg' },
];

export const Gallery = () => (
  <div className="offer__gallery-container container">
    <div className="offer__gallery">
      {GALLERY_IMAGES.map((image) => (
        <div key={image.id} className="offer__image-wrapper">
          <img className="offer__image" src={image.src} alt="Photo studio" />
        </div>
      ))}
    </div>
  </div>
);
