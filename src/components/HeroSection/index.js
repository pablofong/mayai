import { React } from 'react';
import { styled } from '@mui/material';

//Carousel
import "./styles.css";
import { ContainerYCenterCenter } from '../../common/Containers';
import PrimaryButton from '../../common/PrimaryButton';
import background from '../../images/backgroundHeroSection.jpg';
import { Title } from '../../common/Header';
import TypingAnimation from '../../common/TypingAnimation';
const HeroSection = () => {
    return (
        <>
            <Background
                style={{ backgroundImage: `url(${background})` }}>
                <ContainerYCenterCenter style={{ gap: '1rem' }}>
                    <Title>
                            <TypingAnimation text="¿En que quieres invertir hoy?" />
                    </Title>
                    <PrimaryButton
                        color="#F4F8FA"
                        backgroundColor="#EB0129"
                        text='Invertir ahora'
                        url='/chat'
                    />
                </ContainerYCenterCenter>
            </Background>
        </>
    );
};

export default HeroSection;

const Background = styled('div')(({ theme }) => ({
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    objectFit: 'contain',
    position: 'relative',
    height: '300px',
    minWidth: '1512px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
}));
