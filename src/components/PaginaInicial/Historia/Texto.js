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
        font-size: 22px;
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

export default function Text() {
    return (
        <Wrapper>
            <CardItem>

                <h2>história</h2>
                <p>
                    O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o
                    texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto
                    para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia
                    electrónica, mantendo-se essencialmente inalterada.
            </p>
            </CardItem>

        </Wrapper>
    );
}
