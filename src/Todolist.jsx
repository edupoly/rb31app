import React, { useEffect } from 'react'
import Todo from './Todo'

function Todolist() {
  var [todos,setTodos]=React.useState(['React Playlist','Freelance Application','Payment Gateway'])
  var [newtodo,setTodo] = React.useState('');
  var ntref=React.useRef();
  var deleteTodo=React.useCallback(function deleteTodo(i){
    var temp = [...todos];
    temp.splice(i,1);
    setTodos([...temp])
  },[])
  function addTodo(){
    setTodos([...todos,ntref.current.value])
  }
  
  function checkEnter(e){
    if(e.key==='Enter'){
      addTodo();
    }
  }
  return (
    <div className='mybox'>
        <h1>Todolist</h1>
        <input type="text" ref={ntref} onKeyUp={(e)=>{checkEnter(e)}}/>
        <button onClick={()=>{addTodo()}}>Add Todo</button>
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
/*
  types of components
    functional
    classbased
    smart(container)(controlled)
      todolist component
    dumb(presentational)(uncontrolled)
      todo component



*/