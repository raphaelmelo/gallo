import styled from 'styled-components'

import Link from 'next/link'

//Styled Components
const Container = styled.section`
  padding:0 10vw;

  
        
`
const Menu = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 5vh;
    margin-bottom: 10vh;

    @media only screen and (max-width: 425px) {
        gap:15px;
        width:100%;
        flex-direction: column;
    }
`
const MenuItens = styled.li`
    display: flex;
    color: #E3DFDF;
`

export default function Nav() {
    return (
        <Container>
            <Menu>
                <MenuItens><Link href="/">
                            <a>HOME</a>
                        </Link></MenuItens>
                <MenuItens><Link href="/carreira">
                            <a>CARREIRA</a>
                        </Link></MenuItens>
                <MenuItens><Link href="/contato">
                            <a>CONTATO</a>
                        </Link></MenuItens>
            </Menu>
        </Container>
    );
}
