import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Impressum from './components/Impressum'; // Import the Impressum component

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/impressum" element={<Impressum />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// Note: Make sure to create the Home, About, and Services components if they don't already exist
