import React, { useEffect } from 'react'
import { render } from 'react-dom'
import { observer } from "mobx-react"

import Header from './components/Header'
import Chat from './components/Chat'

import { fireDB } from './utils/firebase'

import state from './state'

import './index.css'

const App = () => {
  const { messages } = state

  state.getMessage()

  return (
    <div className="app">
      <Header />
      <Chat 
        messages={messages}
        addMessage={state.addMessage}
      />
    </div>
  )
}

const AppObserver = observer(App)

render(<AppObserver />, document.getElementById('root'));
