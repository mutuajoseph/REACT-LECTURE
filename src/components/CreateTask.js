import React from 'react'

function CreateTask() {
  return (
    <div>
        <div className='input--wrapper'>
            <input type="text" placeholder='Enter your task for today' />
            <button>Submit</button>
        </div>
    </div>
  )
}

export default CreateTask