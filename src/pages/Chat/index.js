import { React, useEffect } from 'react';
import { styled } from '@mui/material';
import { ContainerDefault, ContainerYCenterCenter, ContainerYCenterSpaceBetween } from '../../common/Containers';

import { faPlus, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Title } from '../../common/Header';
import TypingAnimation from '../../common/TypingAnimation';
import TextArea from '../../common/TextArea';
const Chat = () => {
    useEffect(() => {
        document.title = "Chat";
    }, []);
    return (
        <ContainerDefault style={{
            backgroundColor: '#E1E1E1',
            minHeight: '0',
            padding: '4rem 0rem 0rem',
        }}>
            <Body>
                <HistoryConvos>
                    <Text>
                        <SubtitlesHistory><FontAwesomeIcon style={{ marginRight: '.5rem' }} icon={faPlus} /> New Message</SubtitlesHistory>
                        <SubtitlesHistory>Hoy</SubtitlesHistory>
                        <ConvosHistory style={{ marginLeft: '1rem' }}><FontAwesomeIcon style={{ marginRight: '.5rem' }} icon={faMessage} /> Inversión en Útiles</ConvosHistory>
                        <ConvosHistory style={{ marginLeft: '1rem' }}><FontAwesomeIcon style={{ marginRight: '.5rem' }} icon={faMessage} /> Inversión en Universidad</ConvosHistory>

                        <SubtitlesHistory>Ayer</SubtitlesHistory>
                        <ConvosHistory style={{ marginLeft: '1rem' }}><FontAwesomeIcon style={{ marginRight: '.5rem' }} icon={faMessage} /> Inversión en Casa</ConvosHistory>
                        <ConvosHistory style={{ marginLeft: '1rem' }}><FontAwesomeIcon style={{ marginRight: '.5rem' }} icon={faMessage} /> Inversión en Ropa</ConvosHistory>

                        <SubtitlesHistory>Días Pasados</SubtitlesHistory>
                        <ConvosHistory style={{ marginLeft: '1rem' }}><FontAwesomeIcon style={{ marginRight: '.5rem' }} icon={faMessage} /> Inversión en Auto</ConvosHistory>
                        <ConvosHistory style={{ marginLeft: '1rem' }}><FontAwesomeIcon style={{ marginRight: '.5rem' }} icon={faMessage} /> Inversión en Auto</ConvosHistory>
                        <ConvosHistory style={{ marginLeft: '1rem' }}><FontAwesomeIcon style={{ marginRight: '.5rem' }} icon={faMessage} /> Inversión en Auto</ConvosHistory>
                    </Text>
                </HistoryConvos>
                <div style={{minHeight:'100%'}}>
                    <ContainerYCenterSpaceBetween
                        style={{
                            paddingTop: '2rem',
                            minHeight: '75vh'
                        }}>
                        <Title style={{ color: '#434343' }}>
                            <TypingAnimation text="Consulta con Berny 🤖" />
                        </Title>

                        <TextArea
                            title='Mensaje'
                            id='mensaje'
                            placeholder='Manda un mensaje' />
                    </ContainerYCenterSpaceBetween>
                </div>
            </Body>
        </ContainerDefault>
    )
}

export default Chat;

const Body = styled('div')(({ theme }) => ({
    overflow: 'hidden',
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    minHeight: '100%',
}));

const Text = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: '1rem',
    width: '100%',
    gap: '1rem',
}));

const SubtitlesHistory = styled('div')(({ theme }) => ({
    fontFamily: 'Lato-Bold',
    fontSize: '1rem',
    color: theme.palette.white.main,
    paddingTop: '2rem',
}));
const ConvosHistory = styled('div')(({ theme }) => ({
    fontFamily: 'Lato-Light',
    fontSize: '1rem',
    color: theme.palette.white.main,
}));

const HistoryConvos = styled('div')(({ theme }) => ({
    fontFamily: 'Lato-Bold',
    width: '100%',
    minHeight: '80vh',
    paddingBottom: '1rem',
    backgroundColor: "#021327",
}));
