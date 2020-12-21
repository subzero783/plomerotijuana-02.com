import React from 'react';

import './App.css';


import Main from './Components/Main/Main';
import MainRouter from './Components/MainRouter/MainRouter';


class App extends React.Component{

  render(){
    return(
      <div className="App">

        <MainRouter/>

        <Main/>
        
      </div>
    );
  }
}


export default App;

