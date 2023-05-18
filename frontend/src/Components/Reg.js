import React, { useState } from 'react'

const Reg = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    Contact: '',
    email: '',
    Adress: '',
    Gender: '',
    Work: '',
    Aadhar: '',
    Education: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div class="main">
    {step==1 && ( 
    <div class="items">
    <form>
    <div className='div'>
    <label className='lbl'><b>Name</b></label>
    <> <input type="text"  placeholder="Your name" className='abcd' required onChange={(e) => setFormData({ ...formData, name: e.target.value })}></input></> 
    </div>
    <div className='div'>
    <label className='lbl'><b>contact</b></label>
    <> <input type="number"  placeholder="Your number" required onChange={(e) => setFormData({ ...formData, Contact: e.target.value })}></input></> 
    </div>
    <div className='div'>
    <label className='lbl'><b>Email</b></label>
    <> <input type="email"  placeholder="Your email" required onChange={(e) => setFormData({ ...formData, email: e.target.value })}></input></> 
    </div>
    <div className='div'>
    <label className='lbl'><b>Address</b></label>
    <> <textarea  type="text"  placeholder="Your Adress" required onChange={(e) => setFormData({ ...formData, Adress: e.target.value })}></textarea></> 
    </div>
    <div className='div'>
    <button onClick={() => setStep(2)}>Next</button>
    </div>
    </form>
    </div>
    )}

    {step==2 && ( 
    <div class="items">
    <form> 
    <div className='div'>
    <label className='lbl'><b>Aadhar</b></label>
    <> <input type="text"  placeholder="Your Gender" required onChange={(e) => setFormData({ ...formData, Gender: e.target.value })}></input></> 
    </div><div className='div'>
    <label className='lbl'><b>Education</b></label>
    <> <input type="text"  placeholder="Your Work" required onChange={(e) => setFormData({ ...formData, Work: e.target.value })}></input></> 
    </div>
    <div className='div'>
    <label className='lbl'><b>Gender</b></label>
    <> <input type="email"  placeholder="Your Aadhar" required onChange={(e) => setFormData({ ...formData, Aadhar: e.target.value })}></input></> 
    </div>
    <div className='div'>
    <label className='lbl'><b>PIN</b></label>
    <> <input  type="number"  placeholder="Your Education" required onChange={(e) => setFormData({ ...formData, Education: e.target.value })}></input></> 
    </div>
    <div className='div'>
    <button onClick={() => setStep(1)}>Previous</button>
    </div>
    <div className='div'>
    <button onClick={handleSubmit}>Submit</button>
    </div>
    </form>
    </div>
    )}
    </div>
  )
}

export default Reg