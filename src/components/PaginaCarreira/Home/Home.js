import Title from './Title'
import styled from 'styled-components'

const Container = styled.section`
    height:100vh;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:row;
    background-color:#020202;

    @media only screen and (max-width: 1025px) {
    flex-direction:column-reverse;
   }

`

const TextWrapper = styled.article`
    width:40%;
    height:100vh;
    
    @media only screen and (max-width: 1025px) {
    width:100%;
    display: flex;
    align-self:center;
    height: 70%;
   }
`

const ImageWrapper = styled.article`
     width:60%;
    height:100vh;
    
    @media only screen and (max-width: 1025px) {
    width:100%;
    padding-top:20%;

   }

`
const ImageTop = styled.img`
width:100%;
height: 100%;
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

  @media only screen and (max-width: 1025px) {
    
   }
  
`
const LinhaHEsquerda = styled.section`
  width: 100%;
  border: 1px solid white;
  margin-right: 1vw;
  box-sizing: border-box;
`
const Pagina = styled.section`
height: 100%;
width:100%;
`


export default function CarreiraHome() {
    return (
        <Pagina>
        <Container>
            <TextWrapper>
                <Title />
            </TextWrapper>
            <ImageWrapper>
                  <ImageTop src="https://res.cloudinary.com/gallo/image/upload/v1622833108/Gallo_2_2_x48taf.png" alt=" Alexandre Gallo"/>
            </ImageWrapper>
        </Container>
        <DivisaoWrapper>
        <LinhaHEsquerda/>
    </DivisaoWrapper>
        </Pagina>
    );
};
