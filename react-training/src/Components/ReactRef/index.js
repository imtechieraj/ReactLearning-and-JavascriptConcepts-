import React from "react";

class ReactRef extends React.Component {
    constructor() {
        super();
        console.log(this)
        this.textInput = React.createRef();
    }

    FocusText = () => {
        this.textInput.current.blur();
    }
    componentDidMount() {
        this.textInput.current.focus();
    }
    
    render() {
        return (
            <div>
                <h1>ReactRef Example</h1>
                <input type="text" ref={this.textInput} />
                <button type="button" onClick={this.FocusText}>Click me</button>
            </div>
        )
    }
}

export default ReactRef;