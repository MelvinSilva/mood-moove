import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Contact from './pages/Contact';
import Accueil from './pages/Accueil';
import AvisClients from './pages/AvisClients';
import Mooddaypopup from './components/Moodday/Mooddaypopup';
import Mooddaypopup2 from './components/Moodday/Mooddaypopup2';
import Mooddaypopup3 from './components/Moodday/Mooddaypopup3';
import Mooddaypopup4 from './components/Moodday/Mooddaypopup4';
import Mooddaypopup5 from './components/Moodday/Mooddaypopup5';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
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
