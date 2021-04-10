import React from "react";

function MultiCounter() {

    const [counts, setCounts] = React.useState({ countA: 0, countB: 0 });

    const increment_a = () => {
        setCounts(counts => {
            return {
                ...counts,
                countA: counts.countA + 1
            }
        });
    }

    const increment_b = () => {
        setCounts(counts => {
            return {
                ...counts,
                countB: counts.countB + 1
            }
        });
    }

    const badIncrement_a = () => {
        setCounts(counts => {
            return {
                countA: counts.countA + 1
            }
        });
    }

    return (
        <>
            <div>A: {counts.countA}</div>
            <div>B: {counts.countB}</div>
            <br />
            <button onClick={increment_a}>Increment A</button>
            <br />
            <button onClick={increment_b}>Increment B</button>
            <br />
            <button onClick={badIncrement_a}>Increment A Badly</button>
        </>
    )
}

export default MultiCounter;