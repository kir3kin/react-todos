import React, { useState } from "react"

type AddTodoProps = {
	createTodo: (value: string) => void
}

type inputValuesOutputType = {
	attributes: {
		value: string
		onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	},
	clear: () => void,
	value: () => string
}

// ! cusotm hook for input element
const useInputValues = (defaultValue: string = ''): inputValuesOutputType => {
	const [value, setValue] = useState<string>(defaultValue)

	return {
		attributes: {
			value,
			onChange: (event) => {
				setValue(event.target.value)
			}
		},
		clear: () => setValue(''),
		value: () => value
	}
}

export const AddTodo: React.FC<AddTodoProps> = ({ createTodo }) => {

	const input = useInputValues('')

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault()
		if (input.value().trim()) {
			createTodo(input.value())
			input.clear()
		}
	}

	return(
		<form
			onSubmit={event => submitHandler(event)}
			className="todo__form"
		>
			<input
				type="text"
				{...input.attributes}
			/>
			<button type="submit">Add todo</button>
		</form>
	)
}