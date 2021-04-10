import React, { useState, useEffect } from "react";

const TOPPINGS_CONFIG = { 
    ID: "topping", 
    TITLE: "Toppings",
    OPTIONS: [
        { value: 0, name: "== Please Select ==" },
        { value: 1, name: "Pepperoni" },
        { value: 2, name: "Cheese" },
        { value: 3, name: "Ham" },
        { value: 4, name: "Four Cheese" }
    ]
};
const SIZES_CONFIG = {
    ID: "size",
    TITLE: "Please, select the size of your pizza...",
    OPTIONS: [
        { value: "small", name: "Small"},
        { value: "medium", name: "Medium"},
        { value: "big", name: "Big"}
    ]
};
const CHECKBOX_CONFIG = { ID: "isGlutenFree", TITLE: "Gluten Free? "  };
const TEXT_AREA_CONFIG = { ID: "extra", TITLE: "Special Instructions: ", ROWS: 4, COLS: 40 };
const SUBMIT_BUTTON_CONFIG = { TITLE: "Order now!" };

function PizzaForm() {
    const [options, setOptions] = useState({});
    
    //Logging changes...
    useEffect(() => console.log(options), [options]);

    // Updating the current options
    const handleChange = (event) => {
        const target = event.target;
        const property = target.name;
        const value = target.type === "checkbox" ? target.checked : target.value;
        setOptions(oldOptions => ({ ...oldOptions, [property]: value }));
    }

    // Displays order info...
    const handleSubmit = ()  => {
        if (isDataValid(options)) {
            alert(JSON.stringify(options));
        } else {
            alert("You order is not complete...");
        }
    }
    const isDataValid = (data) => {
        // Check the "required" data
        if (data[SIZES_CONFIG.ID] && data[TOPPINGS_CONFIG.ID] && data[TOPPINGS_CONFIG.ID] !== "0") {
            return true;
        }
        return false;
    }

    // Rendering the form with its options
    return (
        <>
            <h1>Order your pizza!</h1>
            <form onSubmit={handleSubmit}>
                <RadioButtons 
                    id={SIZES_CONFIG.ID} 
                    title={SIZES_CONFIG.TITLE}
                    options={SIZES_CONFIG.OPTIONS} 
                    onChangeCallback={handleChange} />
                <br />
                <SelectList 
                    id={TOPPINGS_CONFIG.ID} 
                    title={TOPPINGS_CONFIG.TITLE} 
                    options={TOPPINGS_CONFIG.OPTIONS} 
                    onChangeCallback={handleChange} 
                />
                <br />
                <Checkbox id={CHECKBOX_CONFIG.ID} title={CHECKBOX_CONFIG.TITLE} onChangeCallback={handleChange} />
                <span>{options.isGlutenFree ? "Yes" : "No"}</span>
                <br />
                <br />
                <TextArea 
                    id ={TEXT_AREA_CONFIG.ID}
                    title={TEXT_AREA_CONFIG.TITLE}
                    rows={TEXT_AREA_CONFIG.ROWS}
                    cols={TEXT_AREA_CONFIG.COLS}
                    onChangeCallback={handleChange}
                />
                <br />
                <SubmitButton title={SUBMIT_BUTTON_CONFIG.TITLE} />
            </form>
        </>
    )

}

function RadioButtons( { id, title, options, onChangeCallback } ) {
    return (
        <div>
            <label htmlFor={id}>{title}: </label><br />
            {options.map(option => {
                return (
                    <React.Fragment key={option.value}>
                        <input 
                            type="radio"
                            name={id}
                            value={option.value}
                            onChange={onChangeCallback} 
                        />
                        <span>{option.name}</span>
                    </React.Fragment>
                )
            }
            )}
        </div>
    )
}

function SelectList({ id, title, options, onChangeCallback }) {
    return (
        <div>
            <label htmlFor={id}>{title}: </label><br />
            <select name={id} id={id} onChange={onChangeCallback}>
                {options.map(option => (
                    <React.Fragment key={option.value}>
                        <option value={option.value}>{option.name}</option>
                    </React.Fragment>
                ))}
            </select>
        </div>
        
    )
}

function Checkbox({ id, title, onChangeCallback }) {
    return (
        <div>
            <input type="checkbox" name={id} onChange={onChangeCallback} />
            <label>{title}</label>
        </div>
    )
}

function TextArea({ id, title, rows, cols, onChangeCallback }) {
    return (
        <div>
            <label htmlFor={id}>{title}</label>
            <br />
            <textarea id={id} name={id} rows={rows} cols={cols} onChange={onChangeCallback} />
        </div>
    )
}

function SubmitButton({ title }) {
    return (
        <div>
            <button type="submit">
                {title}
            </button>
        </div>
    )
}

export default PizzaForm;