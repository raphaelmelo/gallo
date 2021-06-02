import Texto from './Texto'
import styled from 'styled-components'

//Styled Components
const Container = styled.section`
    min-height:100vh;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:row;
    background:#020202;

    @media only screen and (max-width: 600px) {
        flex-direction: column-reverse;
    }
`
const TextWrapper = styled.article`
    width:50%;
    min-height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
`
const ImageWrapper = styled.article`
    background-image: url('https://res.cloudinary.com/gallo/image/upload/v1619996872/jonas-jacobsson-2xaF4TbjXT0-unsplash_xzaz6s.jpg');
    
    background-repeat:no-repeat;
    background-position: center;
    background-size: cover;
    width:50%;
    min-height:100vh;

    @media only screen and (max-width: 700px) {
        width:100%;
        padding: 100px 0;
    }
`

export default function Contato() {
    return (
        <Container>
            <TextWrapper>
                <Texto />
            </TextWrapper>
            <ImageWrapper>
            </ImageWrapper>
        </Container>
    );
};