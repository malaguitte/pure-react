import React, { useRef } from "react";

function FirstNameLastNameUseRef(props) {
    const nameInput = useRef();
    const surnameInput = useRef();
    const displayValue = () => {
        alert(`Currently the value is "${nameInput.current.value} ${surnameInput.current.value}"`);
    }

    return (
        <div>
            <input type="text" ref={nameInput} />
            <input type="text" ref={surnameInput} />
            <br />
            <button onClick={displayValue}>Show values!</button>
        </div>

    )
}

export default FirstNameLastNameUseRef;