import React, { useContext } from "react";
import { MyContext } from "../../App";

const Dcomponent = () => {
  const counters = useContext(MyContext);
  return (
    <div className=" comp2 mt-5">
      <h4 className="text"><span className="text-primary">D</span> Component</h4>
      <p className="bold">Counter: {counters.count4}</p>
      <button
        className="btn btn-outline-danger mx-2"
        onClick={counters.setCount4}
      >
        +
      </button>
      <button
        className="btn btn-outline-danger"
        onClick={counters.setCountMinus4}
      >
        -
      </button>
    </div>
  );
};

export default Dcomponent;
