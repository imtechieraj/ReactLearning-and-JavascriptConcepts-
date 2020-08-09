import React from "react";

class LifeCycle extends React.Component {
    constructor() {
        super();
        console.log("I am a Constructor");
        this.state = {
            random: null,
            name:"Raj"
        }
    }

    componentDidMount() {
        console.log("I am componentDidMount")
        //Call Default API
        setInterval(() => {
            console.log("I am setinterval function")
            this.setState({ name: "Raj" })
            // this.state.random=Math.random();
            console.log(this.state)
        }, 1000)
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(nextState)
    //   if (this.state.name === nextState.name) {
    //     return false
    //   } return true
    // }


    render() {
        console.log("I am a Render")

        return (
            <div>
                <h1>Class base Component {this.state.random}</h1>
                <p>{this.state.random}</p>
            </div>
        )
    }
}

export default LifeCycle;