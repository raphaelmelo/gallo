import React from 'react';

import Link from 'next/link'


import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { ListItemText } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';


import { MenuLogo, NavMobile, ListMenuStyled, ItemMenuStyled, } from './style'


const useStyles = makeStyles({
    list: {
        width: "50vw",
    },
    fullList: {
        width: 'auto',
    },
});


export default function Header() {
    // MENU MOBILE
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >

        </div>
    );

    return (
        <>
            <NavMobile>
                {['☰'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)} >{anchor}</Button>
                        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>

                            <ListMenuStyled>
                                <MenuLogo>
                                     <Link href="https://web.facebook.com/alexandretgallo/">
                                        <a target="blank">
                                            <img src={"https://res.cloudinary.com/gallo/image/upload/v1622518710/Vector_3_ojp5c8.png"} alt={"Facebook"} />
                                        </a>
                                    </Link>
                                    <Link href="https://www.instagram.com/alexandregallooficial/">
                                        <a target="blank">
                                            <img src={"https://res.cloudinary.com/gallo/image/upload/v1622518726/Group_4_zaahsh.png"} alt={"Instagram"} />
                                        </a>
                                    </Link>
                                    <Link href="https://twitter.com/agallooficial/">
                                        <a target="blank">
                                            <img src={"https://res.cloudinary.com/gallo/image/upload/v1622518726/Vector_4_d52bss.png"} alt={"Twitter"} />
                                        </a>
                                    </Link>
                                  </MenuLogo>
                                <Divider />

                                <Link href="/">
                                    <ItemMenuStyled button>
                                        <ListItemText primary={"Home"} />
                                    </ItemMenuStyled>
                                </Link>
                                <Divider />

                                <Link href="/carreira">
                                    <ItemMenuStyled button>
                                        <ListItemText primary={"Carreira"} />
                                    </ItemMenuStyled>
                                </Link>
                                <Divider />

                                <Link href="/contato">
                                    <ItemMenuStyled button>
                                        <ListItemText primary={"Contato"} />
                                    </ItemMenuStyled>

                                </Link>

                                <Divider />
 
                            </ListMenuStyled>
                        </Drawer>
                    </React.Fragment>
                ))}
            </NavMobile>
        </>



    )
}
