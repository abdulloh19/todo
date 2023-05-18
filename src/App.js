import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useReducer, useRef } from "react";
import TodoHeader from "./components/Todo.js/TodoHeader";
import TodoBody from "./components/Todo.js/TodoBody";
import TodoFooter from "./components/Todo.js/TodoFooter";

// function reducer(state, action) {
//   switch (action.type) {
//     case "setActive":
//       return { ...state, active: !state.active };
//     case "setColor":
//       return { ...state, color: action.color };
//     default:
//       return state;
//     case "setCount":
//       return { ...state, count: state.count + 1 };
//     case "setCountMinus":
//       return { ...state, count: state.count - 1 };
//     case "setCount2":
//       return { ...state, count2: state.count2 + 1 };
//     case "setCountMinus2":
//       return { ...state, count2: state.count2 - 1 };
//     case "setCount3":
//       return { ...state, count3: state.count3 + 1 };
//     case "setCountMinus3":
//       return { ...state, count3: state.count3 - 1 };
//     case "setCount4":
//       return { ...state, count4: state.count4 + 1 };
//     case "setCountMinus4":
//       return { ...state, count4: state.count4 - 1 };
//   }
// }

export const MyContext = createContext();

function reducer(prevState, action) {
  switch (action.type) {
    case "tasks":
      const taskArr = [...prevState.tasks];
      taskArr.push({
        id: action.id,
        name: action.value,
        active: true,
      });
      return { ...prevState, tasks: [...taskArr] };
  }
}

function App() {
  // const [state, dispatch] = useReducer(reducer, {
  //   active: false,
  //   color: "white",
  //   count: 0,
  //   count2: 0,
  //   count3: 0,
  //   count4: 0,
  // });

  const InputRef = useRef();

  const [state, dispatch] = useReducer(reducer, {
    tasks: [
      { id: 1, name: "task1", active: false },
      { id: 2, name: "task2", active: false },
      { id: 3, name: "task3", active: false },
    ],
  });

  function addTasks() {
    dispatch({
      id: state.tasks.length + 1,
      type: "tasks",
      value: InputRef.current.value,
    });
    InputRef.current.value = "";
  }

  // const setCount = () => {
  //   dispatch({ type: "setCount" });
  // };
  // const setCountMinus = () => {
  //   dispatch({ type: "setCountMinus" });
  // };
  // const setCount2 = () => {
  //   dispatch({
  //     type: "setCount2",
  //   });
  // };
  // const setCountMinus2 = () => {
  //   dispatch({
  //     type: "setCountMinus2",
  //   });
  // };
  // const setCount3 = () => {
  //   dispatch({
  //     type: "setCount3",
  //   });
  // };
  // const setCountMinus3 = () => {
  //   dispatch({
  //     type: "setCountMinus3",
  //   });
  // };
  // const setCount4 = () => {
  //   dispatch({
  //     type: "setCount4",
  //   });
  // };
  // const setCountMinus4 = () => {
  //   dispatch({
  //     type: "setCountMinus4",
  //   });
  // };

  // //------------------------------------------------------------------------------------

  // const changeColor = (color) => {
  //   dispatch({
  //     type: "setColor",
  //     color: color,
  //   });
  // };
  // const toggleModal = () => {
  //   dispatch({ type: "setActive" });
  // };

  return (
    <MyContext.Provider
      value={{ tasks: state.tasks, InputRef: InputRef, addTasks: addTasks }}
    >
      <div className="container my-3">
        {/* <div>
        <MyContext.Provider
          value={{
            color: state.color,
            active: state.active,
            setColor: changeColor,
            setActive: toggleModal,
          }}
        >
          <div className="container mt-5">
            <button className="btn btn-success" onClick={toggleModal}>
              Click Me
            </button>
            <div className="col-md-6">
              <First />
            </div>
          </div>
        </MyContext.Provider>
      </div> */}
        {/* <UsRef /> */}
        {/* <UseMemo/> */}
        {/* <div className=" col-md-12 p-3 wrapper">
        <MyContext.Provider
          value={{
            count: state.count,
            countMinus: setCountMinus,
            setCount: setCount,
            count2: state.count2,
            setCount2: setCount2,
            count3: state.count3,
            setCountMinus2: setCountMinus2,
            setCount3: setCount3,
            setCountMinus3: setCountMinus3,
            count4: state.count4,
            setCount4: setCount4,
            setCountMinus4: setCountMinus4,
          }}
        >
          <div className="col-md-6">
            <div className="col-md-6 p-3">
              <FirstLesson />
            </div>
          </div>
          <div className="col-md-6">
            <div className="col-md-6 p-3">
              <SecondLesson />
            </div>
          </div>
        </MyContext.Provider>
      </div> */}

        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <TodoHeader />
                <TodoBody />
                <TodoFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
