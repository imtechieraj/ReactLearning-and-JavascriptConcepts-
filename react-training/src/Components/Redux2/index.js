import React from "react";
import store from "./reducer";
import { AjaxCallAction } from "./actions";
import { connect } from 'react-redux'
import Cards from '../AjaxCall/Cards';

class Redux2 extends React.PureComponent {
    constructor() {
        super();
    }
    componentDidMount() {

        fetch("https://jsonplaceholder.typicode.com/photos").then((res) => {
            return res.json()
        }).then((result) => {
            // store.dispatch(AjaxCallAction(result));
            this.props.ajaxCallforProps(result)

            // console.log(store.getState())
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        console.log(this.props)
        // const { ajaxCall } = this.props;
        return (
            <div>
                <h2>Redux Example - 2</h2>
                {/* <div className="App">
                    {ajaxCall ? <Cards data={ajaxCall} /> : <img alt="" src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />}
                </div> */}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log("I am a mapStateToprops")
    console.log("I am a mapStateToprops", state)
    console.log("I am a mapStateToprops --- OwnProps", ownProps)
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        ajaxCallforProps: data => dispatch(AjaxCallAction(data)),
    };
}

// export default Redux2;

export default connect(mapStateToProps, mapDispatchToProps)(Redux2);
