import styled from 'styled-components'

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
`
const MenuItens = styled.li`
    display: flex;
    color: #E3DFDF;
`

export default function Nav() {
    return (
        <Container>
            <Menu>
                <MenuItens>HOME</MenuItens>
                <MenuItens>CARREIRA</MenuItens>
                <MenuItens>ESTATÍSTICAS</MenuItens>
                <MenuItens>PALESTRA</MenuItens>
                <MenuItens>CONTATO</MenuItens>
            </Menu>
        </Container>
    );
}
