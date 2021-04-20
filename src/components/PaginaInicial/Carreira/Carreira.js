import styled from 'styled-components'
import Texto from './texto.js'

const Container = styled.section`
    height: 100vh;
    width:100%;
    background-image:url('/gallo-carreira.png'); 
    background-size:cover; 
    background-attachment: scroll;
    background-repeat:no-repeat;
    

    display:flex;
    justify-content:flex-end;
    align-items:flex-end;
`

export default function Carreira() {
    return (
        <Container>
            <Texto />
        </Container>
    );
}
