import React, { useContext } from "react";
import { MyContext } from "../App";

const Third = () => {
  const props = useContext(MyContext);
  const colors = ["red", "blue", "darkcyan", "green", "orange"];

  function changeModalStyle(color) {
    props.setColor(color);
  }

  const modalStyled = { backgroundColor: props.color,  };

  return (
    <div>
      {props.active ? (
        <div
          className="card mt-3"
          style={modalStyled}
          onClick={() => props.setActive((prev) => !prev)}
        >
          <div className="card-header">
            <h1>Active</h1>
          </div>
          <div className="card-body">
            <h3>Modal...</h3>
          </div>
        </div>
      ) : (
        <h1>Active is False</h1>
      )}
      <br />
      <hr />

      {colors.map((item, index) => (
        <button
          className="btn btn-dark mx-2"
          onClick={() => changeModalStyle(item)}
          key={index}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Third;
