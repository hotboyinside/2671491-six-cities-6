export interface ReviewSender {
  name: string;
  avatar: string;
}

export interface Review {
  id: string;
  user: ReviewSender;
  rating: number;
  text: string;
  date: string;
}
