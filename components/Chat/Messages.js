import React from 'react'

import './Messages.css'

const Messages = ({ list }) => {
  return (
    <ul className="chat_messages">
      { list.map((item) => (
        <li className="chat_message">
          <p className="chat_message-name">{ item.name }</p>
          <p className="chat_message-text">{ item.text }</p>
        </li>
      )) }
    </ul>
  )
}

export default Messages
