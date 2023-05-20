import React from 'react'

const Signup = () => {
  return (
    <div className='s1'>
        <div className='s2'>
                    <form>
                        <div className='s2'>
                        <label>Username</label>
                        <input type='text' placeholder='Username' required></input>
                        </div>

                        <div className='s2'>
                        <label>Password</label>
                        <input type='password' placeholder='Password' required></input>
                        </div>
                    </form>
        </div>
    </div>
  )
}

export default Signup