import Counter from "./Counter";

function App() {
  return (
    <center>  
    <div className="mybox">
      <h1>Score Card</h1>
      <div style={{display:'flex',justifyContent:'center'}}>
        <Counter cname="india"></Counter>
        <Counter cname="australia"></Counter>
      </div>
    </div>
    </center>
  );
}

export default App;
