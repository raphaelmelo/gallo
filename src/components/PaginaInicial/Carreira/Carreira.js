import Texto from './texto'
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
 
    @media only screen and (max-width: 1025px) {
        width:50%;
        justify-content:flex-start;
        margin-left:1.5%
        

    }

;
`

const ImageWrapper = styled.article`
    background-image: url('https://res.cloudinary.com/gallo/image/upload/v1616962592/Carreira_bw_1_p8m2vk.png');
    background-repeat:no-repeat;
    background-position: 25% 5%;
    width:50%;
    min-height:100vh;
    
    @media only screen and (max-width: 1025px) {
        width:100%;
        background-position:20% 5%;
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