import classNames from 'classnames';
import { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { useAuthCheck } from '../../components/auth/hooks/use-auth-check';
import { setErrorMessage } from '../../components/error/features/set-error-message';
import { useOffersQuery } from '../../components/offer';
import { Favorites as FavoritesView } from '../../components/offer/components/favorites';
import RouterPaths from '../../components/router/constants/router-paths';
import { Header } from '../../components/ui/components/header';
import { Loader } from '../../components/ui/components/loader';

export function Favorites() {
  useAuthCheck();

  const { data: offers, isLoading, isError, error } = useOffersQuery();

  useEffect(() => {
    if (isError) {
      setErrorMessage(error?.cause?.message);
    }
  }, [isError, error]);

  if (isLoading || !offers) {
    return <Loader />;
  }

  if (isError) {
    return <Navigate to={RouterPaths.error} />;
  }

  const mainClass = classNames(
    'page__main page__main--favorites',
    offers.length === 0 && 'page__main--favorites-empty'
  );

  return (
    <div className="page" data-testid="favorites-page">
      <Header />

      <main className={mainClass}>
        <div className="page__favorites-container container">
          <FavoritesView />
        </div>
      </main>

      <footer className="footer container">
        <Link className="footer__logo-link" to={RouterPaths.cities}>
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </Link>
      </footer>
    </div>
  );
}
