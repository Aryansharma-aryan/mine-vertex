import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './pages/Loader';
import Footer from './components/Footer';

// Lazy Load Components
const HomePage = lazy(() => import('./components/HomePage'));
const Layout = lazy(() => import('./components/Layout'));
const AboutSection = lazy(() => import('./pages/AboutSection'));
const ServicesSection = lazy(() => import('./pages/ServicesSection'));
const TestPreparation = lazy(() => import('./pages/TestPrepration'));
const Contact = lazy(() => import('./pages/Contact'));
const GetQuote = lazy(() => import('./pages/GetQuote'));
const GetConsultant = lazy(() => import('./pages/GetConsultant'));
const ConsultationSection = lazy(() => import('./pages/Faq'));
const Team = lazy(() => import('./pages/Team'));

function App() {
  const [loading, setLoading] = useState(true);

  // Initial splash loader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // faster: 1s
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* HomePage (custom layout) */}
          <Route path="/" element={<HomePage />} />

          {/* All Other Pages (wrapped in Layout) */}
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
      </Suspense>
    </Router>
  );
}

export default App;
