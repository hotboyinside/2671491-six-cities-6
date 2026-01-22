import React from 'react';
import ReactDOM from 'react-dom/client';
import '../markup/css/main.css';
import App from './App';
import { FAVORITE_PLACES } from './mocks/favoritePlaces';
import { OFFERS } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App favoritePlaces={FAVORITE_PLACES} offers={OFFERS} />
  </React.StrictMode>
);
