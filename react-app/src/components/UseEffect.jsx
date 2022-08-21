import React, { useState } from "react";
import { useEffect } from "react";

function UseEffect() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => counter + 1);

    }, 1000);
	
    console.log("useEffect");
    return () => clearInterval(interval);
  }, [counter]);

  return <div>{counter}</div>;
}

export default UseEffect;
