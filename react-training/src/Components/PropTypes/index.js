import React from 'react';
import PropstypeCheck from './PropstypeCheck';

class PropTypes extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            propsVal1: 1212,
            propsVal2: 25,
            propsVal3: "chennai"
        }
    }
    render() {
        return (
            <div>
                <h1>PropTypes example</h1>
                <PropstypeCheck StringProp={this.state.propsVal1} numberProp={this.state.propsVal2} />
            </div>
        )
    }
}

export default PropTypes;