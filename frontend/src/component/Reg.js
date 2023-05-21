import React, { useState } from 'react'
import '../component/reg.css'


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

  fetch('/regisiter', {
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

const Reg = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    education: '',
    gender: '',
    age: '',
    password: '',
    cpassword: '',
    category: '',
    language: '',
    area: '',
    city: '',
    state: '',
    pincode: '',
    salarytype: '',
    salary: '',
    govidtype: '',
    govid: '',
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
    <div class="main">
      <form onSubmit={handleSubmit}>
        {step == 1 && (
          <div className='abcde'>
            <h1>Registration Form</h1><br></br>
            <div className="items">

              <div className="item1">
                <div className='jh'>
                  <div className='cls'>
                    <span>Full Name</span><br></br>
                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange}></input>
                  </div>
                  <div className='cls'>
                    <span>Contact</span><br></br>
                    <input type="text" name="phone" placeholder="Your Phone Number" value={formData.phone} onChange={handleChange}></input>
                  </div>

                  <div className='cls'>
                    <span>Password</span><br></br>
                    <input type="Password" name="password" placeholder="Your Password" value={formData.password} onChange={handleChange}></input>
                  </div>


                  <div className='cls'>
                    <span>Confirm Password</span><br></br>
                    <input type="Password" name="cpassword" placeholder="Re-enter Password" value={formData.cpassword} onChange={handleChange}></input>
                  </div>

                </div>
              </div>

              <div class="item2">
                <div>
                  <div className='cls'>
                    <span>Gender</span><br></br>
                    <div className='xyz'> <br></br>
                      <input type="radio" id="male" value="male" name="gender" checked={formData.gender === 'male'} onChange={handleChange}></input>
                      <label for="male">Male</label>

                      <input type="radio" id="female" value="female" name="gender" checked={formData.gender === 'female'} onChange={handleChange}></input>
                      <label for="female">Female</label>

                      <input type="radio" id="other" value="other" name="gender" checked={formData.gender === 'other'} onChange={handleChange}></input>
                      <label for="other">Other</label>
                    </div>
                  </div>

                  <div className='cls'>
                    <span>Education</span><br></br>
                    <input type="text" name="education" placeholder="Your Education" value={formData.education} onChange={handleChange}></input>
                  </div>

                  <div className='cls'>
                    <span>Age</span><br></br>
                    <input type="number" name="age" placeholder="Your Age" value={formData.age} onChange={handleChange}></input>
                  </div>


                  <div className='cls'>
                    <span>Category</span><br></br>
                    <select name="category" value={formData.category} onChange={handleChange}>
                      <option value="option1">Mason</option>
                      <option value="option2">Carpenter</option>
                    </select><br></br>
                  </div>
                </div>
              </div>
            </div>
            <div className='div'>
              <button className='btn' onClick={() => setStep(2)}>Next</button>
            </div>
          </div>
        )}

        {step == 2 && (
          <div className='abcde'>
            <h1>Registration Form</h1>
            <div className="items">

              <div className="item1">
                <div className='jh'>
                  <div className='cls'>
                    <span>Area</span><br></br>
                    <input type="text" name="area" placeholder="Your Area of living" value={formData.area} onChange={handleChange}></input>
                  </div>
                  <div className='cls'>
                    <span>City</span><br></br>
                    <input type="text" name="city" placeholder="Your City" value={formData.city} onChange={handleChange}></input>
                  </div>
                  <div className='cls'>
                    <span>State</span><br></br>
                    <input type="text" name="state" placeholder="Your State" value={formData.state} onChange={handleChange}></input>
                  </div>
                  <div className='cls'>
                    <span>Language</span><br></br>
                    <input type="text" name="language" placeholder="Your Language" value={formData.language} onChange={handleChange}></input>
                  </div>
                  <div className='cls'>
                    <span>PIN CODE</span><br></br>
                    <input type="Number" name="pincode" placeholder="Your area pincode" value={formData.pincode} onChange={handleChange}></input>
                  </div>
                </div>
              </div>

              <div class="item2">
                <div>
                  <div className='cls'>
                    <span>Profile Picture</span><br></br>
                    <input type="file" placeholder="Your photo" onChange={handleChange}></input>
                  </div>
                  <div className='cls gov_id'>
                    <span>Govt ID</span><br></br>
                    <select name="govidtype" value={formData.govidtype} onChange={handleChange}>
                      <option value="option1">Aadhar</option>
                      <option value="option2"> PAN</option>
                    </select><br></br>
                    <input type="text" name="govid" placeholder="Your id number" value={formData.govid} onChange={handleChange}></input>
                  </div>
                  <div className='cls'>
                    <span>Salary Type</span><br></br>
                    <select name="salarytype" value={formData.salarytype} onChange={handleChange}>
                      <option value="option1">Daily Basis</option>
                      <option value="option2">Hour Basis</option>
                    </select><br></br>
                    <input type="text" name="salary" placeholder="Your current salary" value={formData.salary} onChange={handleChange}></input>
                  </div>
                </div>
              </div>
            </div>
            <div className='div'>
              <div className='btns'>
                <div>
                  <button className='btn' onClick={() => setStep(1)}>Previous</button></div>
                <button className='btn' type="submit">Submit</button>
              </div>
            </div>
          </div>
        )}
      </form>
      <div className='textarea'>
        Best work is Smart Work
      </div>

    </div>
  )
}

export default Reg
