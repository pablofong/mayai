import { styled, Grid } from '@mui/material';
import { React } from "react";
import { tendenciasItems } from "./tendenciasItems";
import { estaticosItems } from "./estaticosItems";
import { Subtitle } from '../../common/Header';
import { ContainerDefault, ContainerYCenterCenter } from '../../common/Containers';
import { motion } from 'framer-motion';

//Common
const Inversiones = () => {
    return (
        <ContainerDefault>
            <ContainerYCenterCenter style={{ gap: '2rem' }}>
                <Subtitle style={{ color: '#6A6867' }}>Mira las tendencias de inversión</Subtitle>
                <ItemsGrid>
                    {tendenciasItems.map((item, index) => {
                        return (
                            <div style={{ paddingBottom: '1rem' }}>
                                <motion.div
                                    key={item.title}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                    style={{ display: 'flex', justifyContent: 'center' }}
                                >
                                    <Tag>
                                        {item.title}
                                    </Tag>
                                </motion.div>
                            </div>
                        )
                    })}
                </ItemsGrid>

                <Subtitle style={{ color: '#6A6867' }}>Otras inversiones</Subtitle>
                <ItemsGrid>
                    {estaticosItems.map((item, index) => {
                        return (
                            <div style={{ paddingBottom: '1rem' }}>

                                <motion.div
                                    key={item.title}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                    style={{ display: 'flex', justifyContent: 'center' }}
                                >
                                    <Tag>
                                        {item.title}
                                    </Tag>
                                </motion.div>
                            </div>
                        )
                    })}
                </ItemsGrid>

            </ContainerYCenterCenter>
        </ContainerDefault>
    );
};

export default Inversiones;

const Tag = styled('div')(({ theme }) => ({
    fontFamily: 'Lato-Regular',
    color: theme.palette.gray.main,
    textAlign: 'center',
    backgroundColor: theme.palette.lightGray.main,
    textDecoration: 'none',
    display: 'inline-flex',
    borderRadius: '1.875rem',
    boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.4)',
    padding: '0.3125rem 0.9375rem',
    fontSize: '1rem',
    [theme.breakpoints.down('sm')]: {
        fontSize: '.8rem',
    },
}))

const ItemsGrid = styled(Grid)(({ theme }) => ({
    display: 'grid',
    width: '100%',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '.5rem',
    [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
    },
}))

// const ItemsGrid = styled(Grid)(({ theme }) => ({
//     width: '100%',
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     [theme.breakpoints.down('lg')]: {
//         flexDirection: 'column',
//         justifyContent: 'center',
//         gap: '1rem',
//         alignItems: 'center',
//     },
// }))