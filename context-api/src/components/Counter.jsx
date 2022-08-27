import React from "react";
import { useContext } from "react";
import CounterContext from "../store/store";

const Counter = () => {
  const store = useContext(CounterContext);
  
  return (
    <div>
       <p>{store.counter}</p>
       <button onClick={(event) => store.increment()}>Increment</button>
       <button onClick={(event) => store.decrement()}>Decrement</button>
    </div>
  );

  //   return (
  // 	<CounterContext.Consumer>
  // 		{
  // 			(ctx) => (
  // 				<div>
  // 					<p>{ctx.counter}</p>
  // 					<button onClick={ctx}>Increment</button>
  // 					<button>Decrement</button>
  // 				</div>
  // 			)
  // 		}
  // 	</CounterContext.Consumer>
  //   )
};

export default Counter;
