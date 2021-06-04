import styled from 'styled-components'


export const Container = styled.section`
    padding:0 10vw;
    background-color: #020202;
`
export const Titulo = styled.article`
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
export const CarreiraWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    justify-content: space-around;
`


export const CardTime = styled.article`
    width: 25%;
    min-width:280px;
    height:100px;
    display:flex;
    flex-direction:row;
    padding:15px;
`
export const Barra = styled.span`
    border-left: 2px solid white;
    height: 100%;
    padding-right:10px;
`
export const NomeTimeWrapper = styled.article`
    width:70%;
    height:100%;
    display: flex;
    flex-direction: column;

h1{
    font-size: 18px;
    text-transform: uppercase;
    padding-bottom: 15px;
    font-family: 'Bebas Neue', cursive;
    color: #FFFFFF;
}

h2{
    font-size: 16px;
    text-transform: uppercase;
    color: #BEBEBE;
    font-family: 'Bebas Neue', cursive;
    
}
`
export const EscudoWrapper = styled.article`
    width:30%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Escudo = styled.img`
    width:60%;
`
