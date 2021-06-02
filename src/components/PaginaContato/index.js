import React from 'react';
import styled from 'styled-components'
import Header from '../Header/index'
import Form from '../PaginaContato/form'

//Styled Components
const Container = styled.section`
  background-color: #020202;
  color: white;
  width:100%;
  min-height:100vh;
`
const ImagemTopoWrapper = styled.article`

    @media only screen and (max-width: 1025px) {
    padding-top:23%;}
`
const ImagemTopo = styled.img`
  width: 100%;
  height: 50%;
`
const ParceriosBG = styled.article`
  background-color: #111216;
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
const ParceirosWrapper = styled.article`
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
    width:25%;
    justify-content:space-between;
    margin:20px 0 0 20px;
  }
`
const FraseWrapper = styled.section`
  display: flex;
  width: 100%;
  min-height:70vh;
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
  font-size: 14vh;
  margin: 0;
  padding: 0;
  width:100%;
  letter-spacing: 5px;
  color: #ffffff;

  @media only screen and (max-width: 767px) {
    font-size: 5vh;
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
    font-size: 5vh;
    padding-top:4%;
  }
`
const DivisaoWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height:0%;
  margin-bottom: -1.4%;
  box-sizing: border-box;
  
`
const LinhaHEsquerda = styled.section`
  width: 50%;
  border: 1px solid white;
  margin-right: 1vw;
  box-sizing: border-box;
`
const LinhaHDireita = styled.section`
  width: 50%;
  border: 1px solid white;
  margin-left: 1vw;
  box-sizing: border-box;
`
const LinhaHBottom = styled.section`
  width: 100%;
  border: 1px solid white;
  box-sizing: border-box;
`
const Bolinha = styled.div`
    width: 40px;
    height: 40px;
    background-color: black;
    border: 1px solid white;
    box-sizing: border-box;
    border-radius: 50%;
`

export default function Contato() {
    return (
        <div className="App">
            <Header />
            <Container>
                <ImagemTopoWrapper>
                    <ImagemTopo src="https://res.cloudinary.com/gallo/image/upload/v1622505127/Group_18_z5jkhz.png" alt="" />
                </ImagemTopoWrapper>
                <FraseWrapper>
                    <BlocoTexto>
                        <Frase><span>"</span><span>Futebol</span>, uma</Frase>
                        <Frase>razão de <span>viver.</span><span>"</span></Frase>
                    </BlocoTexto>
                </FraseWrapper>
                <DivisaoWrapper>
                    <LinhaHEsquerda />
                    <Bolinha />
                    <LinhaHDireita />
                </DivisaoWrapper>
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
                <LinhaHBottom />
                <Form />
            </Container>
        </div >
    );
}