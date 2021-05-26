import React from 'react';
import styled from 'styled-components'
import Home from '../components/PaginaCarreira/Home/Home'

const Container = styled.section`
  font-size: 50px;
  background: #262626;
  width:100%;
  min-height:100vh;
`

export default function Carreira() {
  return (
    <Container>
      <Home />
    </Container>
  );
}