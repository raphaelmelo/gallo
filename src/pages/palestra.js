import React from 'react';
import styled from 'styled-components'
import Header from '../components/Header/index'

//Styled Components
const Container = styled.section`
  background-color: #020202;
  color: white;
  width:100%;
  min-height:100vh;
`
const ParceriosBG = styled.article`
  background-color: #050505;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height:100vh;
  width:100%;
`
const ParceirosWrapper= styled.article`
display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  width:100%;
  
`

const ParceirosIMG = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width:10%;
  padding-bottom: 50px; 
`
const FraseWrapper = styled.section`
  display: flex;
  width: 100%;
  min-height:100vh;
  flex-direction: column;
  justify-content: center;
  text-align:justify;
`
const BlocoTexto = styled.section`
  align-self:center;
`
const Frase = styled.p`
  font-family: Bebas Neue;
  font-size: 20vh;
  margin: 0;
  padding: 0;
  width:100%;
  letter-spacing: 5px;
  color: #ffffff;

  span {
    color: #6CB2DA;
    font-family:Bebas Neue;
   }
`
const ParceirosTexto = styled.p`
  font-family: Bebas Neue;
  font-size: 12vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height:100%;
  width:100%;
`
const AspasUPWrapper = styled.section`
  width: 100%;
  display: flex;
  align-content: flex-end;
`
const ContatoP = styled.p`
  font-family: Bebas Neue;
  display: flex;
  justify-content: center;
  font-size: 7vh;
`
const ContatoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-self: center;
  min-height:100vh;
  width:100%;
  align-items: center;
  justify-content:center;
  

`
const ContatoForm = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 60vw;

  textarea {
    display: flex;
    width: 93.5%;
    padding: 15px;
    margin: 10px;
    border: 1px solid gray;
    border-radius: 4px;
    height: 150px;
    align-self: center;
    background-color: transparent;
    font-family: Bebas Neue;
    resize: vertical;
    color: white;
    font-size: 18px;
  }
`
const ContatoButton = styled.button`
   display: flex;
   align-self: center;
   align-items: center;
   justify-content: center;
   border: 0;
   border-radius: 5px;
   margin: 25px;
   width: 200px;
   height: 50px;
   font-family: Bebas Neue;
   font-size: 35px;
   text-align: center;

`
const ContatoInput = styled.input`
   padding: 15px;
   margin: 10px;
   border: 1px solid gray;
   border-radius: 4px;
   box-sizing: border-box;
   background-color: transparent;
   font-family: Bebas Neue;
   color: white;
   font-size: 18px;
`
export default function Palestra() {
    return (
        <div className="App">
            <Header></Header>
      <Container>
        <img src="https://res.cloudinary.com/gallo/image/upload/v1622505127/Group_18_z5jkhz.png" alt="" width="100%" height="100%" />
                <FraseWrapper>
          <BlocoTexto>
            <Frase><span>"</span><span>Futebol,</span>uma</Frase>
            <Frase>razão de <span>viver.</span><span>"</span></Frase>
          </BlocoTexto>
        </FraseWrapper>
        <ParceriosBG>
          <ParceirosTexto>PALESTRAS REALIZADAS</ParceirosTexto>
          <ParceirosWrapper>
          <ParceirosIMG src="https://res.cloudinary.com/gallo/image/upload/v1622075873/cbf_bvwe1w.png" alt="" />
          <ParceirosIMG src="https://res.cloudinary.com/gallo/image/upload/v1622074010/FMF_euxt90.png" alt="" />
          <ParceirosIMG src="https://res.cloudinary.com/gallo/image/upload/v1622074065/ebf_qh2ybi.png" alt="" />
          <ParceirosIMG src="https://res.cloudinary.com/gallo/image/upload/v1622075611/confutlogo1.png_oinekt.png" alt="" />
          <ParceirosIMG src="https://res.cloudinary.com/gallo/image/upload/v1622074071/fbtf_rtuk72.png" alt="" />
          <ParceirosIMG src="https://res.cloudinary.com/gallo/image/upload/v1622074073/stfp_wexqvx.png" alt="" />
          </ParceirosWrapper>
        </ParceriosBG>

        <ContatoWrapper>
          <ContatoP>ENTRE EM CONTATO PARA PALESTRAS</ContatoP>
          <ContatoForm action="" method="">
            <label />
            <ContatoInput type="text" placeholder="Nome" />
            <label />
            <ContatoInput type="email" placeholder="E-mail" />
            <label />
            <ContatoInput type="text" placeholder="Assunto" />
            <label />
            <textarea placeholder="Mensagem" rows="10" border-radius="4px" />
            <ContatoButton type="submit">ENVIAR</ContatoButton>
          </ContatoForm>
        </ContatoWrapper>
      </Container>
    </div >
    );
}