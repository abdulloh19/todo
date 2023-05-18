import React from "react";
import { useRef } from "react";

const UsRef = () => {
  const inputRef = useRef();

  const onClicked = () => {
    inputRef.current.focus();
  };

  return (
    <div className="container">
      <input type="text" ref={inputRef} />
      <button className="btn" onClick={onClicked}>
        click me
      </button>
    </div>
  );
};

export default UsRef;
