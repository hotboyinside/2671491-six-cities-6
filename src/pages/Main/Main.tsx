import { PlaceCard } from '../../components/PlaceCard';
import './main.css';

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

interface PlaceCard {
  id: string;
  image: string;
  price: number;
  premium: boolean;
  rating: number;
  title: string;
  type: string;
  bookmarked: boolean;
}

const PLACE_CARDS: PlaceCard[] = [
  {
    id: 'amsterdam-apt-01',
    image: 'img/apartment-01.jpg',
    price: 120,
    premium: true,
    rating: 80,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    bookmarked: false,
  },
  {
    id: 'amsterdam-room-01',
    image: 'img/room.jpg',
    price: 80,
    premium: false,
    rating: 80,
    title: 'Wood and stone place',
    type: 'Room',
    bookmarked: true,
  },
  {
    id: 'amsterdam-apt-02',
    image: 'img/apartment-02.jpg',
    price: 132,
    premium: false,
    rating: 80,
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    bookmarked: false,
  },
  {
    id: 'amsterdam-apt-03',
    image: 'img/apartment-03.jpg',
    price: 180,
    premium: true,
    rating: 100,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    bookmarked: false,
  },
  {
    id: 'amsterdam-room-02',
    image: 'img/room.jpg',
    price: 80,
    premium: false,
    rating: 80,
    title: 'Wood and stone place',
    type: 'Room',
    bookmarked: true,
  },
];


export const Main = () => (
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
              {PLACE_CARDS.map((card) => (
                <PlaceCard key={card.id} {...card} />
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
