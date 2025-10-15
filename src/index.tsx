import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PLACE_CARDS } from './const/placeVariant';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placeVariants={PLACE_CARDS} />
  </React.StrictMode>
);
