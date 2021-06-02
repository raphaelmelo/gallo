import styled from 'styled-components'



const Wrapper = styled.article`
    height: 100%;
    width: 100%;
    display:flex;
    justify-content:center;
    align-items:center;

    h2 {    
        font-family: 'Bebas Neue', cursive;
        font-size: clamp(18px, 20vw, 110px); 
        line-height: 132px;
        color:#6CB2DA 
     }

     p {    
        font-family: Barlow;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 29px;
        color: rgba(255, 255, 255, 0.87);
     }

 `


const CardItem = styled.article`
width: 400px;
height: 50%;


h2 {    
   font-family: 'Bebas Neue', cursive;
   font-size: 110px;
   line-height: 132px; 
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

export default function Text() {
    return (
        <Wrapper>
            <CardItem>

                <h2>história</h2>
                <p>
                Iniciou a carreira de jogador pelo Botafogo de Ribeirão Preto em 1986. Jogou por diversos clubes, como Vitória, Santos, Portuguesa, Guarani, São Paulo, Botafogo e Atlético Mineiro até encerrar a carreira de jogador no Corinthians, em 2001. Conquistou os Campeonatos Paulistas de 1998 pelo São Paulo, de 2001 pelo Corinthians e os Campeonatos Mineiros de 1999 e 2000 pelo Clube Atlético Mineiro. Além disso foi Vice Campeão Brasileiro por 3 vezes, em 1995 pelo Santos, em 1996 pela Portuguesa e em 1999 pelo Atlético Mineiro, também foi Vice Campeão da Copa do Brasil de 2001 pelo Corinthians.
            </p>
            </CardItem>

        </Wrapper>
    );
}
