import React from "react";

function AddressLabel({ person }) {
    return (
        <>
            <span>{person.name}</span> <br/>
            <span>{person.streetAdress}</span> <br/>
            <span>{person.cityStatePostalCode}</span> <br/>
        </>
    )
}

export default AddressLabel;