import React, { useState } from "react";

function RadioButtons() {
    const [selection, setSelection] = useState("a");

    const handleChange = (event) => {
        setSelection(event.target.value);
    }

    return (
        <form>
            Option A
            <input type="radio" value="a" checked={selection === "a"} onChange={handleChange} />
            Option B
            <input type="radio" value="b" checked={selection === "b"} onChange={handleChange} />
            Option C
            <input type="radio" value="c" checked={selection === "c"} onChange={handleChange} />
        </form>
    )
}

export default RadioButtons;