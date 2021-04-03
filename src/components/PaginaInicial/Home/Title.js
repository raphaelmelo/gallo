import styled from 'styled-components'

const Container = styled.article`
    height:90vh;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    width:80%;
     
`
const WrapperText = styled.article`
    width:550px;
    text-align:end;

    h1 {
        font-size:152px;
         font-family: 'Luckiest Guy', cursive;
        color: #ffffff;
        text-transform:uppercase;
        padding:0;
        margin:0;
        line-height:90%;
    }
    h2 {
        font-size:40px;
        font-weight:200;
        padding:0;
        margin:0;
        text-transform:uppercase;
        color: #ffffff99; 
    }
    h3 {
        font-size:26px;
        font-weight:400;
        color: #ffffff99;
        text-transform:uppercase;
    }
    
`

export default function Title() {
    return (
        <Container>
            <WrapperText>
                <h2>Alexandre</h2>
                <h1>Gallo</h1>
                <h3>Treinador e ex-jogador de futebol</h3>
            </WrapperText>
        </Container>
    );
}
