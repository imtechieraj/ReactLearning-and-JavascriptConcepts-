import React from 'react';
const PropsShare = (props) => {
    console.log(props)
    return (
        <div>
            <button onClick={props.Increment}>Increment (I am child comp)</button>
            <button onClick={props.Decrement}>Decrement (I am child comp)</button>
        </div>
    )
}

export default PropsShare;