export const counterReducer = (state,action) => {
	
	if(action.type === 'increment') {
		return {
			...state,
			counter: state.counter + action.data
		};
	}
	return state;
}