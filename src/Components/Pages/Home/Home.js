import React from 'react';
import Container from 'react-bootstrap/Container';

import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';


const Home = () => {
  return(
    <Container>
      <Header/>
        <p>home</p>
      <Footer/>
    </Container>
  );
}

export default Home;