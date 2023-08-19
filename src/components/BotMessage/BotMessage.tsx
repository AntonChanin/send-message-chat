import React from 'react';

import BotIcon from '../Icons/Bot';
import styles from './BotMessage.module.css';

type Props = {
    id: string;
    senderId: string;
    text: string;
}

function Message(props:Props) {
    const { id, senderId, text } = props;
    return (
        
        <li  key={id} className={styles.message}>
            <div className={styles.avatar}><BotIcon /></div>
            <div className={styles['message-text']}>
                {text}
            </div>
        </li>
    )
}

export default Message;
