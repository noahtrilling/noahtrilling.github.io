import Container from '@mui/material/Container';
import React from 'react';
import About from './components/About';
import Header from './components/Header';

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <About />
      </Container>
    </React.Fragment>
  );
}
