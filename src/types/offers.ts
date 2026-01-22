export interface Location {
  latitude: number;
  longitude: number;
}

export interface Host {
  name: string;
  isPro: boolean;
  avatarUrl: string;
  description: string[];
}

export interface OfferImage {
  id: string;
  src: string;
}

export interface Offer {
  id: string;
  title: string;
  type: string;
  price: number;
  rating: number;
  isPremium: boolean;
  isFavorite: boolean;
  bedrooms: number;
  maxAdults: number;
  mainImage: string;
  images: OfferImage[];
  goods: string[];
  host: Host;
  location: Location;
}
