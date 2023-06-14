import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();

  const incrementHanler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increase = () => {
    dispatch(counterActions.increase(10));
  };

  const decrease = () => {
    dispatch(counterActions.decrease(10)); // by default when passing param to actions, it creates a object {type:"UNIQUE_IDENTIFIer",payload:10}
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>-- {counter} --</div>}
      <div>
        <button disabled={!showCounter} onClick={incrementHanler}>
          Increment
        </button>
        <button disabled={!showCounter} onClick={increase}>
          Increase by 10
        </button>
        <button disabled={!showCounter} onClick={decrease}>
          Decrease by 10
        </button>
        <button disabled={!showCounter} onClick={decrementHandler}>
          Decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
