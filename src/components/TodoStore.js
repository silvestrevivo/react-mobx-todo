import { computed, observable } from 'mobx'

class TodoStore {
  @observable todos = ['buy milk', 'buy eggs'];
  @observable filter = '';
  @computed get filteredTodos () {
    let matchesFilter = new RegExp(this.filter, 'i')
    return this.todos.filter(item => !this.filter || matchesFilter.test(item))
  }
}

var store = new TodoStore()

export default store
