import React from "react";

const ErrorBoundaryChild = (props) => {
    if (props.tech === "Nodejs") {
        throw new Error("I am not a frontend tech")
    } else if (props.tech === "typescript") {
       throw new Error("I am not a frontent tech 2")
    }else{
        return (
            <div>
                <h1>{props.tech}</h1>
            </div>
        )
    }
}


export default ErrorBoundaryChild;