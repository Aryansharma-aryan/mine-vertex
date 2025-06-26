import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Footer from './components/Footer';
import CoachingCards from './pages/CoachingCards';
import TopHeader from "./components/TopHeader"
import ContactSection from './pages/ContactSection'







function App() {
  return (
     <Router>
      <TopHeader/>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/coaching" element={<CoachingCards />} />
            <Route path="/contact" element={<ContactSection />} />




      </Routes>
      <Footer/>

    </Router>
  );
}

export default App;
