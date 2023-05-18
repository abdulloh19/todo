import React, { useContext } from "react";
import { MyContext } from "../../App";

const Ccomponent = () => {
  const counters = useContext(MyContext);

  return (
    <div className=" comp2 mt-5">
      <h4 className="text">
        <span className="text-primary">C</span> Component
      </h4>
      <p className="bold">Counter: {counters.count3}</p>
      <button
        className="btn btn-outline-danger mx-2"
        onClick={counters.setCount3}
      >
        +
      </button>
      <button
        className="btn btn-outline-danger"
        onClick={counters.setCountMinus3}
      >
        -
      </button>
    </div>
  );
};

export default Ccomponent;
