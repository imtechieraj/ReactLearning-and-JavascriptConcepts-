import React from 'react';
import MemoChild from './MemoChild';

class ReactMemo extends React.Component {
    constructor() {
        super();
        this.state = {
            random: null
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ random: Math.random })
        }, 1000);
    }
    render() {
        console.log("I am render");
        return (
            <div>
                <h1>ReactMeno Example {this.state.random}</h1>
                <MemoChild />
            </div>
        )
    }
}

export default ReactMemo;