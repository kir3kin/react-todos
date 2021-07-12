import React from "react"
import { iTodoItem } from "../interfaces/interfaces"
import { TodoItem } from "./TodoItem"
import '../assets/scss/todo/Todos.scss'
import '../assets/scss/todo/TodoTransitions.scss'
import { TransitionGroup, CSSTransition } from "react-transition-group"

type TodoListProps = {
	todos: iTodoItem[]
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {

	return (
		<TransitionGroup component="ul" className="todo__list">
			{todos.map((todo, idx) => {
				return (
					<CSSTransition
						key={todo.id}
						timeout={800}
						classNames={'todo-item'}
					>
						<TodoItem
							todo={todo}
							index={idx}
						/>
					</CSSTransition>
				)
			})}
		</TransitionGroup>
	)
}