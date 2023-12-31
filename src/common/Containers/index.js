import { styled, Grid } from '@mui/material';

const ContainerDefault = styled('div')(({ theme }) => ({
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: theme.palette.white.main,
    minHeight: '100vh',
    maxWidth: '100%',
    margin: '0',
    padding: '4rem 2rem 2rem',
}))


const ContainerYCenterFlexstart = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    [theme.breakpoints.down('lg')]: {
        alignItems: 'center',
    },
}));

const ContainerYCenterFlexend = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '100%',
    alignItems: 'center',
}));

const ContainerXFlexstart = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: '100%',
}));

const ContainerGrid = styled(Grid)(({ theme }) => ({
    display: 'grid',
    gap: '2rem',
    width: '100%',
}));

const ContainerYSpaceBetween = styled('div')(({ theme }) => ({
    width: '100%',
    mniHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
}));

const ContainerYCenterSpaceBetween = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
}));

const ContainerYCenterCenter = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
}));

const ContainerXSpaceBetween = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
}));
const ContainerXCenter = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
}));

const Content = styled('div')(({ theme }) => ({
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingTop: '2rem',
    width: '90%',
    padding: '2rem 5rem',
    [theme.breakpoints.down('lg')]: {
        display: 'flex',
        padding: '1rem 2rem',
        width: '100%',
    },
}));

const InputContainer = styled('div')(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: `repeat(2, 6fr)`,
    gap: '0 1rem',
    margin: '0 2rem',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0.625rem 1.875rem',
    },
}));
const ContainerFooterTags = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Lato-Regular',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '1rem',
        alignItems: 'center',
    },
}));
export { Content, ContainerDefault, ContainerFooterTags,  ContainerYCenterCenter, ContainerYSpaceBetween, ContainerYCenterFlexend, ContainerYCenterFlexstart, ContainerYCenterSpaceBetween, ContainerXFlexstart, ContainerXSpaceBetween, ContainerXCenter, ContainerGrid, InputContainer };