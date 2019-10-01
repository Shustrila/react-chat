import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/messaging'

const firebaseConfig = {
  apiKey: "AIzaSyBJqsfKW6dES1ihgSbEW3KH0ArW9yhb310",
  authDomain: "chat-fc8a3.firebaseapp.com",
  databaseURL: "https://chat-fc8a3.firebaseio.com",
  projectId: "chat-fc8a3",
  storageBucket: "chat-fc8a3.appspot.com",
  messagingSenderId: "976039180574",
  appId: "1:976039180574:web:4d03933ce1d0f0c995310f"
};

firebase.initializeApp(firebaseConfig);

export const fireDB = firebase.database()

export default firebase