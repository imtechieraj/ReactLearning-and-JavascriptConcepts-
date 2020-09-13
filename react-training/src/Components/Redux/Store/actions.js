import { Apicall, Increment, Decrement } from './const';

export function ajaxcall(payload) {
    console.log("I am ajax call")
    return {
        type: Apicall,
        payload
    }
}

export function incrementFunction() {
    return {
        type: Increment
    }
}

export function decrementFunction() {
    return {
        type: Decrement
    }
}