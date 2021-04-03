import styled from 'styled-components'
import Header from '../../Header/Header.js'
import Title from './Title.js'

const Container = styled.section`
    height:100vh;
    width:100%;
    background-image: url('https://res.cloudinary.com/gallo/image/upload/v1617060773/Gallo01_e1xyjw.png');
    background-size:cover;
    background-repeat:no-repeat;
    background-position: 100%;
    background-origin: content-box;
 
  `

export default function Home() {
    return (
        <Container>
            <Header />
            <Title />
        </Container>
    );
}
