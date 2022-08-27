import React, { useReducer } from "react";
import { TodoReducer } from "../reducers/TodoReducer";

const initialValue = {
	todos: [],
	addTodo: () => {},
	removeTodo: () => {}
}

const TodoContext = React.createContext(initialValue);

export const TodoContextProvider = (props) => {

	const [todoReducerStateValue, dispatchTodo] = useReducer(TodoReducer,initialValue);

	const addTodo = (todo) => {
		dispatchTodo({ type: 'add-todo', payload: todo })
	}

	const removeTodo = (index) => {
		dispatchTodo({ type: 'delete-todo', payload: index })
	}

	return (
		<TodoContext.Provider value={{
			...initialValue,
			todos: todoReducerStateValue.todos,
			addTodo,
			removeTodo
		}}>{props.children}</TodoContext.Provider>
	)
}


export default TodoContext;