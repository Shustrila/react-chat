import React from 'react'

import './Form.css'

const Form = () => {

  return (
    <form className="chat_form">
      <input 
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