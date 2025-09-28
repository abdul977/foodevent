import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import HomePage from './pages/HomePage.tsx';
import VendorDetailPage from './pages/VendorDetailPage.tsx';
import EventDetailPage from './pages/EventDetailPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/vendor/:id" element={<VendorDetailPage />} />
          <Route path="/event/:id" element={<EventDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
