import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import '../assets/sass/style.scss'
import TodoList from './components/TodoList'
import store from './components/TodoStore'

ReactDOM.render(<TodoList store={store} />, document.getElementById('root'))
