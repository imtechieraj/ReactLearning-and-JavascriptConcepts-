import React from "react";
import store, { Increment, Decrement } from "./Store/store";



class ReduxExample extends React.PureComponent {
    constructor() {
        super()
    }
    Increment = () => {
        //Actions
        store.dispatch({ type: Increment });
        console.log(store.getState())
    }
    Decrement = () => {
        
        store.dispatch({ type: Decrement });
        console.log(store.getState())
    }

    render() {
        return (
            <div>
                <h1>Redux Example</h1>

                <button onClick={this.Increment}>Increment</button>
                <button onClick={this.Decrement}>Decrement</button>
            </div>
        )
    }
}

export default ReduxExample;