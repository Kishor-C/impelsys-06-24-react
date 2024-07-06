// useSelector is to subscribe to the store so that it can read the changes in the state
// useDispatch is to dispatch an action by calling increment(), decrement() reducer functiosn
import { useSelector, useDispatch } from "react-redux";
// import increment, decrement functions from counterSlice.js
import { increment, decrement } from "../reducer/counterSlice.js";

// component that will have 2 buttons to dispatch increment() & decrement()

export function Counter() {
  // call useDispatch
  const dispatch = useDispatch();
  // call useSelector(callback) this subscribes to the store (state=>state.counter.value)
  const counter = useSelector((state) => state.counter.value);

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}
