import { React, useEffect } from 'react';
import { ContainerDefault, ContainerYCenterCenter } from '../../common/Containers';
import { Title } from '../../common/Header';

import ChartInversion1 from '../../components/ChartInversion1';
import ChartInversion2 from '../../components/ChartInversion2';
import ChartInversion3 from '../../components/ChartInversion1 copy';
const MisInversiones = () => {
    useEffect(() => {
        document.title = "Mis Inversiones";
    }, []);
    return (
        <ContainerDefault>
            <ContainerYCenterCenter style={{paddingTop: '2rem',}}>
                <Title style={{ color: '#434343' }}>
                    Este es el rendimiento de tus inversiones al momento
                </Title>
                <ChartInversion1/>
                <ChartInversion2/>
                <ChartInversion3/>
            </ContainerYCenterCenter>
        </ContainerDefault>

    )
}

export default MisInversiones;