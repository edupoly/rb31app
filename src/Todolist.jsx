import React from 'react'
import Todo from './Todo';

function Todolist() {
    var [todos,setTodos]=React.useState(['pawan','maHESH','nani','sai','bhanu','uday']);
    console.log("Todolist")
    var ar = React.useMemo(()=>{return [12,23,34]},[]);
    function addTodo(){
        setTodos([...todos,document.getElementById('d1').value])
    }
    var deleteTodo=React.useCallback((ind)=>{
        var temp = [...todos];
        temp.splice(ind,1);
        setTodos([...temp])
    },[])

    return (
        <div className='mybox'>
            <h1>Todolist</h1>
            <input type="text" id='d1'/>
            <button onClick={()=>{addTodo()}}>Add Todo</button>
            {
                todos.map((todo,i)=>{
                    return <Todo todo={todo} ar={ar} index={i} deleteTodo={deleteTodo}></Todo>
                })
            }
        </div>
    )
}

export default React.memo(Todolist)