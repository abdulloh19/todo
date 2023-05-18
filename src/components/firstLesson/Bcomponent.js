import React, { useContext } from "react";
import { MyContext } from "../../App";

const Bcomponent = () => {
  const count2 = useContext(MyContext);
  return (
    <div className="cold-md-5 comp mt-5">
      <h4 className="text"><span className="text-primary">B</span> Component</h4>
      <p className="bold">Counter: {count2.count2}</p>
      <button
        className="btn btn-outline-dark mx-2"
        onClick={count2.setCount2}
      >
        +
      </button>
      <button
        className="btn btn-outline-dark"
        onClick={count2.setCountMinus2}
      >
        -
      </button>
    </div>
  );
};

export default Bcomponent;
