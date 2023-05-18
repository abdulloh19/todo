import React, { createContext, useContext, useReducer } from "react";
import { MyContext } from "../../App";

export const TodoApp = createContext();

const TodoHeader = () => {
  const props = useContext(MyContext);
  return (
    <div className="row">
      <div className="col-md-10">
        <h1>Todo</h1>
      </div>
      <div className="col-md-2">
        <div className="card bg-primary text-center text-light">
          <h4>{props.tasks.length}</h4>
        </div>
      </div>
    </div>
  );
};

export default TodoHeader;
