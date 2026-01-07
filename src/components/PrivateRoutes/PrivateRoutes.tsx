import { Navigate, Outlet } from 'react-router-dom';
import { AppRoute } from '../../const/pageRoutes';

export function PrivateRoutes(): JSX.Element {
  const hasAccess = false;

  return hasAccess ? <Outlet /> : <Navigate to={AppRoute.Login} />;
}
