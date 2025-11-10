import { Review } from '../../../../types/review';
import { ReviewForm } from './ReviewForm';
import { ReviewItem } from './ReviewItem';

const REVIEWS: Review[] = [
  {
    id: 'review_max',
    user: { name: 'Max', avatar: 'img/avatar-max.jpg' },
    rating: 80,
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2019-04-24',
  },
];

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
