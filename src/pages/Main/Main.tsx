import { PlaceCard } from '../../components/PlaceCard';
import { PlaceVariant } from '../../types/placeVariants';

const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

const SORT_OPTIONS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

type MainProps = {
  placeVariants: PlaceVariant[];
};

export const Main = ({ placeVariants }: MainProps) => (
  <div className="page page--gray page--main">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active" href="#">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a
                  className="header__nav-link header__nav-link--profile"
                  href="#"
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper" />
                  <span className="header__user-name user__name">
                    Oliver.conner@gmail.com
                  </span>
                  <span className="header__favorite-count">3</span>
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">
                  <span className="header__signout">Sign out</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>

      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {CITIES.map((city) => (
              <li key={city} className="locations__item">
                <a
                  className={`locations__item-link tabs__item${
                    city === 'Amsterdam' ? ' tabs__item--active' : ''
                  }`}
                  href="#"
                >
                  <span>{city}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>

            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select" />
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                {SORT_OPTIONS.map((option, index) => (
                  <li
                    key={option}
                    className={`places__option${
                      index === 0 ? ' places__option--active' : ''
                    }`}
                    tabIndex={0}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </form>

            <div className="cities__places-list places__list tabs__content">
              {placeVariants.map((placeVariant) => (
                <PlaceCard key={placeVariant.id} {...placeVariant} />
              ))}
            </div>
          </section>

          <div className="cities__right-section">
            <section className="cities__map map" />
          </div>
        </div>
      </div>
    </main>
  </div>
);
