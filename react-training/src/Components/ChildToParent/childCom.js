import React from "react";

const ChildCom = (props) => {
    const { childData, childDataChange } = props;
    return (
        <div>
            <h4>Child component</h4>
            <input value={childData.childData} onChange={(e) => { childDataChange(e) }} ></input>
        </div>
    )
}

export default ChildCom;