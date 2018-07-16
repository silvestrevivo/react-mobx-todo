import { computed, observable, action } from 'mobx'

class Todo {
  @observable value
  @observable id
  @observable complete

  constructor (value) {
    this.value = value
    this.id = Date.now()
    this.complete = false
  }
}

class TodoStore {
  @observable todos = [];
  @observable filter = '';
  @computed get filteredTodos () {
    let matchesFilter = new RegExp(this.filter, 'i')
    return this.todos.filter(item => !this.filter || matchesFilter.test(item.value))
  }

  @action createTodo (value) {
    this.todos.push(new Todo(value))
  }

  @action clearComplete = () => {
    // arrow function because we are referring in the component directly
    // to this function and not through another one like with createTodo
    let completed = this.todos.filter(item => item.complete === false)
    this.todos.replace(completed)
    // with observables, we need to use replace to set a new Array
  }
}

var store = new TodoStore()

export default store
