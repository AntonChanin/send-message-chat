import React, { useEffect } from 'react';

import BotIcon from '../Icons/Bot';

import styles from './BotMessage.module.css';
import { typing } from '../../utils/typing';

type Props = {
    id: string;
    senderId: string;
    text: string;
    index: number;
}

function Message(props:Props) {
    const { id, text, index } = props;
    useEffect(() => typing(text, `.out-${index}`), []);

    return (
        <li  key={id} className={styles.message}>
            <div className={styles.avatar}><BotIcon /></div>
            <div className={`${styles['message-text']} out-${index}`} />
        </li>
    )
}

export default Message;
