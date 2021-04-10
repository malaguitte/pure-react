import React from "react";

function FirstChildOnly({ children }) {
    const item = React.Children.toArray(children)[0];
    return (<div>{item}</div>);
}

export default FirstChildOnly;