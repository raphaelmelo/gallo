import styled from 'styled-components'

const Container = styled.section`
    min-height:100vh;
    width:100%;
    background:#030303;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    position:relative;

    h2 {
        font-family: Qwigley;
        font-style: normal;
        font-weight: normal;
        font-size: clamp(18px, 50vw, 500px); 
        line-height: 600px;
        color: rgba(108, 178, 218, 0.54);
        opacity: 0.6;
    }

    article {       
        z-index:1;
        h3 {
            color: #f0f0f0;
            width:100%;
            text-align:center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%); 
            font-family: Roboto Condensed;
            font-weight: bold;
            font-size: 40px;
            text-transform: uppercase;


        }
    }
    

`

export default function Text() {
    return (
        <Container>
            <h2>Gallo</h2>
            <article>
                <h3>“O futebol é apaixonante porque é imprevisível.”</h3>
            </article>
        </Container>
    );
}
