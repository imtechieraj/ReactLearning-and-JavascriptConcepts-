import React from "react";

class ComVsPureCom extends React.PureComponent {
    constructor() {
        super();
        console.log("I am a Constructor");
        this.state = {
            name: "Rajkumar"
        }
    }

    componentDidMount() {
        console.log("I am componentDidMount")
        //Call Default API
        setInterval(() => {
            console.log("I am setinterval function")
            this.setState({ name: "Rajkumar" })
            // this.state.random=Math.random();
            console.log(this.state)
        }, 1000)
    }

    render() {
        console.log("I am a Render")

        return (
            <div>
                <h1>Class base Component {this.state.name}</h1>
                <p>{this.state.name}</p>
            </div>
        )
    }
}

export default ComVsPureCom;