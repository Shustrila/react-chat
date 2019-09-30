import { types, onSnapshot } from 'mobx-state-tree'

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
  } 
}))


export default Store.create({
  messages: [
    { name: 'name', text: 'text' },
    { name: 'name', text: 'text' },
    { name: 'name', text: 'text' },
  ]
})