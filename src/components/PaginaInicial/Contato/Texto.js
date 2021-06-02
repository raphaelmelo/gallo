import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import Link from 'next/link'

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
        font-size: 17px;
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
                Adquiriu vasta experiência em relacionamentos pessoais e interpessoais com objetivos de Conquista em curto prazo, representando, muitas vezes, uma enorme torcida ou nação que busca Vitória a qualquer preço. Por isso, Alexandre Gallo é muito requisitado para ministrar Palestras.
                 </p>
                <Button variant="outlined" color="secondary">
                <Link href="/contato">
                            <a>Continuar lendo</a>
                        </Link>
                </Button>
            </CardItem>

        </Wrapper>
    );
}
