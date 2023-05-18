import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [image, setImage] = useState(0);

  const result = useMemo(() => {
    for (let i = 0; i < 1000000000; i++) {}
    return "Img";
  }, [image]);

  return (
    <div className="container mt-5">
      <h1>Count: {count}</h1>
      <button
        className="btn btn-danger"
        onClick={() => setCount((prev) => prev + 1)}
      >
        +
      </button>
      <button
        className="btn btn-danger mx-2"
        onClick={() => setCount((prev) => prev - 1)}
      >
        -
      </button>
      <br />
      <br />
      <button
        className="btn btn-outline-dark"
        onClick={() => setImage((prev) => prev + 10)}
      >
        Set Image:
      </button>
      <h1>Image: {image}</h1>
      <hr />
      <hr />
      <br />
      <h1>{result}</h1>
    </div>
  );
};

export default UseMemo;
