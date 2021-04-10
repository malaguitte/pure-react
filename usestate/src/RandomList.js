import React from "react";

function RandomList() {
    const [items, setItems] = React.useState([]);
    
    function addItem() {
        const newItem = { id: items.length, value: Math.floor(Math.random() * 100) };
        setItems([...items, newItem]);
    }
    
    return (
        <>
            <button onClick={addItem}>
                Add a number
            </button>
            <br/>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </>
    )
}

export default RandomList;