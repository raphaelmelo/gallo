import styled from 'styled-components'
import Button from '@material-ui/core/Button';


const Card = styled.article`
  
     height: 100%;
    width: 70%; 

    h2 {    
        font-family: 'Bebas Neue', cursive;
        font-size: clamp(18px, 20vw, 110px); 
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
        <Card>
            <h2>Carreira</h2>
            <p>
                O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.
                O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias
                desde;
                </p>
            <Button variant="outlined" color="secondary">
                Secondary
                </Button>
        </Card>

    );
}
