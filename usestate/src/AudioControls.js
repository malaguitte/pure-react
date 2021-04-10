import React from "react";

function AudioControls() {
    const PROPERTIES = {
        VOLUME: "volume",
        BASS: "bass",
        MID: "mid",
        TREBLE: "treble"
    };

    // const [volume, setVolume] = React.useState(50);
    // const [bass, setBass] = React.useState(50);
    // const [mid, setMid] = React.useState(50);
    // const [treble, setTreble] = React.useState(50);

    const initialState = {
        [PROPERTIES.VOLUME]: 50,
        [PROPERTIES.BASS]: 50,
        [PROPERTIES.MID]: 50,
        [PROPERTIES.TREBLE]: 50,
    };

    const [controls, setControls] = React.useState(initialState);

    function increment(property) {
        const newState = {...controls, [property]: controls[property] + 1 };
        setControls(newState);
        // if (property === PROPERTIES.VOLUME) {
        //     setVolume(volume => volume + 1);
        // } else if (property === PROPERTIES.BASS) {
        //     setBass(bass => bass + 1);
        // } else if (property === PROPERTIES.MID) {
        //     setMid(mid => mid + 1);
        // } else if (property === PROPERTIES.TREBLE) {
        //     setTreble(treble => treble + 1);
        // }
    }

    function decrement(property) {
        const newState = {...controls, [property]: controls[property] - 1 };
        setControls(newState);
        // if (property === PROPERTIES.VOLUME) {
        //     setVolume(volume => volume - 1);
        // } else if (property === PROPERTIES.BASS) {
        //     setBass(bass => bass - 1);
        // } else if (property === PROPERTIES.MID) {
        //     setMid(mid => mid - 1);
        // } else if (property === PROPERTIES.TREBLE) {
        //     setTreble(treble => treble - 1);
        // }
    }

    return (
        <div>
            <h1>Audio Controls</h1>
            <button onClick={() => decrement(PROPERTIES.VOLUME)}>-</button>
            <span>Volume ({controls.volume})</span>
            <button onClick={() => increment(PROPERTIES.VOLUME)}>+</button>
            <br/><br/>
            <button onClick={() => decrement(PROPERTIES.BASS)}>-</button>
            <span>Bass ({controls.bass})</span>
            <button onClick={() => increment(PROPERTIES.BASS)}>+</button>
            <br/><br/>
            <button onClick={() => decrement(PROPERTIES.MID)}>-</button>
            <span>mid ({controls.mid})</span>
            <button onClick={() => increment(PROPERTIES.MID)}>+</button>
            <br/><br/>
            <button onClick={() => decrement(PROPERTIES.TREBLE)}>-</button>
            <span>Treble ({controls.treble})</span>
            <button onClick={() => increment(PROPERTIES.TREBLE)}>+</button>
            <br/><br/>
        </div>
    )
}

export default AudioControls;
