import React from 'react';
import styled from 'styled-components'
import Home from '../components/PaginaCarreira/Home/Home'
import Header from '../components/Header/index'
import Footer from '../components/Footer/Footer'
import TimesCarreiraJogador from '../components/PaginaCarreira/CarreiraJogador/Times'
import TimesCarreiraTreinador from '../components/PaginaCarreira/CarreiraTreinador/Times'
import ImagemCarreira from '../components/PaginaCarreira/CarreiraJogador/Imagem'
import Informacoes from '../components/PaginaCarreira/Home/Informacoes'
import ImagemJogador from '../components/PaginaCarreira/Home/ImagemJogador'

const Container = styled.section`
  font-size: 50px;
  background: #262626;
  width:100%;
  height:100%;
`

export default function Carreira() {
  return (
    <>
      <Header />
      <Container>
        <Home />
        <Informacoes />
        <ImagemJogador/>
        <TimesCarreiraJogador />
        <ImagemCarreira/>
        <TimesCarreiraTreinador />
      </Container>
      <Footer />
    </>
  );
}