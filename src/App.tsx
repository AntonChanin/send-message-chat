import { useEffect, useState } from 'react'

import Title from './components/Title'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import { uuid } from './utils/uuid'

import './App.css'

const userConfig = {
  name: 'Torero',
  id: uuid(),
}

function App() {
  const [messages, setMessages] = useState<{
    id: string,
    senderId: string,
    text: string,
    }[]>([]);
    const [botAnswer, SetBotAnswer] = useState< 
    {status: string, value: string | null }[]>([]);

    const sendMessage = (text: string) => {
        setMessages((prev) => [...prev, {
            id: uuid(),
            senderId: `${userConfig.name}_${userConfig.id}`,
            text
        }]);
        const req = fetch('http://185.46.8.130/api/v1/chat/send-message',
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ message: text })
        })
        .then(function(response) {
            return response.text();
        }).then(function(data) {
            const rowChuncks = data.split('}');
            return JSON.parse(`{ "data": [${rowChuncks.slice(0, rowChuncks.length - 1).join('},')}}] }`);
        })
        .catch(function(res){ console.error(res) })

        req.then(({ data }) => SetBotAnswer(data))
    }

    useEffect(() => {
        if (botAnswer.length) {
            setMessages((prev) => [...prev, {
                id: uuid(),
                senderId: `bot`,
                text: botAnswer.map(({ value }) => value).join(''),
            }]);
        }
    }, [botAnswer]);
  

  return (
    <>
        <div className="app">
            <Title />
            <MessageList 
                roomId={`Room__${userConfig.name}_${userConfig.id}`}
                userId={`${userConfig.name}_${userConfig.id}`}
                messages={messages} />
            <SendMessageForm
                sendMessage={sendMessage}
            />
      </div>
    </>
  )
}

export default App
