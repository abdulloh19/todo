import { useContext } from "react";
import { MyContext } from "../../App";

const TodoBody = () => {
  const Props = useContext(MyContext);
  console.log(Props);

  return (
    <div className="row">
      <div className="col-md-6">
        <input ref={Props.InputRef} type="text" className="form-control" />
      </div>
      <div className="col-md-6">
        <button onClick={Props.addTasks} className="btn btn-primary">
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoBody;
