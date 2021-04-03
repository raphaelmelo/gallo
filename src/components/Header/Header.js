import styled from 'styled-components'
import Logo from './logo'
import Nav from './nav'

const Container = styled.section`
  padding: 0 5vw;
  display:flex;
  align-items:center;
  justify-content:space-between;
  height:70px;

  background:rgba(0,0,0, .3);
  
`

export default function Header() {
  return (
    <Container>
      <Logo />
      <Nav />
    </Container>
  );
}
