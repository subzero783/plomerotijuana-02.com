import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Container from 'react-bootstrap/Container';


class Main extends React.Component{

  render(){
    return(
      <Container>
        <Header/>
        <Footer/>
      </Container>
    );
  }
}

export default Main;