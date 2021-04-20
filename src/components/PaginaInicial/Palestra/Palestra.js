import styled from 'styled-components'
import Texto from './texto.js'

const Container = styled.section`
    height: 100vh;
    width:100%;
    background-image:url('/gallo-palestras.jpg'); 
    background-size:100% 100%; 
    background-repeat:no-repeat;
    

    display:flex;
    justify-content:flex-start;
    align-items:center;
`

export default function Palestra() {
    return (
        <Container>
            <Texto />
        </Container>
    );
}
