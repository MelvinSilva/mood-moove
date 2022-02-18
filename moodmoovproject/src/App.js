import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from './pages/Contact';
import Accueil from './pages/Accueil';
import AvisClients from './pages/AvisClients';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/avis" element={<AvisClients />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
