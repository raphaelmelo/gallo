import styled from 'styled-components'

const Container = styled.section`
  padding:0 10vw;
  min-height: 100vh;
  display:flex;
  justify-content:center;
  flex-direction:column;
  text-align:justify;
  align-items: center;
  background-color: #020202;


`
const TitleH1 = styled.h1`
    color: #6CB2DA;
    font-family: Bebas Neue;
    font-size: 100px;
    padding-bottom: 30px;
  
`
const Description = styled.p`
    color: #ffffff;
    font-family: Bebas Neue;
    font-size: 36px;
    z-index:1;

   span {
    color: #6CB2DA;
    font-family:Bebas Neue;
   }

`
const WrapperInfos = styled.article`
    
  display:flex;
  justify-content:center;
  flex-direction:column;
  text-align:justify;
  align-items: center;


`




export default function Title() {
    return (
        <Container >
            <TitleH1>Informações</TitleH1>
            <WrapperInfos>
            <Description><span>Nome: </span>Alexandre Tadeu Gallo</Description>
            <Description><span>Nascimento: </span>29 de Maio de 1967</Description>
            <Description><span>Nacionalidade: </span>Brasileiro</Description>
            <Description><span>Altura: </span>1.84M</Description>
            <Description><span>Posição como Jogador: </span>Volante</Description>
            <Description><span>Ocupação Atual: </span>Treinador</Description>
            <Description><span>Clube Atual: </span>Botafogo de Ribeirão Preto-SP</Description>
        </WrapperInfos>
        </Container >

    );
}

//
//