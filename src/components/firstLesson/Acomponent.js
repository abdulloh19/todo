import React, { useContext } from "react";
import { MyContext } from "../../App";

const Acomponent = () => {
  const count = useContext(MyContext);
  return (
    <div className="cold-md-5 comp mt-5">
      <h4 className="text">
        <span className="text-primary">A</span> Component
      </h4>
      <p className="bold">Counter: {count.count}</p>
      <button className="btn btn-outline-dark mx-2" onClick={count.setCount}>
        +
      </button>
      <button className="btn btn-outline-dark" onClick={count.countMinus}>
        -
      </button>
    </div>
  );
};

export default Acomponent;
