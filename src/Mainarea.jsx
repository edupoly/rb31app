import React from 'react'
import Counter from './Counter'
import Todolist from './Todolist'

function Mainarea() {
  return (
    <div className='mybox'>
        <Todolist></Todolist>
        <Counter></Counter>
    </div>
  )
}

export default Mainarea