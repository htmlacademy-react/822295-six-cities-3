import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {placeCardMock} from './mock/place-card.mock';

export const Setting = {
  CardCount: 10
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      cardCount = {Setting.CardCount}
      placeCardInfo={placeCardMock}
    />
  </React.StrictMode>
);
