import styled from 'styled-components'
import { DataTreinador } from '../../../DataTreinador'


const Container = styled.section`
    padding:0 10vw 50px ;
    background-color: #020202;
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
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    justify-content: space-around;
`


const CardTime = styled.article`
    width: 40%;
    height:180px;
    display:flex;
    flex-direction:row;
    margin-top: 20px;

`


const Barra = styled.span`
    border-left: 2px solid white;
    height: 100%;
    padding-right:10px;
`
const NomeTimeWrapper = styled.article`
    width:60%;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    


    h1 {
    font-size:24px;
    text-transform: uppercase;
    color: #FFFFFF;
    font-family: 'Bebas Neue', cursive;

}

h2 {
    font-size:18px;
    text-transform: uppercase;
    color: #AB8F29;
    font-family: 'Bebas Neue', cursive;

}

h3 {
    font-size:18px;
    text-transform: uppercase;
    font-family: 'Bebas Neue', cursive;

}
h4 {
    font-size:18px;
    color: #FFFFFF;
    font-family: 'Bebas Neue', cursive;
    
}
p {
    font-size:14px;
    font-family: 'Bebas Neue', cursive;
    
}

`
const DireitaWrapper = styled.article`
    width:40%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;


img {
    width:70px;
    padding-bottom:10px;

}
h4 {
    font-size:18px;
    color: #FFFFFF;
    padding: 00%;
    margin:0;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
    
} 
`
 
const Trofeus = styled.span`
font-size:10px;
`
const Saldo = styled.p`
font-size:13px;



`
const EscudoDiv = styled.div`
height: 20%;
width:100%;

`


 
const Content = DataTreinador.map((item) => (
    (
        <CardTime>
            <Barra/>
            <NomeTimeWrapper>

                <h1>{item.time}</h1>
                <h2>{item.trabalho}</h2>
              
                <h3>{item.Trofeu1}<br/>{item.Trofeu2}<br/>{item.Trofeu3}<br/>{item.Trofeu4}</h3>
               
                <h4>{item.Jogos}{item.Vitorias}{item.Empates}{item.Derrotas}</h4>

                <p>{item.Amistosos}</p>

            </NomeTimeWrapper>

            <DireitaWrapper>
                <img src={item.Escudo} alt={item.time} />
                <>
                  <h4> <br/> {item.Aproveitamento}</h4>
                 </>
            </DireitaWrapper>
        </CardTime>
    )
))

export default function Times() {
    return (
        <Container>
            <Titulo>
                <h1>Carreira como Treinador</h1>
            </Titulo>
            <CarreiraWrapper>
                {Content || ""}
            </CarreiraWrapper>
        </Container>
    );
}
