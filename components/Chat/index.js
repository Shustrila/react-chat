import React from 'react'

import Form from './Form'
import Messages from './Messages'

import './index.css'

const Chat = ({ messages, addMessage }) => {


  return (
    <div className="chat">
      <div className="chat_wrapper">
        <Messages list={messages} />
      </div>
      <Form send={addMessage} />
    </div>
  )
}

export default Chat