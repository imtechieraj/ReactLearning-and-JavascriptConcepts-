import * as redux from 'redux';

/* constants */
export const Increment = 'Increment';
export const Decrement = 'Decrement';

/* Initial State */
const intialState = {
    count: 0,
}

/* Update the state value */

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case Increment: {
            return { ...state, count: state.count + 1 }
        }
        case Decrement: {
            return { ...state, count: state.count - 1 }
        }
        default: {
            return state;
        }
    }
}

/* Create store */
const store = redux.createStore(reducer);

/* Export our store */
export default store;