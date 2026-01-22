import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { getRandomItem } from '../../../../utils/array';
import RouterPaths from '../../../router/constants/router-paths';
import { Loader } from '../../../ui/components/loader';
import defaultCity from '../../constants/default-city';
import { useCitiesQuery } from '../../hooks/use-cities-query';

interface RandomCityLinkProps {
  className?: string;
}

export function RandomCityLink({ className }: RandomCityLinkProps) {
  const { data: cities, isLoading } = useCitiesQuery();

  const cityToShow = useMemo(() => cities && cities.length > 0 ? getRandomItem(cities) : defaultCity, [cities]);

  if (isLoading) {
    return <Loader />;
  }

  const linkTarget = RouterPaths.city({ city: cityToShow.name });

  return (
    <Link
      to={linkTarget}
      className={className}
      data-testid="random-city-link"
    >
      <span>{cityToShow.name}</span>
    </Link>
  );
}
