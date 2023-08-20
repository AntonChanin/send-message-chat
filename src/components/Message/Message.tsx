import React from 'react';

import styles from './Message.module.scss';

type Props = {
    id: string;
    senderId: string;
    text: string;
}

function Message(props:Props) {
    const { id, senderId, text } = props;
    return (
        
        <li  key={id} className={styles.message}>
            <div className={styles.messageText}>
                {text}
            </div>
            <div className={styles.avatar}>{senderId[0]}</div>
        </li>
    )
}

export default Message;
