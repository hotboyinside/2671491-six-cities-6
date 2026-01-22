import { Navigate, Outlet } from 'react-router-dom';
import { AppRoute } from '../../consts/pageRoutes';

export function PrivateRoutes(): JSX.Element {
  const hasAccess = true;

  return hasAccess ? <Outlet /> : <Navigate to={AppRoute.Login} />;
}
