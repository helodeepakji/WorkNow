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

  const address = {
    Area: formData.area,
    City: formData.city,
    State: formData.state,
    Pincode: formData.pincode,
    Default: true,
  };

  const worker = {
    Category: formData.category,
    Language: formData.language,
    Salary_type: formData.salarytype,
    Salary: formData.salary,
    Govid_type: formData.govidtype,
    Gov_id: formData.govid,
    Education: formData.education,
    Age: formData.age,
  };

  const auth = {
    username: formData.phone,
    password: formData.password,
    cpassword: formData.cpassword,
    Profile_pic:formData.profile,
    Name: formData.name,
    Email: false,
    Is_worker: true,
    Is_customer: false,
    Gender: formData.gender,
  };
  console.log(formData.profile.file);

    fetch('/regisiter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrfToken,
      },
      // body: JSON.stringify(formData),
      body: JSON.stringify(
        {
          Address: address,
          Worker: worker,
          Auth: auth,
        }
      ),
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
    category: 'Carpenter',
    language: '',
    area: '',
    city: '',
    state: '',
    pincode: '',
    salarytype: 'Daily Basis',
    salary: '',
    govidtype: 'Aadhar',
    govid: '',
    profile: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
// to get file uploaded in form.
// e.target.files[0];
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to Django backend
    sendFormData(formData);
  };

  return (
    <div class="main">
      <form onSubmit={handleSubmit} enctype="multipart/form-data">
        {step == 1 && (
          <div className='abcde'>
            <h1>Registration Form</h1><br></br>
            <div className="items">

              <div className="item1">
                <div className='jh'>
                  <div className='cls'>
                    <span>Full Name</span><br></br>
                    <input type="text" name="name" placeholder="Your Name" value={formData.name} required onChange={handleChange}></input>
                  </div>
                  <div className='cls'>
                    <span>Contact</span><br></br>
                    <input type="number" name="phone" required placeholder="Your Phone Number" value={formData.phone} onChange={handleChange}></input>
                  </div>

                  <div className='cls'>
                    <span>Password</span><br></br>
                    <input type="Password" name="password" required placeholder="Your Password" value={formData.password} onChange={handleChange}></input>
                  </div>


                  <div className='cls'>
                    <span>Confirm Password</span><br></br>
                    <input type="Password" name="cpassword" required placeholder="Re-enter Password" value={formData.cpassword} onChange={handleChange}></input>
                  </div>

                </div>
              </div>

              <div class="item2">
                <div>
                  <div className='cls'>
                    <span>Gender</span><br></br>
                    <div className='xyz'> <br></br>
                      <input type="radio" id="male" required value="male" name="gender" checked={formData.gender === 'male'} onChange={handleChange}></input>
                      <label for="male">Male</label>

                      <input type="radio" id="female" required value="female" name="gender" checked={formData.gender === 'female'} onChange={handleChange}></input>
                      <label for="female">Female</label>

                      <input type="radio" id="other" required value="other" name="gender" checked={formData.gender === 'other'} onChange={handleChange}></input>
                      <label for="other">Other</label>
                    </div>
                  </div>

                  <div className='cls'>
                    <span>Education</span><br></br>
                    <input type="text" name="education" required placeholder="Your Education" value={formData.education} onChange={handleChange}></input>
                  </div>

                  <div className='cls'>
                    <span>Age</span><br></br>
                    <input type="number" name="age" required placeholder="Your Age" value={formData.age} onChange={handleChange}></input>
                  </div>


                  <div className='cls'>
                    <span>Category</span><br></br>
                    <select name="category" required value={formData.category} onChange={handleChange}>
                      <option value="Carpenter">Carpenter</option>
                      <option value="Mason">Mason</option>
                      <option value="Mobile Repair">Mobile Repair</option>
                      <option value="Laptop Repair">Laptop Repair</option>
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
                    <input type="text" name="area" required placeholder="Your Area of living" value={formData.area} onChange={handleChange}></input>
                  </div>
                  <div className='cls'>
                    <span>City</span><br></br>
                    <input type="text" name="city" required placeholder="Your City" value={formData.city} onChange={handleChange}></input>
                  </div>
                  <div className='cls'>
                    <span>State</span><br></br>
                    <input type="text" name="state" required placeholder="Your State" value={formData.state} onChange={handleChange}></input>
                  </div>
                  <div className='cls'>
                    <span>Language</span><br></br>
                    <input type="text" name="language" required placeholder="Your Language" value={formData.language} onChange={handleChange}></input>
                  </div>
                  <div className='cls'>
                    <span>PIN CODE</span><br></br>
                    <input type="number" name="pincode" required placeholder="Your area pincode" value={formData.pincode} onChange={handleChange}></input>
                  </div>
                </div>
              </div>

              <div class="item2">
                <div>
                  <div className='cls'>
                    <span>Profile Picture</span><br></br>
                    <input type="file" required placeholder="Your photo" name="profile" onChange={handleChange}></input>
                  </div>
                  <div className='cls gov_id'>
                    <span>Govt ID</span><br></br>
                    <select name="govidtype" value={formData.govidtype} required onChange={handleChange}>
                      <option value="Aadhar">Aadhar</option>
                      <option value="PAN Card">PAN Card</option>
                      <option value="Voter Id">Voter Id</option>
                    </select><br></br>
                    <input type="text" name="govid" required placeholder="Your id number" value={formData.govid} onChange={handleChange}></input>
                  </div>
                  <div className='cls'>
                    <span>Salary Type</span><br></br>
                    <select name="salarytype" required value={formData.salarytype} onChange={handleChange}>
                      <option value="Daily Basis">Daily Basis</option>
                      <option value="Hour Basis">Hour Basis</option>
                    </select><br></br>
                    <input type="text" name="salary" required placeholder="Your current salary" value={formData.salary} onChange={handleChange}></input>
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
