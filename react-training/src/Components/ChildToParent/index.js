import React from "react";
import ChildCom from "./childCom";

class ChildToParent extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            childData: ""
        }
    }

    childDataChange = (e) => {
        this.setState({ childData: e.target.value })
    }

    render() {
        return (
            <div>
                <h3>Child to parent Data pass  {this.state.childData}</h3>
                <ChildCom childData={this.state} childDataChange={this.childDataChange} />
            </div>
        )
    }
}

export default ChildToParent;