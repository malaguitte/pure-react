import React, { useRef } from "react";

function InputExampleUseRef(props) {
    const input = useRef();
    const showValue = () => {
        alert(`Input contains "${input.current.value}"`);
    }

    return (
        <div>
            <input type="text" ref={input} />
            <br />
            <button onClick={showValue}>Show the value.</button>
        </div>
    )
}

export default InputExampleUseRef;