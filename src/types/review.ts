export interface ReviewSender {
  name: string;
  avatarUrl: string;
}

export interface Review {
  id: string;
  user: ReviewSender;
  rating: number;
  comment: string;
  date: string;
}
