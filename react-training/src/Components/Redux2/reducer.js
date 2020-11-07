import * as redux from 'redux';
import { ajaxCallData } from './const';

const intialState = {
    ajaxCall: null
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case ajaxCallData: {
            console.log("I am coming after dispatch")
            return { ...state, ajaxCall: action.payload }
        }
    }
}

const store=redux.createStore(reducer);

export default store;