
import Title from './Texto'
import styled from 'styled-components'

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
 

;
`
const ImageWrapper = styled.article`
    background-image: url('https://res.cloudinary.com/gallo/image/upload/v1619997575/Frame202_vuwa9a.png');
    background-size:100%;
    background-repeat:no-repeat;
    background-position: center center;
     width:50%;
    height:100vh;

    @media only screen and (max-width: 700px) {
        width:100%;
    }


`


export default function Historia() {
    return (
        <Container>
            <TextWrapper>
                <Title />
            </TextWrapper>
            <ImageWrapper>

            </ImageWrapper>
        </Container>
    );
};