import React, { useState, lazy } from 'react'
import { TodoList } from './components/TodoList'
import { iTodoItem } from './interfaces/interfaces'
import { TodosContext } from './context/TodosContext'
import { useEffect } from 'react'
import { TodoLoader } from './components/TodoLoader'

// import AddTodo from './components/AddTodo'
// Lazy loading for the AddTodo component
const AddTodo = lazy(() => import('./components/AddTodo'))

export const App: React.FC = () => {
  // const todoItem = [
  //   {id: 1, title: 'buy something 1', completed: true},
  //   {id: 2, title: 'buy something 2', completed: false},
  //   {id: 3, title: 'buy something 3', completed: false}
  // ]
  const [todos, setTodos] = useState<iTodoItem[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {

        // Emulating server's respond delay
        setTimeout(() => {
          setTodos(todos)
          setLoading(false)
        }, 2000)
      })
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
    setTodos(todos.concat([
      {
        title: value,
        id: Date.now(),
        completed: false
      }
    ]))
  }

  return (
    // TODO create one object for Todoscontext and properly describe it in interfaces.ts (using !)

    <TodosContext.Provider value={ {removeTodo, todoToggle: inputToggle} }>
      <div className="wrapper">
        <h1>Todos form</h1>

        <React.Suspense fallback={<p>Loading AppTodo component...</p>}>
          <AddTodo createTodo={createTodo} />
        </React.Suspense>

        {loading && <TodoLoader />}
        {todos.length ? (
          <TodoList todos={todos} />
        ) : loading ? null : (
          <p>There are no todos left</p>
        )}
        
      </div>
    </TodosContext.Provider>
  )
}