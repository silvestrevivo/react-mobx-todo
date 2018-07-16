import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import PropTypes from 'prop-types'
import {observer} from 'mobx-react'
import DevTools from 'mobx-react-devtools'

@observer
class TodoList extends Component {
  static propTypes = {
    store: PropTypes.object
  }

  filterData = (e) => {
    this.props.store.filter = e.target.value
    // not needed this.setState({})
  }

  createData = (e) => {
    if (e.charCode === 13) {
      this.props.store.createTodo(e.target.value)
      // here we call an action in the store
      e.target.value = ''
    }
  }

  checkData = (item) => {
    item.complete = !item.complete
  }

  state = { }
  render () {
    const { filteredTodos, filter } = this.props.store
    const todoList = filteredTodos.map(item =>
      <li key={item.id}>{item.value}
        <input type="checkbox"
          value={item.complete}
          checked={item.complete}
          onChange={() => this.checkData(item)} />
      </li>
    )
    return (
      <div className="container">
        <DevTools />
        <h1>TodoList with MobX</h1>
        <label name="create">Create todo item</label><br />
        <input type="text" id="create" onKeyPress={this.createData} /><br />
        <label name="filter">Filter item</label><br />
        <input type="text" id="filter" value={filter} onChange={this.filterData} />
        <ul>
          {todoList}
        </ul>
        <button onClick={this.props.store.clearComplete}>Delete completed</button>
      </div>
    )
  }
}

export default hot(module)(TodoList)
