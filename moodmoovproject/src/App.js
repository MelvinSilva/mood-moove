import React from 'react';
import './styles/index.scss'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Accueil from './pages/Accueil'
import Contact from './pages/Contact';
import Events from './pages/Events';
import Ticket from './pages/Ticket'




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/billeterie" exact component={Ticket} />
          <Route path="/events" exact component={Events} />
          <Route path="/contact" exact component={Contact} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
