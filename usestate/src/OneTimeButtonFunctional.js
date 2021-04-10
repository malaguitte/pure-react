import React from "react";

function OneTimeButtonFunctional({ onClick }) {
    const [clicked, setClicked] = React.useState(false);

    const handleClick = () => {
        onClick();
        setClicked(true);
    }

    return (
        <button
            onClick={handleClick}
            disabled={clicked}
        >
        You can click me once.
        </button>
    )
}

export default OneTimeButtonFunctional;