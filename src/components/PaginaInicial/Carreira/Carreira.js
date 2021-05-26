import Texto from './Texto'
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
        flex-direction: column;

    }
`

const TextWrapper = styled.article`
    width:50%;
    min-height:100vh;

    
    display:flex;
    align-items:center;
    justify-content:center;
 
    @media only screen and (max-width: 600px) {
        width:100%;

    }

;
`


const ImageWrapper = styled.article`
    background-image: url('https://res.cloudinary.com/gallo/image/upload/v1616962592/Carreira_bw_1_p8m2vk.png');
     background-repeat:no-repeat;
    background-position: cover;
    width:50%;
    min-height:100vh;
    
    @media only screen and (max-width: 700px) {
        width:100%;
        padding: 100px 0;
    }
    
`


export default function Carreira() {
    return (
        <Container>
            <ImageWrapper>
            </ImageWrapper>
            <TextWrapper>
                <Texto />
            </TextWrapper>
        </Container>
    );
};