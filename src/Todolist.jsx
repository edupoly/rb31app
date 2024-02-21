import React from 'react'
import Todo from './Todo'

function Todolist() {
  var [todos,setTodos]=React.useState(['React Playlist','Freelance Application','Payment Gateway'])
  var [newtodo,setTodo] = React.useState('');
  var deleteTodo=React.useCallback(function deleteTodo(i){
    var temp = [...todos];
    temp.splice(i,1);
    setTodos([...temp])
  },[])
  return (
    <div className='mybox'>
        <h1>Todolist</h1>
        <input type="text" onChange={(e)=>{setTodo(e.target.value)}}/>
        <button onClick={()=>{setTodos([...todos,newtodo])}}>Add Todo</button>
        <ul>
          {
            todos?.map((todo,i)=>{
              return <Todo i={i} todo={todo} deleteTodo={deleteTodo}></Todo>
            })
          }
        </ul>
    </div>
  )
}

export default Todolist