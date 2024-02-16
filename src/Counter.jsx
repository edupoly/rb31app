import React from 'react'

function Counter(x) {
  console.log("x",x)
  var [count,setCount]=React.useState(0);
  function inc(){
    setCount(count+1)
  }
  function dec(){
    setCount(count-1)
  }
  return (
    <div className='mybox'>
        <h1>{x.cname}:{count}</h1>
        <button onClick={()=>{inc()}}>Increment</button>
        <button onClick={()=>{dec()}}>Decrement</button>
    </div>
  )
}

export default Counter