import { React, useEffect } from 'react';
import { ContainerYCenterCenter } from '../../common/Containers';
import { Description, HeaderFlexStart, Subtitle } from '../../common/Header';
import MyChart from '../MyChart';

const ChartInversion3 = () => {
    useEffect(() => {
        document.title = "Mis Inversiones";
    }, []);

    const inversion = [7000, 8063.7, 9137.07967, 10220.22709, 11313.23116, 12416.18157, 13529.16882, 14652.28425, 15785.62004, 16929.26918, 18083.32553, 19247.88379, 20423.03954, 21608.8892, 22805.53009, 24013.06041, 25231.57926, 26461.18663, 27701.98343, 28954.07148, 30217.55353];
    const labels = ['12/21', '01/22', '02/22', '03/22', '04/22', '05/22', '06/22', '07/22', '08/22', '09/22', '10/22', '11/22', '12/22', '01/23', '02/23', '03/23', '04/23', '05/23', '06/23', '07/23', '08/23'];
    const ganancias = [63.7, 73.37967, 83.147425, 93.00406656, 102.9504036, 112.9872522, 123.1154362, 133.3357867, 143.6491424, 154.0563496, 164.5582623, 175.1557425, 185.8496598, 196.6408917, 207.5303238, 218.5188498, 229.6073713, 240.7967984, 252.0880492, 263.4820505, 274.9797371];
    return (
        <ContainerYCenterCenter style={{ paddingTop: '2rem', }}>
            <HeaderFlexStart>
                <Subtitle style={{ color: '#434343' }}>
                    Inversión para Retiro
                </Subtitle>
                <Description style={{ textAlign: 'justify' }}>
                    Este monto fue invertido en fondo <strong style={{ color: '#EB0129' }}>Fondo BANORTE NTEIPC+</strong> desde el <strong style={{ color: '#EB0129' }}>12 de diciembre de 2021</strong> una oportunidad que te permitirá obtener un rendimiento adicional a tus ahorros, sin requerir una permanencia mínima y con la liquidez inmediata que necesitas. Es importante destacar que esta inversión tiene un <strong style={{ color: '#EB0129' }}>riesgo altamente bajo</strong>, lo que significa que tus fondos estarán resguardados de manera segura mientras generan beneficios adicionales para ti.
                </Description>

            </HeaderFlexStart>
            <MyChart
                title='Inversión para Retiro'
                inversion={inversion}
                labels={labels}
                ganancias={ganancias}
            />
        </ContainerYCenterCenter>
    )
}

export default ChartInversion3;