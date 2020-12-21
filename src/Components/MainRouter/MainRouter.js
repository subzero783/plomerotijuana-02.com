import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Main from '../Main/Main';

class MainRouter extends React.Component{

  render(){
    return(
      <Router> 
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/servicios">Servicios</Link>
            </li>
            <li>
              <Link to="/nosotros">Nosotros</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/:handle">
            <Main/>
          </Route>
        </Switch>
      </Router>
    );
  }

}


export default MainRouter;