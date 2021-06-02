import Styled from 'styled-components'
import Link from 'next/link'
import NavMobile from "../NavMobile"

const HeaderStyled = Styled.header`
    height:10vh;
    width:80%;
    background:#020202;

    display:flex;
    justify-content:space-between;
    align-items:center;
    color: #E3DFDF;
    font-family: 'Bebas Neue', cursive;
    padding: 0 10%;
    z-index:1000;
    position:fixed;
 
`
const WrapperNav = Styled.article`
    display:flex;
    gap:40px;
       
`
const LogoStyledDiv = Styled.div`
    font-family: 'Roboto Condensed', sans-serif;
    font-size: clamp(20px, 4vw, 22px);
    text-transform:uppercase;

`
const NavList = Styled.ul`
    list-style:none;
    display:flex;
    gap:10px;
    text-transform:uppercase;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
 
        
@media (max-width: 769px) {
    display:none;
}

`
const NavItem = Styled.li`
    color: #E3DFDF;

`

const Languages = Styled.article`
    display:flex;
    gap:10px;   

    img {
        width:24px;
    }

    @media (max-width: 769px) {
    display:none;
}

`

export default function Index() {

    return (
        <HeaderStyled>
            <LogoStyledDiv>
                <Link href="/">
                    Alexandre Gallo
                    </Link>
            </LogoStyledDiv>
            <WrapperNav>
                <nav>
                    <NavList>
                        <Link href="/">
                            <a>
                                <NavItem>Home</NavItem>
                            </a>
                        </Link>
                        <Link href="/carreira">
                            <a>
                                <NavItem>Carreira</NavItem>
                            </a>
                        </Link>
                        <Link href="/contato">
                            <a>
                                <NavItem>Contato</NavItem>
                            </a>
                        </Link>
                    </NavList>
                    <NavMobile />
                </nav>
                <Languages>
                    <Link href="/">
                        <NavItem>PT</NavItem>
                    </Link>
                    <Link href="/">
                        <NavItem>EN</NavItem>
                    </Link>
                </Languages>
            </WrapperNav>
        </HeaderStyled>

    )
}
