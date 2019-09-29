import React from 'react'

import Form from './Form'
import Messages from './Messages'

import './index.css'

const Chat = () => {

  return (
    <div className="chat">
      <Messages />
      <Form />
    </div>
  )
}

export default Chat