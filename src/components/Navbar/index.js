import { styled, ClickAwayListener, Drawer, Grid } from '@mui/material';
import { React, useState } from "react";
import { navbarItems } from "./navbarItems";
import { motion } from 'framer-motion';

//Common
import logoHSDA from '../../images/banortelogocorto.png';
import { Logo } from '../../common/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <NavbarContainer style={{fontFamily: 'Lato-Regular'}}>
                <Drawer open={menuOpen} anchor='top'>
                    <ClickAwayListener onClickAway={() => setMenuOpen(false)}>
                        <HamburgerContainer>
                            {navbarItems.map((item, index) => {
                                return (
                                    <HamburgerNavbarItem key={index}>
                                        <motion.a
                                            key={item.title}
                                            title={item.title}
                                            href={item.href}
                                            whileHover={{ scale: 1.3 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                            style={{
                                                textDecoration: 'none',
                                                backgroundColor: index === 3 ? '#EB0129' : 'transparent',
                                                color: index === 3 ? '#FFFFFF' : '#EB0129',
                                                padding: index === 3 ? '10px 20px' : '0',
                                                borderRadius: index === 3 ? '1.875rem' : '0',
                                            }}
                                        >
                                            {item.title}
                                        </motion.a>
                                    </HamburgerNavbarItem>
                                )
                            })}
                        </HamburgerContainer>
                    </ClickAwayListener>
                </Drawer>
                <a href="/" style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <Logo style={{
                        filter: 'brightness(0) invert(1)',
                    }} src={logoHSDA} alt="logo" />
                </a>
                <MenuContainer>
                    {navbarItems.map((item, index) => {
                        return (
                            <NavbarItem key={index}>
                                <motion.a
                                    key={item.title}
                                    title={item.title}
                                    href={item.href}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                    style={{
                                        textDecoration: 'none',
                                        display: 'inline-flex',
                                        backgroundColor: index === 3 ? '#FFFFFF' : 'transparent',
                                        color: index === 3 ? '#EB0129' : '#FFFFFF',
                                        borderRadius: index === 3 ? '1.875rem' : '0',
                                        padding: index === 3 ? '0.3125rem 0.9375rem' : '0',
                                    }}
                                >
                                    {item.title}
                                </motion.a>
                            </NavbarItem>
                        )
                    })}
                    <HamburgerButton
                        type='button'
                        onClick={() => setMenuOpen(true)}
                        title='menu icon'>
                        <FontAwesomeIcon icon={faBars} />
                    </HamburgerButton>
                </MenuContainer>
            </NavbarContainer>
        </>
    );
};

export default Navbar;

const NavbarContainer = styled(Grid)(({ theme }) => ({
    position: 'fixed',
    top: '0',
    zIndex: '999',
    padding: '1rem 5rem',
    backgroundColor: theme.palette.red.main,
    display: 'grid',
    width: '100%',
    gridTemplateColumns: '4fr 8fr',
    gap: '1rem',
    [theme.breakpoints.down('lg')]: {
        gridTemplateColumns: 'repeat(2, 6fr)',
        padding: '1rem 2rem',
    },
}))

const MenuContainer = styled(Grid)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1rem',
    [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '1fr',
    },
}))

const NavbarItem = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1rem',
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    },
    // [theme.breakpoints.up('lg')]: {
    //     fontSize: '1.5rem',
    // },
}))

const HamburgerButton = styled('button')(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: '20px',
        color: theme.palette.white.main,
        backgroundColor: 'transparent',
        fontSize: '2rem',
        border: 'none',
    },
}))

const HamburgerContainer = styled(Grid)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: '1fr',
    background: theme.palette.white.main,
    padding: '2rem',
}))

const HamburgerNavbarItem = styled('div')(({ theme }) => ({
    textAlign: 'center',
    fontSize: '1.2rem',
    padding: '1rem 0',
}))