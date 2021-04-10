import React from "react";
import AddressLabel from "./AddressLabel";

function Envelope({ toPerson, fromPerson }) {
    return (
        <>
            <h1>Envelope</h1>
            <AddressLabel person={toPerson}/>
            <span>===================</span>
            <br />
            <AddressLabel person={fromPerson}/>
        </>
    )
}

export default Envelope;