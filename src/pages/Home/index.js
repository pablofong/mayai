import { React, useEffect } from 'react';
import { ContainerDefault } from '../../common/Containers';
import HeroSection from '../../components/HeroSection';
import Inversiones from '../../components/Inversiones';
const Home = () => {
    useEffect(() => {
        document.title = "Inicio";
    }, []);
    return (
        <>
            <ContainerDefault>
                <HeroSection/>
                <Inversiones/>
            </ContainerDefault>
        </>
    )
}

export default Home;