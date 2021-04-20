import styled from 'styled-components'
import TextoHistoria from './Texto'


const Container = styled.section`
    height:100vh;
    width:100%;
    background:#0C0807;
    color: #fff;
    background-image:url('/gallo-historia.svg'); 

    background-repeat:no-repeat;
    background-position:right center;    

    
    display:flex;
    justify-content:flex-start;
    align-items:center;
    
`

export default function Historia() {
    return (
        <Container>
            <TextoHistoria />
        </Container>
    );
}
