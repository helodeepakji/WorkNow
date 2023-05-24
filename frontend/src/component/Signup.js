import React, { useState } from 'react'
import '../component/Signup.css';


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

    const auth = {
        username : formData.phone,
        password : formData.password,
        cpassword : formData.cpassword,
        Profile_pic : formData,
        Name : formData.name,
        Email: formData.email,
        Is_worker : false,
        Is_customer : true,
        Gender : formData.gender,
    };

    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken,
        },
        body: JSON.stringify({
            Auth:auth
        }),
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

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        gender: '',
        password: '',
        cpassword: '',
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
        <div className='phase1'>
            <div className='phase2'>
                <div className='sigupuser'>
                    <div className='sigupheader'>
                        <h1>Signup User</h1>
                    </div>
                    <div className='unselected'>
                        <p class="cl-white">Signup to create your Account</p>
                    </div>
                    <form className='sigupform' onSubmit={handleSubmit}>
                        <div className='phase3'>
                            <label>Name</label>
                            <input type='text' placeholder='Name' name="name" value={formData.name} onChange={handleChange} required></input>
                        </div>
                        <div className='phase3'>
                            <label>Email</label>
                            <input type='Email' placeholder='Email' name="email" value={formData.email} onChange={handleChange} required></input>
                        </div>
                        <div className='phase3'>
                            <label>Mobile Number</label>
                            <input type='Number' placeholder='Mobile Number' name="phone" value={formData.phone} onChange={handleChange} required></input>
                        </div>
                        <div className='phase3'>
                            <label>Gender</label>
                            <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
                                <option value="">Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className='phase3'>
                            <label>Password</label>
                            <input type='password' placeholder='password' name='password' value={formData.password} onChange={handleChange} required></input>
                        </div>
                        <div className='phase3'>
                            <label>Confirm Password</label>
                            <input type='password' placeholder='Confirm Password' name='cpassword' value={formData.cpassword} onChange={handleChange} required></input>
                        </div>
                        <div>
                            <button className="attractive-button" type='submit'>SignUp</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Signup