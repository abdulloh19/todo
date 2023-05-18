import React from "react";
import Acomponent from "./Acomponent";
import Bcomponent from "./Bcomponent";

const FirstLesson = () => {
  return (
    <div>
      <div className="">
        <div className="first">
          <h1>1 Component</h1>
          <Acomponent />
          <Bcomponent/>
        </div>
      </div>
    </div>
  );
};

export default FirstLesson;
