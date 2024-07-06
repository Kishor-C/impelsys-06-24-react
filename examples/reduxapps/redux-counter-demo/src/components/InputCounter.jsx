// useSelector is to subscribe to the store so that it can read the changes in the state
// useDispatch is to dispatch an action by calling increment(), decrement() reducer functiosn
import { useSelector, useDispatch } from "react-redux";
// import increment, decrement functions from counterSlice.js
import { incrementByAmount } from "../reducer/counterSlice.js";
import { useState } from "react";
// component that will have 2 buttons to dispatch increment() & decrement()
export function InputCounter() {
  // call useDispatch
  const dispatch = useDispatch();
  // call useSelector(callback) this subscribes to the store (state=>state.counter.value)
  const counter = useSelector((state) => state.counter.value);
  let [inputValue, setInputValue] = useState(0);
  return (
    <div>
      <h3>Input Counter: {counter}</h3>
      <div>
        <input onChange={(e) => setInputValue(parseInt(e.target.value))} />
        <button onClick={() => dispatch(incrementByAmount(inputValue))}>
          Increment By Amount
        </button>
      </div>
    </div>
  );
}
