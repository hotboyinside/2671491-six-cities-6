import { REVIEWS } from '../../../../mocks/reviews';
import { ReviewForm } from './ReviewForm';
import { ReviewItem } from './ReviewItem';

export const ReviewsSection = () => (
  <section className="offer__reviews reviews">
    <h2 className="reviews__title">
      Reviews · <span className="reviews__amount">{REVIEWS.length}</span>
    </h2>
    <ul className="reviews__list">
      {REVIEWS.map((review) => (
        <ReviewItem key={review.id} {...review} />
      ))}
    </ul>
    <ReviewForm />
  </section>
);
