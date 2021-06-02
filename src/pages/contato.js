import React from 'react';
import styled from 'styled-components'
import Contato from '../components/PaginaContato/index'
import Header from '../components/Header/index'
import Footer from '../components/Footer/Footer'

const Container = styled.section`
  background: #262626;
  width:100%;
  min-height:100vh;
`

export default function PaginaContato() {
  return (
    <>
      <Header />
      <Container>
        <Contato />
      </Container>
      <Footer />
    </>
  );
}