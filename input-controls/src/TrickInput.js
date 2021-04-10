import React, { useState } from "react";

function TrickInput(props) {
    const [text, setText] = useState("Try typing something...");
    const handleChange = (event) => {
        setText("haha nope :)");
    }

    return (
        <div>
            <input type="text" value={text} onChange={handleChange} />
        </div>
    )
}

export default TrickInput;