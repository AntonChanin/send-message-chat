import React from 'react';

type Props = {
    messages: {
        id: string;
        senderId: string;
        text: string;
    }[];
    roomId: string;
}

function MessageList(props:Props) {
    const { messages } = props;
    return  (
        <ul className="message-list">
            {messages.map((message, index) => {
                return (
                    <li  key={message.id} className="message">
                    <div>{message.senderId}</div>
                    <div>{message.text}</div>
                    </li>
                )
            })}
        </ul>
    );
};

export default MessageList;
