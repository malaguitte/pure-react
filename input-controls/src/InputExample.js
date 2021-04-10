import React, { useState } from "react";

function InputExample(props) {
    const [text, setText] = useState("");
    const canUseNumbers = props?.numbers_allowed === 1;

    const handleChange = (event) => {
        const newText = event.target.value;
        canUseNumbers
            ? setText(newText)
            : setText(newText.replace(/[0-9]/g, ''));
    }

    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={handleChange}
                numbers_allowed={props.numbers_allowed} // 1 = true, 0 = false
            >
            </input>
            <br />
            <span>{text}</span>
        </div>

    )
}

export default InputExample;