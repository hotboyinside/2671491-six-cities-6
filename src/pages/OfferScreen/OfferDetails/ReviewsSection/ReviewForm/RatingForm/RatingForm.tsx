const RATING_STARS = [5, 4, 3, 2, 1];

function getStarTitle(rating: number): string {
  const TITLES: { [key: number]: string } = {
    5: 'perfect',
    4: 'good',
    3: 'not bad',
    2: 'badly',
    1: 'terribly',
  };
  return TITLES[rating] || '';
}

export const RatingForm = () => (
  <div className="reviews__rating-form form__rating">
    {RATING_STARS.map((star) => (
      <div key={star}>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={star}
          id={`${star}-stars`}
          type="radio"
        />
        <label
          htmlFor={`${star}-stars`}
          className="reviews__rating-label form__rating-label"
          title={getStarTitle(star)}
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
    ))}
  </div>
);
