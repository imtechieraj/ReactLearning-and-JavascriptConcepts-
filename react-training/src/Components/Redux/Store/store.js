import * as redux from 'redux';
import { Increment, Decrement, Apicall, Search } from "./const";

/* Initial State */
const intialState = {
    count: 0,
    searchId: "raj",
    ajaxCall: null,
    foo: {
        bar: [
            {
                id: 1,
                name: "raj",
                mark: 35
            },
            {
                id: 2,
                name: "raja",
                mark: 50
            },
            {
                id: 3,
                name: "rajesh",
                mark: 22
            },
            {
                id: 4,
                name: "raju",
                mark: 45
            }
        ]
    },
    totalMark: 0
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
        case Search: {
            return { ...state, searchId: action.payload }
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