import styled from 'styled-components'
import Title from './Title.js'

const Container = styled.section`
    height:100vh;
    width:100%;
    background-image: url('https://res.cloudinary.com/gallo/image/upload/v1622682396/Untitled-2_3_wmydfx.png');
    background-size:cover;
    background-repeat:no-repeat;
    background-position: 100%;
    background-origin: content-box;
    
    @media only screen and (max-width: 1025px) {
        width:100%;
        padding-bottom:2%;
        background-position:20%;
        margin:0px;
        
    }
 
  `

export default function Home() {
    return (
        <Container>
            <Title />
        </Container>
    );
}
