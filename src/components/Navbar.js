import React from 'react'

function Navbar({user}) {
  return (
    <div>
        <div className='navbar--wrapper'>
            <div>Logo</div>
            <div className='navbar--items'>
                <div>Completed</div>
                <div>{user.firstName} {user.lastName}</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar