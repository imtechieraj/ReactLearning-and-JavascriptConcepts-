import React from "react";
//<React.fragment></React.fragment>
const dynamicComponent = () => {
    return (
        <>
            <p>This is dynamic component</p>
            <pre>asds
            dsf
            sd
            fsffgfg
            sdf
            sdffsd
            fs
            df
        </pre>
        </>

    )
}

const dynamicArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Fragments = () => {
    return (
        <div>
            <h1>Fragments example</h1>
            {dynamicArr.map((data, i) => {
                return (
                    // <div key={i}>
                    dynamicComponent()
                    // </div>
                )
            })}
        </div>
    )
}

export default Fragments;