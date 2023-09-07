import React, { useReducer, useEffect } from 'react';

function Timer() {
  const data =  new Date();
  const [count, dispatch] = useReducer((state, action) => {
    if (action === "increment") {
      return state + 1;
    }
  }, 0);

  useEffect(() => {
    let timer = setInterval(() => {
      dispatch("increment");
    }, 1000);

    return () => clearInterval(timer); // Corrected the variable name here
  }, []);

  return <span>{count}</span>;
}

export default Timer;
