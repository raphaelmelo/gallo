import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import Link from 'next/link'


const Card = styled.article`
  
     height: 100%;
    width: 70%; 

    h2 {    
        font-family: 'Bebas Neue', cursive;
        font-size: clamp(18px, 20vw, 110px);
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
        <Card>
            <h2>Carreira</h2>
            <p>
            Seu primeiro trabalho depois de pendurar as chuteiras foi como estagiário de Carlos Alberto Parreira no Corinthians em 2002. Ele também foi assistente técnico de Dario Pereyra no Grêmio em 2003. O primeiro time treinado por Alexandre Gallo foi Villa Nova-MG em 2004. em 2004, Alexandre Gallo ocuparia por último o cargo de assistente técnico, trabalhando junto com Wanderley Luxemburgo em Santos, em 2004, tornando-se campeão brasileiro. 
                </p>
            <Button variant="outlined" color="secondary">
            <Link href="/carreira">
                            <a>Continuar Lendo</a>
                        </Link>
                </Button>
        </Card>

    );
}
