import React from 'react'

import './Form.css'

const Form = ({ send }) => {
  const inputRef = React.createRef()
  const onSubmit = (e) => {
    e.preventDefault()

    send({
      name: 'new-name',
      text: 'new-text',
    });
  }

  return (
    <form className="chat_form" onSubmit={onSubmit} >
      <input 
        ref={inputRef}
        className="chat_form-message"
        type="text" 
        name="message" 
        placeholder="Message" 
      />
      <input 
        className="chat_form-submit"
        type="submit"
        name="submit"
        value="Send"
      />
    </form>
  )
}

export default Form