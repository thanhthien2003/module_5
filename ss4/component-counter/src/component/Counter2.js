import React, { useState } from 'react';

function Counter2() {
    const [count2, setCount2] = useState(0);

    return (
        <>
            <p>Count 2 : {count2}</p>
            <button onClick={() => setCount2((previousState2) => previousState2 + 1)}>
                Add 2
            </button>
        </>
    )
}



export default Counter2;