import React from "react"
import { iTodoItem } from "../interfaces/interfaces"
import { TodoItem } from "./TodoItem"
import '../assets/scss/todo/Todos.scss'

type TodoListProps = {
	todos: iTodoItem[]
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {

	return (
		<ul className="todo__list">
			{todos.map((todo, idx) => {
				return	<TodoItem
									todo={todo}
									index={idx}
									key={todo.id}
								/>
			})}
		</ul>
	)
}