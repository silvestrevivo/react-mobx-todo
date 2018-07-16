<div align="center">
  <img width="200" height="200"
    src="https://sandstorm.de/_Resources/Persistent/3285416e8503b2c8354c321bcd690cf550b8b2d3/React-Logo.svg">
  <a href="https://github.com/mobxjs/mobx">
    <img width="200" height="200"
      src="https://mobx.js.org/docs/mobx.png">
  </a>
  <h1>React MobX todo</h1>
</div>

First approaching to MobX with a simple todo-react application. This application make use of three important modules from MobX: computed, observable and action.

```
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

```
