import { Navigate, Outlet } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../const/pageRoutes';

export function PrivateRoutes(): JSX.Element {
  const hasAccess = false;

  return hasAccess ? <Outlet /> : <Navigate to={LOGIN_ROUTE} />;
}
