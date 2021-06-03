import styled from 'styled-components'
import {Jogador} from './Jogador'

    

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


   
const DataJogador = [
    {
        time: "Botafogo de Ribeirão Preto/SP - 1986/1991",
        Trofeu: ["Campeonato Paulista"," Campeonato Brasileiro"],
        Escudo: "https://res.cloudinary.com/gallo/image/upload/v1617040842/BotafogoFCRB_szwvxw.png",
    },
    {
        time: "Vitória/BA - 1991",
        Trofeu: "Campeonato Brasileiro",
        Escudo: "https://res.cloudinary.com/gallo/image/upload/v1617040841/Vit%C3%B3ria_qq0sz4.png",
    },
{
        time: "Santos/SP - 1992/1996",
        Trofeu: ["Campeonato Paulista","Campeonato Brasileiro (Vice-Campeão)"],
        Escudo: "https://res.cloudinary.com/gallo/image/upload/v1617040844/LogoSantosFC_zobpvy.png",
    },
    {
        time: "Portuguesa/SP - 1996",
        Trofeu: "Campeonato Brasileiro (Vice-Campeão)",
        Escudo: "https://res.cloudinary.com/gallo/image/upload/v1617040844/Portuguesa_e5p2r5.png",
    },
    {
        time: "Guarani/SP - 1997",
        Trofeu: "Campeonato Paulista",
        Escudo: "https://res.cloudinary.com/gallo/image/upload/v1617040844/Guarani_FC__E__-_SP.svg_fsoymz.png",
    },
    {
        time: "São Paulo/SP - 1997/1998",
        Trofeu: ["Campeonato Paulista (Campeão)","Campeonato Brasileiro","Copa do Brasil"],
        Escudo: "https://res.cloudinary.com/gallo/image/upload/v1622682230/image_65_nsnsrt.png",
    },
    {
        time: "Botafogo/RJ - 1999",
        Trofeu: ["Campeonato Carioca (Campeão)","Copa do Brasil (Vice-Campeão)"],
        Escudo: "https://res.cloudinary.com/gallo/image/upload/v1622682339/image_65_1_qgkcry.png",
    },
    {
        time: "Atletico Mineiro/Mg - 1999/2000",
        Trofeu: ["Campeonato Mineiro (Campeão)","Campeonato Brasileiro (Vice-Campeão)"],
        Escudo: "https://res.cloudinary.com/gallo/image/upload/v1617040841/1200px-Atletico_mineiro_galo_ly6lgh.png",
    },
    {
        time: "Corinthians/SP - 2001",
        Trofeu: ["Campeonato Paulista (Campeão)","Campeonato Brasileiro","Copa do Brasil (Vice-Campeão)"],
        Escudo: "https://res.cloudinary.com/gallo/image/upload/v1617040842/corinthians_adfphu.png",
    }
    
]


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
                <Escudo src={item.Escudo} alt={item.time}/>
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
                {Content}
                </CarreiraWrapper>
        </Container>
    );
}
