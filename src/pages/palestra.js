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
const ImagemTopoWrapper = styled.article`
width: 100%;
height: 100%;
padding-top:25%;
`

const ImagemTopo = styled.img`
width: 100%;
height: 100%;

`



const ParceriosBG = styled.article`
  background-color: #040404;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height:70vh;
  width:100%;

  @media only screen and (max-width: 1025px) {
       min-height:30vh;
       align-items: center;
       

        
    }
`
const ParceirosWrapper= styled.article`
display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  width:100%;

  @media only screen and (max-width: 1025px) {
       flex-wrap:wrap;
        
    }
  
`

const ParceirosIMG = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width:10%;
  padding-bottom: 50px;
  padding-top:30px; 

  @media only screen and (max-width: 1025px) {
       width:30%;
       justify-content:space-between;
       margin:20px 0 0 20px;

        
    }

`
const FraseWrapper = styled.section`
  display: flex;
  width: 100%;
  min-height:80vh;
  flex-direction: column;
  justify-content: center;
  text-align:justify;

  @media only screen and (max-width: 1025px) {
       min-height:40vh;
       align-items: center;
       

        
    }
`
const BlocoTexto = styled.section`
  align-self:center;
`
const Frase = styled.p`
  font-family: Bebas Neue;
  font-size: 16vh;
  margin: 0;
  padding: 0;
  width:100%;
  letter-spacing: 5px;
  color: #ffffff;

  @media only screen and (max-width: 1025px) {
       font-size: 5.5vh;
        
    }

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

  @media only screen and (max-width: 1025px) {
       font-size: 3vh;
        padding-top:4%;
    }
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
  padding-bottom: 5%;

  @media only screen and (max-width: 767px) {
       font-size: 3vh;
        padding-bottom: 10%;
        
    }
`
const ContatoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-self: center;
  min-height:100vh;
  width:100%;
  align-items: center;
  justify-content:center;
  
  @media only screen and (max-width: 767px) {
       min-height:50vh;
       padding-top: 10%;
        
    }
`
const ContatoForm = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  justify-content: center;
  align-items: center;

  textarea {
    width: 70%;
    display: flex;
    padding: 15px;
    margin: 10px;
    border: 1px solid gray;
    border-radius: 4px;
    height: 150px;
    align-self: center;
    background-color: transparent;
    font-family: Bebas Neue;
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
   width: 70%;
   padding: 15px;
   margin: 10px;
   border: 1px solid gray;
   border-radius: 4px;
   
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
      <ImagemTopoWrapper>
        <ImagemTopo src="https://res.cloudinary.com/gallo/image/upload/v1622505127/Group_18_z5jkhz.png" alt="" width="100%" height="100%" />
        </ImagemTopoWrapper>        
                <FraseWrapper>
          <BlocoTexto>
            <Frase><span>"</span><span>Futebol</span>, uma</Frase>
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
            <textarea placeholder="Mensagem" rows="10"  />
            <ContatoButton type="submit">ENVIAR</ContatoButton>
          </ContatoForm>
        </ContatoWrapper>
      </Container>
    </div >
    );
}