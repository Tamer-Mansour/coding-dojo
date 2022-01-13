import React, { useState } from 'react';
import MessageForm from './Components/MessageForm';
import MessageDisplay from './Components/MessageDisplay';


function Test2() {
    const [currentMsg, setCurrentMsg] = useState("There are no messages");

    const youveGotMail = (newMessage) => {
        setCurrentMsg(newMessage);
    }

    return (
        <>
            <MessageForm onNewMessage={youveGotMail} />
            <MessageDisplay message={currentMsg} />
        </>
    );
}

export default Test2;