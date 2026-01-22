import classNames from 'classnames';
import { Link } from 'react-router-dom';
import RouterPaths from '../../../router/constants/router-paths';
import { useCitiesQuery } from '../../hooks/use-cities-query';
import { useCurrentCity } from '../../hooks/use-current-city';

type NavbarVariant = 'locations';

function getNavbarClasses(variant: NavbarVariant) {
  if (variant === 'locations') {
    return {
      listClass: 'locations__list',
      linkClass: 'locations__item-link',
    };
  }
  return { listClass: '', linkClass: '' };
}

interface NavbarProps {
  variant: NavbarVariant;
}

export function Navbar({ variant }: NavbarProps) {
  const { data: cities = [] } = useCitiesQuery();
  const currentCity = useCurrentCity();
  const { listClass, linkClass } = getNavbarClasses(variant);

  return (
    <ul className={classNames('tabs__list', listClass)} data-testid="cities-navbar">
      {cities.map((city) => {
        const isActive = city.name === currentCity.name;

        return (
          <li key={city.name} className="locations__item">
            <Link
              className={classNames('tabs__item', linkClass, { 'tabs__item--active': isActive })}
              to={RouterPaths.city({ city: city.name })}
            >
              <span>{city.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
