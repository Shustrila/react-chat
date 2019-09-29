import * as firebase from 'firebase'

const messagesRef = firebase.ref('messages')

export const getMessages = () => {
  console.log(messagesRef)
}