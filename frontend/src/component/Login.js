import React, { useState } from 'react';
import '../component/Login.css';


let csrfToken; // Global variable to store the CSRF token

fetch('/get_csrf_token')
    .then(response => response.json())
    .then(data => {
        csrfToken = data.csrfToken;
    })
    .catch(error => {
        console.error("Failed to retrieve CSRF token:", error);
    });

const sendFormData = (formData) => {
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken,
        },
        body: JSON.stringify(formData),
    })
        .then((response) => response.json())
        .then((data) => {
            // Handle the response from the Django backend
            console.log(data);
        })
        .catch((error) => {
            // Handle any errors
            console.error(error);
        });
    console.log(formData);
};

const Login = () => {

    const [formData, setFormData] = useState({
        phone: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send form data to Django backend
        sendFormData(formData);
    };


    return (
        <div className='loginmain'>
            <div className='loginmain2'>

                <div className='loginuser'>
                    <div className='loginheader'>
                        <h1>Login User</h1>
                        <div >
                            <p>Login in with your Account</p>
                        </div>
                    </div>
                    <form className='loginform' onSubmit={handleSubmit}>
                        <div className='s3'>
                            <label>Mobile Number</label>
                            <input type='number' placeholder='Mobile Number' name="phone" value={formData.phone} onChange={handleChange} required></input>
                        </div>

                        <div className='s3'>
                            <label>Password</label>
                            <input type='password' name="password" value={formData.password} onChange={handleChange} placeholder='Password' required></input>
                        </div>
                        <div className='logsubbtn'>
                            <button className="loginbtn" type='submit'>Login</button>
                        </div>
                    </form>
                </div>




            </div>

        </div>
    )
}

export default Login