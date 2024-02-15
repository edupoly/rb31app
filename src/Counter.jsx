import React from 'react'

function Counter() {
    var [counter,setCounter] = React.useState(0)
  return (
    <div className='mybox'>
        <h1>Counter:{counter}</h1>
        <button>Increment</button>
        <button>Decrement</button>
    </div>
  )
}

export default Counter