import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import '../index.css'

const App = () => (
  <div className='wrapper'>
    <div className='buttonWrap'>
      <AddTodo />
    </div>
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
