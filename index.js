import React, { useEffect } from 'react'
import { render } from 'react-dom'
import * as firebase from 'firebase';

import Header from './components/Header'
import Chat from './components/Chat'

import { firebaseConfig } from './assets/config'

import './index.css'

firebase.initializeApp(firebaseConfig);

const App = () => {
  return (
    <div className="app">
      <Header />
      <Chat />
    </div>
  )
}

render(<App />, document.getElementById('root'));
