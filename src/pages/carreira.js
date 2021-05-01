import React from 'react';
import styled from 'styled-components'
import Header from '../components/Header/Header.js'

const Container = styled.section`
  font-size: 50px;
  background:red;
  width:100%;
  min-height:100vh;
`

export default function Carreira() {
  return (
    <Container>
      <Header />

    </Container>
  );
}