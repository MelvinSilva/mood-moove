import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Contact from './pages/Contact';
import Accueil from './pages/Accueil';
import AvisClients from './pages/AvisClients';
import OuSortir from './components/Home/OuSortir';
import UnePref from './components/Home/UnePref';
import AutreChoix from './components/Home/AutreChoix';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/accueil"/>} />
          <Route path="/accueil" element={<Accueil />} >
            <Route index element={<OuSortir />} />
            <Route path="unepref" element={<UnePref />} />
            <Route path="autrechoix" element={<AutreChoix />} />
          </Route>
          <Route path="/avis" element={<AvisClients />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
