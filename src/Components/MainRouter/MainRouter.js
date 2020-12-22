import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';

const pages = [{
  path: '/',
  name: 'Pagina principal',
  component: Home
},{
  path: '/about',
  name: 'Sobre Nosotros',
  component: About
}];
class MainRouter extends React.Component{

  render(){
    return(
      <Router> 
        <nav>
          <ul>
            {
              pages.map(item => (
                <li>
                  <Link exact to={item.path}>{item.name}</Link>
                </li>
              ))
            }
          </ul>
        </nav>
        <Switch>
          { 
            pages.map(item => (
              <Route 
                exact 
                path={item.path} 
                component={item.component}
              />
            ))
          }
        </Switch>
      </Router>
    );
  }

}


export default MainRouter;