import 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Impressum from './components/Impressum';
import Interaktionen from './components/Interaktionen';
import ZooNewsComponent from "./components/News"
import Home from './components/Home'
import NewsDetails from './components/NewsDetails';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/impressum" element={<ImpressumPage />} />
        <Route path="/Interaktionen" element={<InteraktionenPage />} />
        <Route path="/News" element={<NewsPage />} />
        <Route path="/news/:newsId" element={<NewsDetailsPage />} /> {/* New route for news details */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

// eslint-disable-next-line react/prop-types
const AnimatedPage = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {children}
  </motion.div>
);
const NewsDetailsPage = () => (
  <AnimatedPage>
    <NewsDetails />
  </AnimatedPage>
);

const ImpressumPage = () => (
  <AnimatedPage>
    <Impressum />
  </AnimatedPage>
);
const HomePage = () => (
  <AnimatedPage>
    <Home />
  </AnimatedPage>
);
const NewsPage = () => (
  <AnimatedPage>
    <ZooNewsComponent />
  </AnimatedPage>
);

const InteraktionenPage = () => (
  <AnimatedPage>
    <Interaktionen />
  </AnimatedPage>
);

export default App;
