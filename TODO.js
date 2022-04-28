import React from 'react'
import TODOITEM  from '../Components/TODOITEM.js';

const TODO = (props) => {
  return (
    <div>

        <div className='container-fluid'>
            <h1 className='text-center'>My To DOs</h1>
              { props.todos.length === 0 ? "NO ITEM" :
                props.todos.map((todos) =>{
                    return <TODOITEM todo={todos} key = {todos.sno} ondelete = {props.ondelete} />
                })
              }
        </div>

    </div>
  )
}

export default TODO