const Chat = () => {
    useEffect(() => {
      document.title = "Chat";
    }, []);
  
    const [inputMessage, setInputMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
  
    const handleSendMessage = () => {
      if (inputMessage.trim() !== '') {
        // Create a new message object and add it to the chat history
        const newMessage = {
          text: inputMessage,
          sender: 'user', // You can distinguish between 'user' and 'bot' messages
        };
  
        setChatHistory([...chatHistory, newMessage]);
  
        // Clear the input field after sending the message
        setInputMessage('');
      }
    };
  
    return (
      <div style={{ minHeight: '100%' }}>
        {/* Chat history container */}
        <div
          style={{
            paddingTop: '2rem',
            minHeight: '75vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            overflowY: 'auto',
          }}
        >
          {/* Render chat messages */}
          {chatHistory.map((message, index) => (
            <div
              key={index}
              style={{
                backgroundColor: message.sender === 'user' ? '#007bff' : '#eaeaea',
                color: message.sender === 'user' ? '#fff' : '#333',
                padding: '0.5rem',
                borderRadius: '4px',
                marginBottom: '0.5rem',
                maxWidth: '70%',
              }}
            >
              {message.text}
            </div>
          ))}
        </div>
  
        {/* Input area for sending messages */}
        <div style={{ marginTop: '1rem' }}>
          <input
            type="text"
            placeholder="Manda un mensaje"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            style={{ width: '100%', padding: '0.5rem' }}
          />
          <button onClick={handleSendMessage}>Enviar</button>
        </div>
      </div>
    );
  };
  
  export default Chat;
  