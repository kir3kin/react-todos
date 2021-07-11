import React, { useState } from 'react'
import { TodoList } from './components/TodoList'
import { iTodoItem } from './interfaces/interfaces'
import { TodosContext } from './context/TodosContext'
import { AddTodo } from './components/AddTodo'
import { useEffect } from 'react'

export const App: React.FC = () => {
  const todoItem = [
    {id: 1, title: 'buy something 1', completed: true},
    {id: 2, title: 'buy something 2', completed: false},
    {id: 3, title: 'buy something 3', completed: false}
  ]
  const [todos, setTodos] = useState<iTodoItem[]>(todoItem)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => setTodos(todos))
  }, [])


  const inputToggle = (id: number): void => {
		setTodos(todos.map(todo => {
      if (todo.id === id) todo.completed = !todo.completed
      return todo
    }))
	}

  const removeTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const createTodo = (value: string): void => {
    setTodos(todos.concat([{
      title: value,
      id: Date.now(),
      completed: false
    }]))
  }

  return (
    // TODO create one object for Todoscontext and properly describe it in interfaces.ts (using !)
    <TodosContext.Provider value={ {removeTodo, todoToggle: inputToggle} }>
      <div className="wrapper">
        <h1>Todos form</h1>
        <AddTodo createTodo={createTodo} />
        {todos.length ? <TodoList todos={todos} /> : <p>No todo items</p> }
        
      </div>
    </TodosContext.Provider>
  )
}