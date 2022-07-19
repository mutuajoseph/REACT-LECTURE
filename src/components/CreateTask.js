import React from 'react'

function CreateTask({todo, handleTodoInput, handleTodoSubmit}) { 


  return (
    <div>
        <div className='input--wrapper'>
            <input type="text" value={todo} onChange={handleTodoInput} placeholder='Enter your task for today' />
            <button onClick={handleTodoSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default CreateTask