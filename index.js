import React, { useEffect } from 'react'
import { render } from 'react-dom'
import { observer } from "mobx-react"
import * as firebase from 'firebase'

import Header from './components/Header'
import Chat from './components/Chat'

import { firebaseConfig } from './assets/config'

import { getMessages } from './firebase/messages'

import state from './state'

import './index.css'

// firebase.initializeApp(firebaseConfig);

const App = () => {
  const { messages } = state

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
