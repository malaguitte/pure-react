import React from "react";

function Tail({ numberOfElementsToRender, children }) {
    const items = React.Children.toArray(children);
    const toRender = [];
    for (let i = items.length - 1; i > numberOfElementsToRender; i--) {
        toRender.push(<span key={i}>{items[i]}</span>);
    }
    return (<div>{toRender}</div>);
}

export default Tail;