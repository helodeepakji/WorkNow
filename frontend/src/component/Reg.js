import React, { useState } from 'react'
import '../component/reg.css'

const Reg = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    Name: '',
    Contact: '',
    Password: '',
    Confirm_Password: '',
    Gender: '',
    Education: '',
    Age: '',
    Category: '',
    Area: '',
    City: '',
    State: '',
    PIN_CODE: '',
    Profile_Picture: '',
    Govt_ID: '',
    Language: '',
    Salary: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div class="main">
    {step==1 && ( 
      <div className='abcde'>
      <h1>Registration Form</h1><br></br>
      <div className="items">
      
      <div className="item1">
    <form className='jh'>
      <div className='cls'>
      <span>Full Name</span><br></br>
       <input type="text"  placeholder="Your Name" required onChange={(e) => setFormData({ ...formData, Name: e.target.value })}></input>
      </div>
      <div className='cls'>
      <span>Contact</span><br></br>
       <input type="text"  placeholder="Your Phone Number" required onChange={(e) => setFormData({ ...formData, Contact: e.target.value })}></input>
      </div>
      
      <div className='cls'>
      <span>Password</span><br></br>
       <input type="Password"  placeholder="Your Password" required onChange={(e) => setFormData({ ...formData, Password: e.target.value })}></input>
      </div>

      
      <div className='cls'>
      <span>Confirm Password</span><br></br>
       <input type="Password"  placeholder="Re-enter Password" required onChange={(e) => setFormData({ ...formData, Confirm_Password: e.target.value })}></input>
      </div>
      
    </form>
    </div>

    <div class="item2">
    <form>
      <div className='cls'>
      <span>Gender</span><br></br>
      <div className='xyz'> <br></br>
      <input type="radio" id="male" name="gender" value="male"></input>
      <label for="male">Male</label>

      <input type="radio" id="female" name="gender" value="female"></input>
      <label for="female">Female</label>

      <input type="radio" id="other" name="gender" value="other"></input>
      <label for="other">Other</label>
      </div>
      </div>

      <div className='cls'>
      <span>Education</span><br></br>
       <input type="text"  placeholder="Your Email" required onChange={(e) => setFormData({ ...formData, Education: e.target.value })}></input>
      </div>

      <div className='cls'>
      <span>Age</span><br></br>
       <input type="number"  placeholder="Your Age" required onChange={(e) => setFormData({ ...formData, Age: e.target.value })}></input>
      </div>

      
      <div className='cls'>
      <span>Category</span><br></br>
       {/* <input type="text"  placeholder="Your Occupation" required onChange={(e) => setFormData({ ...formData, Occupation: e.target.value })}></input> */}
       <select required onChange={(e) => setFormData({ ...formData, Category: e.target.value })}>
      <option value="option1">Mason</option>
      <option value="option2">Carpenter</option>
      </select><br></br>
      </div>
    </form>
    </div>
    </div> 
    <div className='div'>
    <button className='btn' onClick={() => setStep(2)}>Next</button>
    </div>
    </div>
     
    )}

    {step==2 && ( 
      <div className='abcde'>
      <h1>Registration Form</h1>
      <div className="items">
      
      <div className="item1">
    <form className='jh'>
      <div className='cls'>
      <span>Area</span><br></br>
       <input type="text"  placeholder="Your Area of living" required onChange={(e) => setFormData({ ...formData, Area: e.target.value })}></input>
      </div>
      <div className='cls'>
      <span>City</span><br></br>
       <input type="text"  placeholder="Your City" required onChange={(e) => setFormData({ ...formData, City: e.target.value })}></input>
      </div>
      <div className='cls'>
      <span>State</span><br></br>
       <input type="text"  placeholder="Your State" required onChange={(e) => setFormData({ ...formData, State: e.target.value })}></input>
      </div>
      <div className='cls'>
      <span>PIN CODE</span><br></br>
       <input type="Number"  placeholder="Your area pincode" required onChange={(e) => setFormData({ ...formData, PIN_CODE: e.target.value })}></input>
      </div>
    </form>
    </div>

    <div class="item2">
    <form>
      <div className='cls'>
      <span>Profile Picture</span><br></br>
       <input type="file"  placeholder="Your photo" required onChange={(e) => setFormData({ ...formData, Profile_Picture: e.target.value })}></input>
      </div>
      <div className='cls'>
      <span>Govt ID</span><br></br>
      <select>
      <option value="option1">Aadhar</option>
      <option value="option2"> PAN</option>
      </select><br></br>
       <input type="text"  placeholder="Your id number" required onChange={(e) => setFormData({ ...formData, Govt_ID: e.target.value })}></input>
      </div>
      <div className='cls'>
      <span>Language</span><br></br>
       <input type="text"  placeholder="Your Language" required onChange={(e) => setFormData({ ...formData, Language: e.target.value })}></input>
      </div>
      <div className='cls'>
      <span>Salary Type</span><br></br>
      <select>
      <option value="option1">Daily Basis</option>
      <option value="option2">Hour Basis</option>
      </select><br></br>
       <input type="text"  placeholder="Your current salary" required onChange={(e) => setFormData({ ...formData, Salary: e.target.value })}></input>
      </div>
    </form>
    </div>
    </div> 
    <div className='div'>
    <div className='btns'>
    <div>
    <button className='btn' onClick={() => setStep(1)}>Previous</button></div>
    <button className='btn' onClick={handleSubmit}>Submit</button>
    </div>
    </div>
    </div>
     
    )}
    </div>
  )
}

export default Reg