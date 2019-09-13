import React, {useState} from 'react';

const CounterTwo = () => {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incrementFive = () => {
        for(let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount+1)
        }
    }

    const incrementTen = () => {
        setCount(count + 10)
    }

    return (
        <div className="container">
            Count: {count}<br />
            <button onClick={() => setCount(initialCount)}>RESET</button><br />
            <button onClick={() => setCount(prevCount => prevCount + 1)}> Increment </button><br />
            <button onClick={() => setCount(count - 1)}> Decrement </button><br />
            <button onClick={incrementFive}> Increment 5 </button><br />
            <button onClick={incrementTen}> Increment 10 </button><br />
        </div>
    );
};

export default CounterTwo;