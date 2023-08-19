import React, { useState } from 'react';

import Send from '../Icons/Send';

import styles from  './SendMessageForm.module.css';

type Props = {
    sendMessage(message: string): void;
}

function SendMessageForm(props:Props) {
    const { sendMessage } = props;
    const [ message, setMessage ] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    }
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendMessage?.(message);
        setMessage('');
    }

    return  (
        <form
            onSubmit={handleSubmit}
            className={styles.sendMessageForm}>
            <input
                onChange={handleChange}
                value={message}
                placeholder="Type your message and hit ENTER"
                type="text"
                className={styles.sendMessageInput}
            />
            <button className={styles.sendMessageButton} type="submit"><Send /></button>
        </form>
    );
};

export default SendMessageForm;
