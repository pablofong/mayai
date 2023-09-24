import { React, useEffect } from 'react';
import { ContainerYCenterCenter } from '../../common/Containers';
import { Description, HeaderFlexStart, Subtitle } from '../../common/Header';
import MyChart from '../MyChart';

const ChartInversion1 = () => {
    useEffect(() => {
        document.title = "Mis Inversiones";
    }, []);
    return (
        <ContainerYCenterCenter style={{ paddingTop: '2rem', }}>
            <HeaderFlexStart>
                <Subtitle style={{ color: '#434343' }}>
                    Inversión para Corolla 2021
                </Subtitle>
                <Description>
                    Este monto fue invertido en fondo <strong style={{color: '#EB0129'}}>Fondo BANORTE NCET</strong> desde el <strong style={{color: '#EB0129'}}>12 de diciembre de 2021</strong> una oportunidad que te permitirá obtener un rendimiento adicional a tus ahorros, sin requerir una permanencia mínima y con la liquidez inmediata que necesitas. Es importante destacar que esta inversión tiene un <strong style={{color: '#EB0129'}}>riesgo altamente bajo</strong>, lo que significa que tus fondos estarán resguardados de manera segura mientras generan beneficios adicionales para ti.
                </Description>
                <MyChart/>
            </HeaderFlexStart>
        </ContainerYCenterCenter>
    )
}

export default ChartInversion1;