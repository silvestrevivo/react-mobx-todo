import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import {observer} from 'mobx-react'
import PropTypes from 'prop-types'

@observer
class TodoList extends Component {
  static propTypes = {
    store: PropTypes.object
  }

  filterData = (e) => {
    this.props.store.filter = e.target.value
  }

  state = { }
  render () {
    const { filteredTodos, filter } = this.props.store
    const todoList = filteredTodos.map((item, id) => <li key={id}>{item}</li>)
    return (
      <div className="container">
        <h1>TodoList with MobX</h1>
        <h2>{filter}</h2>
        <input type="text" className="filter" value={filter} onChange={this.filterData} />
        <ul>
          {todoList}
        </ul>
      </div>
    )
  }
}

export default hot(module)(TodoList)
