import React, { useState, useEffect } from 'react';

function IncrementingCounter({ step, delay, max }) {
  const [count, setCount] = useState(0);
  const [isDelayed, setIsDelayed] = useState(false);

  const increment = () => {
    if (!isDelayed && count + step <= max) {
      setCount(prevCount => prevCount + step);
      setIsDelayed(true);
      setTimeout(() => setIsDelayed(false), delay);
    }
  };

  const decrement = () => {
    if (!isDelayed && count - step >= 0) {
      setCount(prevCount => prevCount - step);
      setIsDelayed(true);
      setTimeout(() => setIsDelayed(false), delay);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

function CounterApp() {
  return (
    <div>
      <h1>Counter App</h1>
      <IncrementingCounter step={1} delay={500} max={10} />
      <IncrementingCounter step={2} delay={300} max={20} />
      <IncrementingCounter step={5} delay={1000} max={50} />
    </div>
  );
}

export default CounterApp;
