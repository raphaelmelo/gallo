import styled from 'styled-components'

const NavContainer = styled.nav`
  display:flex;
  width: 60%;
  align-items:center;
  justify-content:space-between;
  color: #fff;

  ul {
    display:flex;
    align-items:center;
    text-transform:uppercase;
    font-weight:400;
    font-size:14px;

   }

  .menuNavegacao{
    gap: 30px;
    font-weight:400;

  }
  .menuTraducao{
    gap: 5px;
    font-weight:900;

 
  }

`

export default function Nav() {
  return (
    <NavContainer>
      <ul className="menuNavegacao">
        <li>Home</li>
        <li>Carreira</li>
        <li>Estatísticas</li>
        <li>Palestra</li>
        <li>Contato</li>
      </ul>
      <ul className="menuTraducao">
        <li>PT</li>
        <span>|</span>
        <li>EN</li>
      </ul>
    </NavContainer>
  );
}
