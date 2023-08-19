import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'

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
            messages={[]} />
        <SendMessageForm
            sendMessage={sendMessage}
        />
      </div>
    </>
  )
}

export default App
