import React, { useState } from "react";

function FirstNameLastName(props) {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const handleNameChange = (event) => {
        const newText = event.target.value;
        setName(newText);
    }
    const handleSurnameChange = (event) => {
        const newText = event.target.value;
        setSurname(newText);
    }

    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange} />
            <input type="text" value={surname} onChange={handleSurnameChange} />
            <br />
            <span>Hello {name} {surname}!</span>
        </div>

    )
}

export default FirstNameLastName;