import React from 'react';

import './Message.css';

type Props = {
    id: string;
    senderId: string;
    text: string;
}

function Message(props:Props) {
    const { id, senderId, text } = props;
    return (
        
        <li  key={id} className="message">
            <div className="message-text">
                {text}
            </div>
            <div className="avatar">{senderId[0]}</div>
        </li>
    )
}

export default Message;
