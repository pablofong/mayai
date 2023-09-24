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

const ContainerYCenterCenter = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Avenir',
}));

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
    gap: '0 4rem',
    margin: '0 2rem',
    width: '100%',
    [theme.breakpoints.down('lg')]: {
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
    [theme.breakpoints.down('lg')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '1rem',
        alignItems: 'center',
    },
}));
export { Content, ContainerDefault, ContainerFooterTags,  ContainerYCenterCenter, ContainerYSpaceBetween, ContainerYCenterFlexend, ContainerYCenterFlexstart, ContainerXFlexstart, ContainerXSpaceBetween, ContainerXCenter, ContainerGrid, InputContainer };