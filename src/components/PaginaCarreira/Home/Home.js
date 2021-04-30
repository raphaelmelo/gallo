import Header from '../../Header/Header'
import Title from './Title'
import Imagem from './imagem'
import Informacoes from './Informacoes'
import styled from 'styled-components'

const Container = styled.section`
  padding:0 10vw;
`

export default function CarreiraHome() {
    return (
        <Container>
            <Title/>
            <Imagem />
            <Informacoes/>
        </Container>
    );
}
