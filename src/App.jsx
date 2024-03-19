import 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { motion } from 'framer-motion';

import './App.css';
import Navbar from './components/Navbar';
import Impressum from './components/Impressum';
import Interaktionen from './components/Interaktionen';
import ZooNewsComponent from "./components/News"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/impressum" element={<ImpressumPage />} /> 
        <Route path="/Interaktionen" element={<InteraktionenPage />} />
        <Route path="/News" element={<NewsPage />} /> 
      </Routes>
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

const ImpressumPage = () => (
  <AnimatedPage>
    <Impressum />
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
