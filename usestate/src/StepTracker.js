import React from "react";

function StepTracker() {
    const [steps, setSteps] = React.useState(0);

    function increment() {
        setSteps(lastValue => lastValue + 1);
    }

    return (
        <div>
            Today you have taken {steps}!
            <br />
            <button onClick={increment}>Click here to take another step.</button>
        </div>
    )
}

export default StepTracker;