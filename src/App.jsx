import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import GnaPage from './pages/GnaPage.jsx';
import SeciTendersPage from './pages/SeciTendersPage.jsx';
import './styles/main.css';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gna" element={<GnaPage />} />
        <Route path="/seci-tenders" element={<SeciTendersPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
