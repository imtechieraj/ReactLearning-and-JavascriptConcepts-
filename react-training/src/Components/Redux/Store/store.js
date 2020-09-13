import * as redux from 'redux';
import { Increment, Decrement, Apicall } from "./const";

/* Initial State */
const intialState = {
    count: 0,
    ajaxCall: null
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
        case Apicall: {
            return { ...state, ajaxCall: action.payload }
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