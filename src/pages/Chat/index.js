import { React, useEffect } from 'react';

const Chat = () => {
    useEffect(() => {
        document.title = "Chat";
    }, []);
    return (
        <>
            <h1>Chat</h1>
        </>
    )
}

export default Chat;