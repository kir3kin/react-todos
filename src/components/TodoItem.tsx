import React, { useContext } from "react"
import { iTodoItem } from "../interfaces/interfaces"
import { TodosContext } from '../context/TodosContext'

type TodoItemProps = {
	todo: iTodoItem
	index: number
}

export const TodoItem: React.FC<TodoItemProps> = ({
	todo,
	index
}) => {
	const {removeTodo, todoToggle} = useContext(TodosContext)
	const classTodo: string = todo.completed ? 'todo__completed' : ''

	return (
		<li className="todo__item">
			<span
				className={classTodo}
			>
				<input
					type="checkbox"
					checked={todo.completed}
					onChange={todoToggle!.bind(null, todo.id)}
				/>
				<strong>{index + 1}&nbsp;</strong>
				{todo.title}
			</span>
			<button
				onClick={removeTodo!.bind(null, todo.id)}
				className="rm"
			>&times;</button>
		</li>
	)
}