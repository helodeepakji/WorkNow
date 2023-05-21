import React from 'react';
import '../component/Login.css';
const Signup = () => {
    return (
        <div className='s1'>
            <div className='s2'>
                <div className='loginuser'>
                    <div className='loginheader'>
                        <h1>Login User</h1>
                    </div>
                    <div className='unselected'>
                        <p>Login in with your Account</p>
                    </div>
                    <form className='loginform'>
                        <div className='s3'>
                            <label>Number</label>
                            <input type='number' placeholder='Number' required></input>
                        </div>

                        <div className='s3'>
                            <label>Password</label>
                            <input type='password' placeholder='Password' required></input>
                        </div>
                        <div>
                            <button className="attractive-button">Login</button>
                        </div>
                    </form>
                </div>
                <div className='loginworker'>
                    <div className='labourloginheader'>
                        <h1>Login Worker</h1>
                    </div>
                    <div className='unselected'>
                        <p>Login in with your Account</p>
                    </div>
                    <div className='labourlogidesc'>
                        <form className='loginform'>
                            <div className='s3'>
                                <label>Number</label>
                                <input type='number' placeholder='Number' required></input>
                            </div>

                            <div className='s3'>
                                <label>Password</label>
                                <input type='password' placeholder='Password' required></input>
                            </div>
                            <div>
                                <button className="attractive-button">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signup