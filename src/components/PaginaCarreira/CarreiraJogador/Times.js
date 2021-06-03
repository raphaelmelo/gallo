import styled from 'styled-components'
import { DataJogador } from '../../../dataJogador'


const Container = styled.section`
    padding:0 10vw;
    min-height: 100vh;
`
const Titulo = styled.article`
    width: 100%;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

h1{
    text-transform: uppercase;
    font-weight: bold;
    color:#6CB2DA;
}
`
const CarreiraWrapper = styled.section`
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    justify-content: space-around;
`


const CardTime = styled.article`
    width: 25%;
    min-width:280px;
    height:80px;
    display:flex;
    flex-direction:row;
    padding:8px;
`
const Barra = styled.span`
    border-left: 2px solid white;
    height: 100%;
    padding-right:10px;
`
const NomeTimeWrapper = styled.article`
    width:70%;
    height:100%;
    display: flex;
    flex-direction: column;

h1{
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
    padding-bottom: 15px;
}

h2{
    font-size: 14px;
    text-transform: uppercase;
    color: #BEBEBE;
    
}
`
const EscudoWrapper = styled.article`
    width:30%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Escudo = styled.img`
    width:60%;
`


const Content = DataJogador.map((item) => (
    (
        <CardTime>
            <Barra> </Barra>
            <NomeTimeWrapper>
                <h1>{item.time}</h1>
                <h2>{item.Trofeu}</h2>
            </NomeTimeWrapper>
            <EscudoWrapper>
                <Escudo src={item.Escudo} alt={item.time} />
            </EscudoWrapper>
        </CardTime>
    )
))

export default function Times() {
    return (
        <Container>
            <Titulo>
                <h1>Carreira como jogador</h1>
            </Titulo>
            <CarreiraWrapper>
                {Content || ""}
            </CarreiraWrapper>
        </Container>
    );
}
