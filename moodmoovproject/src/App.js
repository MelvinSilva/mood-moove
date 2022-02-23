import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Contact from './pages/Contact';
import Accueil from './pages/Accueil';
import AvisClients from './pages/AvisClients';
import OuSortir from './components/Home/OuSortir';
import UnePref from './components/Home/UnePref';
import AutreChoix from './components/Home/AutreChoix';
import Mooddaypopup from './components/Moodday/Mooddaypopup';
import Mooddaypopup2 from './components/Moodday/Mooddaypopup2';
import Mooddaypopup3 from './components/Moodday/Mooddaypopup3';
import Mooddaypopup4 from './components/Moodday/Mooddaypopup4';
import Mooddaypopup5 from './components/Moodday/Mooddaypopup5';


<<<<<<< HEAD




=======
>>>>>>> 6118c88b1fb598e14340a22df2cd30f9fba1cc81
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
          <Route path="/mooddaypop" element={<Mooddaypopup />} />
          <Route path="/mooddaypop2" element={<Mooddaypopup2 />} />
          <Route path="/mooddaypop3" element={<Mooddaypopup3 />} />
          <Route path="/mooddaypop4" element={<Mooddaypopup4 />} />
          <Route path="/mooddaypop5" element={<Mooddaypopup5 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
