import React from "react";

import Cards from "./Cards";

class AjaxCall extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            result: null
        }
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/photos").then((res) => {
            return res.json()
        }).then((result) => {
            this.setState({ result: result.slice(0, 10) }, () => {
                console.log("updated")
                console.log(this.state)
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        const { result } = this.state;
        return (
            <div>
                <h2>Ajax call example</h2>
                <div className="App">
                    {this.state.result ? <Cards data={this.state.result} /> : <img alt="" src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" />}
                </div>
            </div>
        )
    }
}

export default AjaxCall;