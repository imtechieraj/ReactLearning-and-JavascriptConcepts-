import React from "react";
import store from "./Store/store";
// import { Increment, Decrement } from "./Store/const";
import { ajaxcall, incrementFunction, decrementFunction, searchFunction } from "./Store/actions";
import { connect } from 'react-redux'
import Cards from '../AjaxCall/Cards';
import PropsShare from './PropsShare';
import { makeGetBarState, makeGetAlState, makeGetTotalMark } from './selectors'

// console.log(ajaxcall)
class ReduxExample extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            searchVal: ""
        }
        console.log(store)
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

    // static defaultProps={
    //     id:null
    // }
    searchFun = (e) => {
        console.log(e.target.value)
        this.setState({ searchVal: e.target.value })
        // let convertInt = parseInt(e.target.value)
        // if (e.target.value === "") {
        //     this.setState({ searchVal: 1 }, () => {
        //         this.props.searchFunctionProps(1)
        //     })
        // } else {
        // this.setState({ searchVal: e.target.value }, () => {
        //     this.props.searchFunctionProps(e.target.value)
        // })
        // }

    }

    searchBtn = () => {
        this.props.searchFunctionProps(this.state.searchVal)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Redux Example</h1>
                <input type="text" value={this.state.searchVal} onChange={this.searchFun}></input> <br />
                <button onClick={this.searchBtn}>Submit</button>
                <button onClick={this.Increment}>Increment</button>
                <button onClick={this.Decrement}>Decrement</button>
                <button onClick={this.Apicall}>Ajax Call</button>
                {this.props.ajaxCall ? <Cards data={this.props.ajaxCall} /> : <img alt="" src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />}
                <PropsShare Increment={this.props.incrementFunctionProps} Decrement={this.props.decrementFunctionProps}></PropsShare>
            </div>
        )
    }
}

// const mapStateToProps = (state,ownProps) => {
//     console.log("I am a mapStateToprops")
//     console.log("I am a mapStateToprops", state)
//     console.log("I am a mapStateToprops --- OwnProps", ownProps)
//     return state
// }

const makeMapStateToProps = () => {
    const getBarState = makeGetBarState()
    const getallState = makeGetAlState();
    const totalMark = makeGetTotalMark();
    const mapStateToProps = (state, props) => {
        return {
            bar: getBarState(state, props),
            allState: getallState(state, props),
            totalMark: totalMark(state)
        }
    }
    return mapStateToProps
}


const mapDispatchToProps = (dispatch) => {
    return {
        ajaxCallforProps: data => dispatch(ajaxcall(data)),
        incrementFunctionProps: () => dispatch(incrementFunction()),
        decrementFunctionProps: () => dispatch(decrementFunction()),
        searchFunctionProps: (data) => dispatch(searchFunction(data))
    };
}

export default connect(makeMapStateToProps, mapDispatchToProps)(ReduxExample);
// export default connect(mapStateToProps, mapDispatchToProps)(ReduxExample);