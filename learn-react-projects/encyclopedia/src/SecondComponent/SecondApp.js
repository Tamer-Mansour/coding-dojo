import React, { useState } from 'react';
import MessageForm from './MessageForm';
import MessageDisplay from './MessageDisplay';
    
    
function SecondApp() {
    const [currentMsg, setCurrentMsg] = useState("There are no messages");
    const youveGotMail = ( newMessage ) => {
        setCurrentMsg( newMessage );
    }
    return (
        <>
            <MessageForm onNewMessage={ youveGotMail } />
            <MessageDisplay message1={ currentMsg } />
        </>
    );
}
    
export default SecondApp;