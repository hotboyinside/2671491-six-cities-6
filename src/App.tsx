import { FavoritesPlaces } from './pages/FavoritesPlaces';
import { Main } from './pages/Main';
import { Offer } from './pages/Offer';
import { PlaceVariant } from './types/placeVariants';

type AppProps = {
  placeVariants: PlaceVariant[];
  favoritePlaces: PlaceVariant[];
};

export default function App({ placeVariants, favoritePlaces }: AppProps) {
  return (
    <>
      <Main placeVariants={placeVariants} />
      <FavoritesPlaces favoritePlaces={favoritePlaces} />
      <Offer />
    </>
  );
}
