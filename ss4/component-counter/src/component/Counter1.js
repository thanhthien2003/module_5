import React, { useState } from 'react';

function Counter1() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count App</h1>
      <p>Count 1 :  {count}</p>
      <button onClick={() => setCount((previousState) => previousState + 1)}>
        Add 1
      </button>
    </>

  )
}

export default Counter1;



