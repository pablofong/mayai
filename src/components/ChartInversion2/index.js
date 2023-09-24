import { React, useEffect } from 'react';
import { ContainerYCenterCenter } from '../../common/Containers';
import { Description, HeaderFlexStart, Subtitle } from '../../common/Header';
import MyChart from '../MyChart';

const ChartInversion2 = () => {
    useEffect(() => {
        document.title = "Mis Inversiones";
    }, []);
    const inversion = [52000, 54468, 56958.212, 59470.83591, 62006.07343, 64564.12809, 67145.20524, 69749.51209, 72377.2577, 75028.65302, 77703.9109, 80403.2461, 83126.87531, 85875.01719, 88647.89234, 91445.72337, 94268.73488, 97117.1535, 99991.20788, 102891.1288, 105817.1489, 108769.5032, 111748.4288];
    const labels = ['12/21', '01/22', '02/22', '03/22', '04/22', '05/22', '06/22', '07/22', '08/22', '09/22', '10/22', '11/22', '12/22', '01/23', '02/23', '03/23', '04/23', '05/23', '06/23', '07/23', '08/23'];
    const ganancias = [468, 490.212, 512.623908, 535.2375232, 558.0546609, 581.0771528, 604.3068472, 627.7456088, 651.3953193, 675.2578772, 699.3351981, 723.6292149, 748.1418778, 772.8751547, 797.8310311, 823.0115104, 848.418614, 874.0543815, 899.9208709, 926.0201588, 952.3543402, 978.9255292, 1005.735859];
    return (
        <ContainerYCenterCenter style={{ paddingTop: '2rem', }}>
            <HeaderFlexStart>
                <Subtitle style={{ color: '#434343' }}>
                Inversión para Disneyland 2024
                </Subtitle>
                <Description style={{ textAlign: 'justify' }}>
                    Este monto fue invertido en fondo <strong style={{ color: '#EB0129' }}>Fondo BANORTE NTEDLS+</strong> desde el <strong style={{ color: '#EB0129' }}>12 de diciembre de 2021</strong> una oportunidad que te permitirá obtener un rendimiento adicional a tus ahorros, sin requerir una permanencia mínima y con la liquidez inmediata que necesitas. Es importante destacar que esta inversión tiene un <strong style={{ color: '#EB0129' }}>riesgo altamente bajo</strong>, lo que significa que tus fondos estarán resguardados de manera segura mientras generan beneficios adicionales para ti.
                </Description>

            </HeaderFlexStart>
            <MyChart
                title='Inversión  Disneyland 2024'
                inversion={inversion}
                labels = {labels}
                ganancias = {ganancias}
            />
        </ContainerYCenterCenter>
    )
}

export default ChartInversion2;