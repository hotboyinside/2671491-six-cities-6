import { Navigate, Outlet } from 'react-router-dom';
import { AppRoute } from '../../const/pageRoutes';

export function PublicRoutes() {
  const hasAccess = false;

  return hasAccess ? <Navigate to={AppRoute.Main} /> : <Outlet />;
}
