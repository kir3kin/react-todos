export interface iTodoItem {
	id: number
	title: string
	completed: boolean
}

export type inputValuesOutputType = {
	attributes: {
		value: string
		onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	},
	clear: () => void,
	value: () => string
}

export type AddTodoProps = {
	createTodo: (value: string) => void
}

export interface iTodosContext {
	removeTodo(id: number): void
	todoToggle: (id: number) => void
}
