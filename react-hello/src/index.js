import React from "react";
import ReactDOM from "react-dom";

function HelloWorld() {
    // return (
    //     <div>Hello World!</div>
    // );
    // return React.createElement(
    //     "div",
    //     {},
    //     "Hello World!"
    // );

    return (
        <>
            <Hello /> <World /> !
        </>
    );
}
/*
function songName(props) {
    return (
        <span className="song-name">
            {props.song.name}
        </span>
    )
}
*/

function Hello() {
    return <span>Hello</span>;
}

function World() {
    return <span>World</span>;
}

ReactDOM.render(
    <HelloWorld />,
    document.getElementById("root")
);