import styled from 'styled-components'
import Nav from '../Footer/nav.js'
import Link from 'next/link'

//Styled Componentes
const Container = styled.section`
  margin-top: 10vh;
  height:60vh;
  width:100%;
  background-color:#020202;
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
        <Link href="https://web.facebook.com/alexandretgallo/"><a target="blank"><Images src="https://res.cloudinary.com/gallo/image/upload/v1622518710/Vector_3_ojp5c8.png" /></a></Link>
        <Link href="https://www.instagram.com/alexandregallooficial/"><a target="blank"><Images src="https://res.cloudinary.com/gallo/image/upload/v1622518726/Group_4_zaahsh.png" /></a></Link>
        <Link href="https://twitter.com/agallooficial/"><a target="blank"><Images src="https://res.cloudinary.com/gallo/image/upload/v1622518726/Vector_4_d52bss.png" /></a></Link>
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
