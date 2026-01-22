import { Route, Routes } from 'react-router-dom';
import { Page404 } from '../../../pages/404';
import { Error } from '../../../pages/error';
import { Favorites } from '../../../pages/favorites';
import { Login } from '../../../pages/login';
import { Main } from '../../../pages/main';
import { Offer } from '../../../pages/offer';
import RouterPaths from '../constants/router-paths';
import { PrivateRoute } from './private-route';

const routeList = [
  { path: RouterPaths.login, element: <Login /> },
  { path: RouterPaths.cities, element: <Main /> },
  { path: RouterPaths.city({ city: ':city' }), element: <Main /> },
  { path: RouterPaths.offer({ id: ':id' }), element: <Offer /> },
  {
    path: RouterPaths.favorites,
    element: (
      <PrivateRoute>
        <Favorites />
      </PrivateRoute>
    ),
  },
  { path: RouterPaths.notFound, element: <Page404 /> },
  { path: RouterPaths.error, element: <Error /> },
  { path: '*', element: <Page404 /> },
];

export function AppRoutes() {
  return (
    <Routes>
      {routeList.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}
