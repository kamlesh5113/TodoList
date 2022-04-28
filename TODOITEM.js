import React from 'react'

const TODOITEM = ({todo, ondelete}) => {
  return (
    <div>
        <div className='container'>
            <h3 className='text-center'> {todo.title} </h3>
            <h3 className='text-center'> {todo.desc} </h3>
            <p className='text-center'><button className='btn btn-danger' onClick={ ()=>{ondelete(todo)}}>Delete</button></p>
        </div>
    </div>
  )
}

export default TODOITEM