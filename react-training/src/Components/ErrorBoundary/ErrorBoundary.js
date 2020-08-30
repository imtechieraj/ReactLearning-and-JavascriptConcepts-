import React from "react";
import ErrorBoundaryChild from "./ErrorBoundaryChild";
import ErrorComponent from "./ErrorComponent";

class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h1>Error Boundary</h1>
                <ErrorComponent>

                    <ErrorBoundaryChild tech="Reactjs" />
                </ErrorComponent>
                <ErrorComponent>

                    <ErrorBoundaryChild tech="Angular" />
                </ErrorComponent>

                <ErrorComponent>
                    <ErrorBoundaryChild tech="typescript" />
                </ErrorComponent>
                <ErrorComponent>
                    <ErrorBoundaryChild tech="Nodejs" />
                </ErrorComponent>
            </div>
        )
    }
}

export default ErrorBoundary;