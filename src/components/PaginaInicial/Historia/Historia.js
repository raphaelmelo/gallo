
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

    @media only screen and (max-width: 1025px) {
        width:50%;
        justify-content: flex-end;
        margin-left: 2%;
    }
 

;
`
const ImageWrapper = styled.article`
    background-image: url('https://res.cloudinary.com/gallo/image/upload/v1622508857/Group_19_1_lnuxxy.png'); 
    background-repeat:no-repeat;
    background-position: 20% 6%; 
    width:50%;
    min-height:100vh;
    
    
    


    @media only screen and (max-width: 1025px) {
        width:100%;
        background-position:5% 2% ;
        
        
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