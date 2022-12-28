import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../Services/actions/actions';

const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
    
    const handleIncrement = () => {
        dispatch(increment())
    }
    const handleDecrement = () => {
        dispatch(decrement())
    }

    const handleReset = () => {
        dispatch(reset())
    }

    return (
        <div>
            <h2>Redux Counter App</h2>
            <h5>Count: {count}</h5>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset} style={{margin: "10px"}}>Reset</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default Counter;