import styled from 'styled-components'
import Nav from '../Footer/Nav.js'

//Styled Componentes
const Container = styled.section`
  /* padding:0 10vw; */
  height:60vh;
  width:100%;
  background-color:#111216;
`
const SocialLogos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`
const Images = styled.img`
  margin-top: 5vh;
  margin-bottom: 5vh;
  width: 3vw;
  min-width: 30px;
  max-width: 60px;
  padding: 2px;
  `
const NavWrapper = styled.section`
  margin-top: 10vh;
`
const Rodape = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5vh;
`
const DevP = styled.p`
  color:#4A4A4A;
  font-weight: bold;
  margin-top: 2vh;
`

export default function Footer() {
  return (
    <Container>
      <SocialLogos>
        <Images src="https://res.cloudinary.com/gallo/image/upload/v1619910132/Vector_gu9bh0.png" />
        <Images src="https://res.cloudinary.com/gallo/image/upload/v1619910189/Group_3_moyvev.png" />
        <Images src="https://res.cloudinary.com/gallo/image/upload/v1619910151/Vector_2_p8eeyy.png" />
      </SocialLogos>
      <hr />
      <NavWrapper>
        <Nav />
      </NavWrapper>
      <hr />
      <Rodape>
        <p>ALEXANDRE GALLO © 2021</p>
        <DevP>DESENVOLVIDO POR LUCIANA R. | VICTOR M. | RAPHAEL M.</DevP>
      </Rodape>
    </Container>
  );
}
