import React from "react"
import '../assets/scss/todo/Loader.scss'

export const TodoLoader: React.FC = () => {

	return (
		<div className="lds-ripple"><div></div><div></div></div>
	)
}