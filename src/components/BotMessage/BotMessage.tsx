import React, { useEffect } from 'react';

import BotIcon from '../Icons/Bot';
import { typing } from '../../utils/typing';

import styles from './BotMessage.module.scss';

type Props = {
    id: string;
    senderId: string;
    text: string;
    index: number;
}

function Message(props:Props) {
    const { id, text, senderId, index } = props;
    useEffect(() => typing(text, `.${senderId}-${index}`), []);

    return (
        <li  key={id} className={styles.message}>
            <div className={styles.avatar}><BotIcon /></div>
            <div className={`${styles.messageText} ${senderId}-${index}`} />
        </li>
    )
}

export default Message;
