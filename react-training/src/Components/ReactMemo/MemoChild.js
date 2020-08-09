import React from "react";

const MemoChild = () => {
    console.log("I am a child Component")
    return (
       <p>memo example</p>
    )
}

// export default MemoChild;
export default React.memo(MemoChild);