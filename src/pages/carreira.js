import React from 'react';
import styled from 'styled-components'
import Home from '../components/PaginaCarreira/Home/Home'
import Header from '../components/Header/index'
import Footer from '../components/Footer/Footer'
import Times from '../components/PaginaCarreira/CarreiraJogador/Times'

const Container = styled.section`
  font-size: 50px;
  background: #262626;
  width:100%;
  min-height:100vh;
`

export default function Carreira() {
  return (
    <>
      <Header />
      <Container>
        <Home />
        <Times />
      </Container>
      <Footer />
    </>
  );
}