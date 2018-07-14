import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import {observer} from 'mobx-react'
import PropTypes from 'prop-types'

@observer
class TodoList extends Component {
  static propTypes = {
    store: PropTypes.object
  }

  state = { }
  render () {
    const { todos } = this.props.store
    return (
      <div className="container">
        <h1>TodoList {todos[0]}</h1>
      </div>
    )
  }
}

export default hot(module)(TodoList)
