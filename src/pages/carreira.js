import React from 'react';
import styled from 'styled-components'
import Header from '../components/Header/Header.js'

const Title = styled.h1`
  font-size: 50px;
  background:red;
  width:100%;
  height:200px;
`

export default function Carreira() {
  return (
    <React.Fragment>
      <Header />
      <Title />
    </React.Fragment>
  );
}