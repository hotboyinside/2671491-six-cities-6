import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoutes } from './components/PrivateRoutes/PrivateRoutes';
import PublicRoutes from './components/PublicRoutes/PublicRoutes';
import { FAVORITES_ROUTE, LOGIN_ROUTE, OFFER_ROUTE } from './const/pageRoutes';
import { FavoritesPlaces } from './pages/FavoritesPlaces';
import Login from './pages/Login/Login';
import { Main } from './pages/Main';
import NotFound from './pages/NotFound/NotFound';
import { Offer } from './pages/Offer';
import { PlaceVariant } from './types/placeVariants';

type AppProps = {
  placeVariants: PlaceVariant[];
  favoritePlaces: PlaceVariant[];
};

export default function App({ placeVariants, favoritePlaces }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main placeVariants={placeVariants} />} />
        <Route path={OFFER_ROUTE} element={<Offer />} />

        <Route element={<PublicRoutes />}>
          <Route path={LOGIN_ROUTE} element={<Login />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          {/* <Route path={SPECIFIC_OFFER_ROUTE} element={<Offer />} /> */}
          <Route
            path={FAVORITES_ROUTE}
            element={<FavoritesPlaces favoritePlaces={favoritePlaces} />}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
