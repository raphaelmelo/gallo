import Title from './Title'
import styled from 'styled-components'

const Container = styled.section`
    height:100vh;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:row;

`

const TextWrapper = styled.article`
    width:40%;
    height:100vh;
`

const ImageWrapper = styled.article`
    background-image: url('https://res.cloudinary.com/gallo/image/upload/v1616960836/Foto_Capa_wbasoa.png');
    background-size:100%;
    background-repeat:no-repeat;
    background-position: center center;
     width:60%;
    height:100vh;

`


export default function CarreiraHome() {
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
