import styled from 'styled-components'

const Container = styled.article`
    display:flex;
    align-items:center;
    
    h2 { 
        font-size:26px;
        color: #FFFFFF;
        text-transform:uppercase;
  }

  
`

export default function Logo() {
    return (
        <Container>
            <h2>Alexandre Gallo</h2>
        </Container>
    );
}
