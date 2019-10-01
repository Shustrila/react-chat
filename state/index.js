import { types, onSnapshot } from 'mobx-state-tree'
import { fireDB } from '../utils/firebase'

const MassegeModel = types.model({
  name: types.string,
  text: types.string,
})

const Store = types.model("STORE", {
  messages: types.optional(types.array(MassegeModel), [])
}).actions(self => ({
  addMessage(message) {
    onSnapshot(self, snapshot => console.log(snapshot))
    self.messages.push(message) 
  },
  getMessage() {
    fireDB.ref().child("messages").on('value' , (snapshot) => {
      console.log(snapshot)
    });
  }
}))


export default Store.create({
  messages: [
    { name: 'name', text: 'text' },
    { name: 'name', text: 'text' },
    { name: 'name', text: 'text' },
  ]
})