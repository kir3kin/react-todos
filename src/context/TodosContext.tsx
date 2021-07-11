import React from "react"

type TodosContextType = {
	removeTodo(id: number): void
	todoToggle: (id: number) => void
}

const tempContext = {
	removeTodo: () => {},
	todoToggle: () => {}
}

export const TodosContext = React.createContext<TodosContextType>(tempContext)
// export const TodosContext = React.createContext<object>({})