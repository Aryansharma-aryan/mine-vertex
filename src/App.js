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

// Lazy-loaded components
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

// Admin
const Login = lazy(() => import('./pages/Login'));
const AllConsultants = lazy(() => import('./pages/AllConsultants'));
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute'));

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
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* Public routes */}
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

        {/* Admin routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route
          path="/admin/consultants"
          element={
            <ProtectedRoute>
              <AllConsultants />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </Suspense>
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
