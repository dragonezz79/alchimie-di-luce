import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import HomeSalesPage from './HomeSalesPage.jsx';
import ReadingsSalesPage from './ReadingsSalesPage.jsx';
import { MapSalesPage, ProductsSalesPage } from './SpecialPages.jsx';

const path = window.location.pathname.replace(/\/$/, '') || '/';
const RootPage = path === '/'
  ? HomeSalesPage
  : path === '/prodotti/mappa-di-luce'
    ? MapSalesPage
    : path === '/prodotti'
      ? ProductsSalesPage
      : path === '/letture'
        ? ReadingsSalesPage
        : App;

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootPage />
  </React.StrictMode>
);
