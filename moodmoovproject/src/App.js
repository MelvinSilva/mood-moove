import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Contact from './pages/Contact';
import Events from './pages/Events';
import Ticket from './pages/Ticket';
import Accueil from './pages/Accueil';



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
