import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import Background from './components/Icons/Background'

function App() {
  const [count, setCount] = useState(0);

  const sendMessage = (text: string) => {
      // currentUser.sendMessage({
      //     text,
      //     roomId: roomId
      // })
  }

  return (
    <>
        <div className="app">
            <Title />
            <MessageList 
                roomId={'this.state.roomId'}
                userId="perborgen"
                messages={[
                    {
                        id: '0',
                        senderId: "perborgen",
                        text: "who'll win?"
                    },
                    {
                        id: '1',
                        senderId: "janedoe",
                        text: "who'll win?"
                    }
                  ]} />
            <SendMessageForm
                sendMessage={sendMessage}
            />
      </div>
    </>
  )
}

export default App
