import React from "react";
import Counter from "./Counter";
import Todolist from "./Todolist";

function App() {
  var [x,setX]=React.useState(100);
  function dohm(){
    setX(x+48745)
  }
  return (
    <div className="mybox">
      <h1>Welcome to Edupoly:{x}</h1>
      <button onClick={()=>{dohm()}}>Dishum</button>
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
