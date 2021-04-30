import styled from 'styled-components'

const Container = styled.section`
  padding:0 10vw;
  height:60vh;
  width:100%;
  background-color:red;
`

export default function Footer() {
  return (
    <Container>
      <h1>Footer</h1>
    </Container>
  );
}
