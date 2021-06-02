import styled from 'styled-components'

const Container = styled.article`
    height:90vh;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    width:80%;

    @media only screen and (max-width: 1025px){
        display:flex;
        justify-content:right;
        align-items:flex-end;
        margin-left:15%;
        }

`

const WrapperText = styled.article`
    width:550px;
    text-align:end;

    h1 { 
        font-family: Qwigley;
        font-size: clamp(20px, 40vw, 220px); 

        color: #FFFFFF;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
        line-height:175px;
        
        @media only screen and (max-width: 1025px){
        font-size: 70px;
        line-height:50px;
        }
    }
    h3 { 
        color: #F9F9F9;
        font-family: 'Roboto Condensed', sans-serif;
        font-size: clamp(20px, 40vw, 22px); 

        font-weight: 300;

        @media only screen and (max-width: 1025px){
        font-size: 20px;
        
        }
    }
    
`

export default function Title() {
    return (
        <Container>
            <WrapperText>
                <h1>Alexandre <br/> Gallo</h1>
                
                <h3>Treinador e ex-jogador de futebol</h3>
            </WrapperText>
        </Container>
    );

    }