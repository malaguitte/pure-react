import React from "react";

function Head({ numberOfElementsToRender, children }) {
    const items = React.Children.toArray(children);
    const toRender = [];
    for (let i = 0; i < numberOfElementsToRender; i++) {
        toRender.push(<span key={i}>{items[i]}</span>);
    }
    return (<div>{toRender}</div>);
}

export default Head;