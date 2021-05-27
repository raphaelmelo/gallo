import styled from 'styled-components'
import Button from '@material-ui/core/Button';


const Wrapper = styled.article`
    height: 100%;
    width: 50%;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#020202;

`

const CardItem = styled.article`
     width: 400px;
    height: 50%;
    

    h2 {    
        font-family: 'Bebas Neue', cursive;
        font-size: clamp(18px, 20vw, 110px); 
        line-height: 132px;
        color:#6CB2DA; 
     }

     p {    
        font-family: Barlow;
        font-style: normal;
        font-weight: 300;
        font-size: 22px;
        line-height: 29px;
        color: rgba(255, 255, 255, 0.87);
        margin-bottom:40px;
        
     }

     .MuiButton-outlinedSecondary {
        border: 2px solid white;

        :hover {
            border: 2px solid grey;

        }
     } 

`


export default function Texto() {
    return (
        <Wrapper>

            <CardItem>
                <h2>Palestras</h2>
                <p>
                    O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.
                    O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias
                    desde;
                 </p>
                <Button variant="outlined" color="secondary">
                    Continuar lendo
                </Button>
            </CardItem>

        </Wrapper>
    );
}
