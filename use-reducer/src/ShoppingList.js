import React, { useReducer, useRef } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "add":
            return [
                ...state,
                { id: state.length, name: action.name }
            ];

        default:
            return state;
        
    }
}

function ShoppingList() {
    const inputRef = useRef();
    const [items, dispatch] = useReducer(reducer, []);

    function handleSubmit(event) {
        event.preventDefault();
        const action = { type: "add", name: inputRef.current.value };
        dispatch(action);
        inputRef.current.value = ""; // Clear input
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef}></input>
                <button type="submit">Submit</button>
            </form>
            <ul>
                {items?.map((item, index) => {
                    return (<li key={item.id}>{item.name}</li>)
                })}
            </ul>
        </>
    )
}

export default ShoppingList;