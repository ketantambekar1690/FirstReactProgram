import React, { useRef, useState } from 'react'

const Basic = () => {
    const [count, setCount] = useState(0);

    const intervalRef = useRef(null);

    const start = () => {
        intervalRef.current = setInterval(() => {
            setCount((prev) => prev+1)
        }, 1000);
    };

    const stop = () => {
        clearInterval(intervalRef.current);
        setCount(0);
    };

  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
    </div>
  )
}

export default Basic