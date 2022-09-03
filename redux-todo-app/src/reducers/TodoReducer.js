export const TodoReducer = (state = { todos: ['fsdaf'] }, action) => {
	switch (action.type) {
		case 'add-todo':
			return {
				...state,
				todos: [...state.todos, action.payload]
			}

		case 'delete-todo':
			state.todos.splice(action.payload, 1);

			return {
				...state,
				todos: [...state.todos]
			}

		default:
			return state;
	}
}