import React from "react";
import store from "./Store/store";
// import { Increment, Decrement } from "./Store/const";
import { ajaxcall, incrementFunction, decrementFunction } from "./Store/actions";
import { connect } from 'react-redux'
import Cards from '../AjaxCall/Cards';
import PropsShare from './PropsShare';
// console.log(ajaxcall)
class ReduxExample extends React.PureComponent {
    constructor() {
        super()
    }
    Increment = () => {
        //Actions
        // store.dispatch({ type: Increment });
        this.props.incrementFunctionProps()
        console.log(store.getState())
    }
    Decrement = () => {
        this.props.decrementFunctionProps()

        // store.dispatch({ type: Decrement });
        console.log(store.getState())
    }
    componentDidMount() {
        // fetch("https://jsonplaceholder.typicode.com/photos").then((res) => {
        //     return res.json()
        // }).then((result) => {
        //     let getTenvalues = result.slice(0, 10);
        //     store.dispatch(ajaxcall(getTenvalues))
        //     console.log(store.getState())
        // }).catch((err) => {
        //     console.log(err)
        // })
    }
    Apicall = () => {
        fetch("https://jsonplaceholder.typicode.com/photos").then((res) => {
            return res.json()
        }).then((result) => {
            let getTenvalues = result.slice(0, 10);
            this.props.ajaxCallforProps(getTenvalues)

            // store.dispatch(ajaxcall(getTenvalues))
            console.log(store.getState())
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Redux Example</h1>

                <button onClick={this.Increment}>Increment</button>
                <button onClick={this.Decrement}>Decrement</button>
                <button onClick={this.Apicall}>Ajax Call</button>
                {this.props.ajaxCall ? <Cards data={this.props.ajaxCall} /> : <img alt="" src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />}
                <PropsShare Increment={this.props.incrementFunctionProps} Decrement={this.props.decrementFunctionProps}></PropsShare>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("I am a mapStateToprops")
    console.log("I am a mapStateToprops", state)
    return state
}


const mapDispatchToProps = (dispatch) => {
    return {
        ajaxCallforProps: data => dispatch(ajaxcall(data)),
        incrementFunctionProps: () => dispatch(incrementFunction()),
        decrementFunctionProps: () => dispatch(decrementFunction())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxExample);