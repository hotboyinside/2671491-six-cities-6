import { Navigate, Outlet } from 'react-router-dom';
import { MAIN_ROUTE } from '../../const/pageRoutes';

export default function PublicRoutes() {
  const hasAccess = false;

  return hasAccess ? <Navigate to={MAIN_ROUTE} /> : <Outlet />;
}
