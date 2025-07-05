import React, { useState, useEffect, lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigationType,
} from 'react-router-dom';
import Loader from './pages/Loader';
import Footer from './components/Footer';

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

function AppWrapper() {
  const location = useLocation();
  const navigationType = useNavigationType();

  const [routeLoading, setRouteLoading] = useState(false);

  useEffect(() => {
    if (navigationType === 'PUSH' || navigationType === 'POP') {
      setRouteLoading(true);
      const timer = setTimeout(() => {
        setRouteLoading(false);
      }, 600); // Simulate loading time
      return () => clearTimeout(timer);
    }
  }, [location]);

  if (routeLoading) return <Loader />;

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
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
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
