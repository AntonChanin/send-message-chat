import React from 'react';

import Message from '../Message';
import BotMessage from '../BotMessage';
import styles from './MessageList.module.css';

type Props = {
    messages: {
        id: string;
        senderId: string;
        text: string;
    }[];
    roomId: string;
    userId: string;
}

function MessageList(props:Props) {
    const { messages, userId } = props;
    return  (
        <ul className={styles.messageList}>
            {messages.map((message, index) => {
                return (
                    message.senderId === userId
                        ? <Message key={message.id} {...message} />
                        : <BotMessage key={message.id}  {...message} index={index} />
                )
            })}
        </ul>
    );
};

export default MessageList;
