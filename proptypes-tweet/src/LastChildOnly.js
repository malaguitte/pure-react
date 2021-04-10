import React from "react";

function LastChildOnly({ children }) {
    const lastElementIndex = children.length - 1;
    const item = React.Children.toArray(children)[lastElementIndex];
    return (<div>{item}</div>);
}

export default LastChildOnly;