import React from 'react';
import Home from '../components/PaginaInicial/Home/Home.js'
import Historia from '../components/PaginaInicial/Historia/Historia.js'
import Carreira from '../components/PaginaInicial/Carreira/Carreira.js'
import Contato from '../components/PaginaInicial/Contato/Contato.js'
import Frase from '../components/PaginaInicial/Frase/Frase.js'
import Footer from '../components/Footer/Footer.js'
import Header from '../components/Header/index'

export default function index() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Historia />
      <Carreira />
      <Contato />
      <Frase />
      <Footer />
    </React.Fragment>
  );
}
