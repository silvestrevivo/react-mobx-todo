import { autorun, observable } from 'mobx'

class TodoStore {
  @observable todos = ['buy milk', 'buy eggs'];
  @observable filter = '';
}

var store = window.store = new TodoStore()

export default store

autorun(() => {
  console.log('store.todos', store.todos)
})
