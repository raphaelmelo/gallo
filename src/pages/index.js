import React from 'react';
import styled from 'styled-components'
import Header from '../components/Header/Header.js'

const Title = styled.h1`
  font-size: 50px;
`

export default function Home() {
  return (
    <React.Fragment>
      <Header />
    </React.Fragment>
  );
}
