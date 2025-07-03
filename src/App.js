import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import Layout from "./components/Layout";

import AboutSection from './pages/AboutSection';
import ServicesSection from './pages/ServicesSection';
import TestPreparation from './pages/TestPrepration';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import GetQuote from './pages/GetQuote';
import Loader from './pages/Loader';
import GetConsultant from './pages/GetConsultant';
import ConsultationSection from './pages/Faq';
import Team from './pages/Team';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      <Routes>
        {/* ✅ Homepage without Layout wrapper (has its own navbar) */}
        <Route path="/" element={<HomePage />} />

        {/* ✅ All other pages use Layout with shared transparent navbar */}
        <Route element={<Layout />}>
          <Route path="/about" element={<AboutSection />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/test-preparation" element={<TestPreparation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<GetQuote />} />
          <Route path="/consultant" element={<GetConsultant />} />
          <Route path="/faq" element={<ConsultationSection />} />
          <Route path="/team" element={<Team />} />
        </Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
