const redux = require('redux');

const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + 1
            };
        case 'decrement':
            return {
                ...state,
                count: state.count - 1
            }

        default:
            return state;
    }
}

const store = redux.createStore(counterReducer);

store.subscribe(() => {
    const currentCount = store.getState();
    console.log(currentCount);
});

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
