import React from 'react'

function Todo({todo,i,deleteTodo}) {
    console.log(todo+" :: todo rendered")
  return (
    <li>
        {todo}
        <button onClick={()=>{deleteTodo(i)}}>Delete</button>
    </li>
  )
}

export default React.memo(Todo)