import React, { useState } from 'react';

import './SendMessageForm.css';
import Send from '../Icons/Send';

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
            className="send-message-form">
            <input
                onChange={handleChange}
                value={message}
                placeholder="Type your message and hit ENTER"
                type="text"
                className="send-message-input"
            />
            <button className="send-message-button" type="submit"><Send /></button>
        </form>
    );
};

export default SendMessageForm;
