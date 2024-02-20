import React from 'react'

function Todo(props) {
    console.log("Todo::"+props.todo)

  return (
            <li>
                {props.todo}
                <button>Done</button>
                <button>Undo</button>
                <button onClick={()=>{props.deleteTodo(props.index)}}>delete</button>
            </li>
  )
}

export default React.memo(Todo);