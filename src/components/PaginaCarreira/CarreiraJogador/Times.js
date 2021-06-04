import { DataJogador } from '../../../DataJogador'
import * as S from './Style.js'

const Content = DataJogador.map((item) => (
    (
        <S.CardTime>
            <S.Barra />
            <S.NomeTimeWrapper>
                <h1>{item.time}</h1>
                <h2>{item.Trofeu1}</h2>
                <h2>{item.Trofeu2}</h2>
                <h2>{item.Trofeu3}</h2>
                <h2>{item.Trofeu4}</h2>
            </S.NomeTimeWrapper>
            <S.EscudoWrapper>
                <S.Escudo src={item.Escudo} alt={item.time} />
            </S.EscudoWrapper>
        </S.CardTime>
    )
))

export default function Times() {
    return (
        <S.Container>
            <S.Titulo>
                <h1>Carreira como jogador</h1>
            </S.Titulo>
            <S.CarreiraWrapper>
                {Content || ""}
            </S.CarreiraWrapper>
        </S.Container>
    );
}
