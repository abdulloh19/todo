import { useContext } from "react";
import { MyContext } from "../../App";
function TodoFooter() {
  const Props = useContext(MyContext);
  console.log(Props);

  return (
    <div className="card my-4 mx-5 col-md-6">
      <div className="card-body">
        {Props.tasks.map((item, index) => (
          <tr key={index}>
            <td style={{ fontSize: "25px" }}>{item.id})</td>
            <td style={{ fontSize: "25px" }}>{item.name}</td>
            <td>
              <input
                type="checkbox"
                style={{ transform: "scale(2)" }}
                className="mx-3"
                value={item.active}
              />
            </td>
          </tr>
        ))}
      </div>
    </div>
  );
}

export default TodoFooter;
