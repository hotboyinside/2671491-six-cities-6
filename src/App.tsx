import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoutes } from './components/PrivateRoutes';
import { PublicRoutes } from './components/PublicRoutes';
import { AppRoute } from './consts/pageRoutes';
import { FavoritesPlacesScreen } from './pages/FavoritesPlacesScreen';
import { LoginScreen } from './pages/LoginScreen';
import { MainScreen } from './pages/MainScreen';
import { NotFoundScreen } from './pages/NotFoundScreen';
import { OfferScreen } from './pages/OfferScreen';
import { Offer } from './types/offers';
import { PlaceVariant } from './types/placeVariants';

type AppProps = {
  favoritePlaces: PlaceVariant[];
  offers: Offer[];
};

export default function App({ favoritePlaces, offers }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainScreen offers={offers} />} />
        <Route path={AppRoute.OfferId} element={<OfferScreen />} />

        <Route element={<PublicRoutes />}>
          <Route path={AppRoute.Login} element={<LoginScreen />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route
            path={AppRoute.Favorites}
            element={<FavoritesPlacesScreen favoritePlaces={favoritePlaces} />}
          />
        </Route>

        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
