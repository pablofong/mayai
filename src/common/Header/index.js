import { styled, Grid } from '@mui/material';
const HeaderFlexStart = styled('div')(({ theme }) => ({
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    gap: '1rem',
    paddingBottom: '2rem',
}));

const HeaderSpaceBetween = styled('div')(({ theme }) => ({
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: '1rem',
    paddingBottom: '2rem',
    [theme.breakpoints.down('lg')]: {
        flexDirection: 'column',
    },
}));

const Title = styled('div')(({ theme }) => ({
    fontSize: '2.5rem',
    color: theme.palette.white.main,
    fontFamily: 'Lato-Bold',
    [theme.breakpoints.up('lg')]: {
        fontSize: '3rem',
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '1.5rem',
        textAlign: 'center',
    },
}));

const Description = styled('div')(({ theme }) => ({
    fontSize: '1rem',
    fontWeight: '500',
    fontFamily: 'Lato-Regular',
    color: theme.palette.pencilgray.main,
    [theme.breakpoints.up('xl')]: {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.down('lg')]: {
        textAlign: 'center',
    },
}));
const FAQText = styled('div')(({ theme }) => ({
    fontSize: '1rem',
    fontWeight: 'bolder',
    fontFamily: 'Avenir',
    textAlign: 'left',
    color: theme.palette.pencilgray.main,
    [theme.breakpoints.up('xl')]: {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.down('lg')]: {
        fontSize: '.8rem',
    },
}));
const Subtitle = styled('div')(({ theme }) => ({
    fontSize: '2rem',
    color: theme.palette.white.main,
    fontFamily: 'Lato-Bold',
    textAlign: 'center',
}));

const Logo = styled('img')(({ theme }) => ({
    width: '5.625em',
    height: '2.35rem',
    // [theme.breakpoints.up('lg')]: {
    //     width: '14.06rem',
    //     height: '5.625rem',
    // },
}))

const HeaderSearchBar = styled(Grid)(({ theme }) => ({
    overflow: 'hidden',
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: '2rem',
    paddingBottom: '2rem',
    [theme.breakpoints.down('lg')]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

export { FAQText, HeaderFlexStart, HeaderSearchBar, HeaderSpaceBetween, Logo, Title, Description, Subtitle };