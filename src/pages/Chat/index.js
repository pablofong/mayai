import { React, useEffect, useState } from 'react';
import { styled } from '@mui/material';
import { ContainerDefault, ContainerYCenterSpaceBetween } from '../../common/Containers';

import { faPlus, faMessage } from '@fortawesome/free-solid-svg-icons';
import { Title } from '../../common/Header';
import TypingAnimation from '../../common/TypingAnimation';
// import TextArea from '../../common/TextArea';
import { faPaperPlane, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Chat = () => {

    useEffect(() => {
        document.title = "Chat";
    }, []);
    const [history, setHistory] = useState([
        {
            sender: 'Berny',
            message: 'Hola cómo puedo ayudarte el día',
        },
        {
            sender: 'user',
            message: 'Quiero ayuda en',
        },
    ]);

    const [inputMessage, setInputMessage] = useState('');

    const handleSendMessage = () => {
        if (inputMessage.trim() !== '') {
            const newMessage = {
                sender: 'user',
                message: inputMessage,
            };

            // Use the setHistory function to update the chat history
            setHistory([...history, newMessage]);

            // Clear the input field by setting inputMessage to an empty string
            setInputMessage('');

            // Log the updated history for verification
            //console.log(history);
            // Send the chat history to a server
            sendChatHistoryToServer(history);
        }
    };


    const sendChatHistoryToServer = async (chatHistory) => {

        const url = 'http://localhost:5000/api/chat'; // Replace with your server's URL
        // console.log(chatHistory);
        // Create the object with the "history" key
        const requestBody = {
          history: chatHistory,
        };
        console.log(requestBody);
      
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody), // Send the modified request body
          });
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          // Parse the JSON response
          const responseData = await response.json();
      
          // Handle the response data as needed
          console.log('Chat history sent successfully');
          console.log(responseData);
        //   setHistory(responseData.history);
        } catch (error) {
          // Handle errors here
          console.error('Error sending chat history:', error);
        }
      };
      
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
                <div style={{ minHeight: '100%' }}>
                    <ContainerYCenterSpaceBetween
                        style={{
                            paddingTop: '2rem',
                            minHeight: '75vh'
                        }}>
                        <Title style={{ color: '#434343' }}>
                            <TypingAnimation text="Consulta con Berny 🤖" />
                        </Title>
                        <div
                            style={{
                                paddingTop: '2rem',
                                minHeight: '50vh',
                                width: '80%',
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '1rem',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                overflowY: 'auto',
                            }}
                        >
                            {/* Render chat messages */}
                            {history.map((message, index) => (
                                <div
                                    key={index}
                                    style={{
                                        display: 'flex',
                                        width: '100%',
                                        justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                                        marginBottom: '10px', // Adjust spacing between messages as needed
                                    }}
                                >
                                    <div
                                        style={{
                                            backgroundColor: message.sender === 'user' ? '#D50023' : '#333',
                                            color: '#fff',
                                            padding: '10px', // Add padding for better readability
                                            borderRadius: '4px',
                                            maxWidth: '70%', // Limit message width if necessary
                                        }}
                                    >
                                        {message.message}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Content>
                            <StartAndInputContainer>
                                <InputContainer>
                                    <Input
                                        type="text"
                                        placeholder="Manda un mensaje"
                                        value={inputMessage}
                                        onChange={(e) => setInputMessage(e.target.value)}
                                        rows={2}
                                    />
                                </InputContainer>
                                <StartAdornment onClick={handleSendMessage}>
                                    <FontAwesomeIcon icon={faPaperPlane} className="search-icon" />
                                </StartAdornment>
                            </StartAndInputContainer>
                        </Content>
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
    [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '1fr',
        paddingTop: '2rem',
    },
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
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    },
}));

const Input = styled('textarea')(({ theme }) => ({
    display: "flex",
    resize: 'none',
    justifyContent: "flex-start",
    alignItems: 'center',
    textAlign: "auto",
    alignContent: "center",
    border: "none",
    outline: "none",
    borderRadius: 10,
    width: "100%",
    backgroundColor: 'transparent',
    fontFamily: 'Lato-Regular',
    fontSize: '1rem',
}));

const Content = styled('div')(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: '#F4F8FA',
    border: "none",
    borderRadius: 30,
    padding: '.9rem 1rem',
    fontFamily: 'Avenir',
    width: '90%',
    boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.15)',
    [theme.breakpoints.down('lg')]: {
        width: '85%'
    },
}));
const StartAndInputContainer = styled('div')(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    color: theme.palette.lightGray.main,
    width: '100%',
}));
const StartAdornment = styled('div')(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    color: theme.palette.brown.main,
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: '1.2rem',
    marginRight: '1rem',
}));
const InputContainer = styled('div')(({ theme }) => ({
    display: "flex",
    justifyContent: "flex-start",
    width: '100%',
    [theme.breakpoints.down('lg')]: {
        fontSize: '1rem',
    },
}));