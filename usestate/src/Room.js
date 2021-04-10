import React from "react";

function Room() {
    const [isOn, setIsOn] = React.useState(false);

    const handleClick = () => {
        setIsOn(!isOn); //switch
    }

    return (
        <div>
            <span>The room is {isOn ? "lit" : "dark"}.</span>
            <br />
            <br />
            <button onClick={handleClick}>Light switch.</button>
        </div>
    )
}

export default Room;