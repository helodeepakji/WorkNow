import React, { useState } from "react";
import './Registation.css';

export default function Registation() {
    const [ShowSlide,setShowSlide] = useState(false);
    return(
        <div className="boxi">
        <div className="regisiterform">
            <div className="title">Registration</div>
            <form action="regisiter" method="POST" enctype="multipart/form-data">
                <div className={ ShowSlide ? "user__details hidden" : "user__details"} id="slide1">
                    <div className="input__box">
                        <span className="details">Full Name</span>
                        <input type="text" name="name" placeholder="Deepak Morya" required/>
                    </div>
                    <div className="input__box">
                        <span className="details">Username</span>
                        <input type="text" name="username" placeholder="helodeepakji" required/>
                    </div>
                    <div className="input__box">
                        <span className="details">Email</span>
                        <input type="email" name="email" placeholder="johnsmith@hotmail.com" required/>
                    </div>
                    <div className="input__box">
                        <span className="details">Phone Number</span>
                        <input type="number" name="phone" placeholder="012-345-6789" required/>
                    </div>
                    <div className="input__box">
                        <span className="details">Age</span>
                        <input type="Number" name="age" placeholder="age" required/>
                    </div>
                    <div className="input__box">
                        <span className="details" name="gender">Gender</span>
                        <input type="radio" name="gender" value="male" id="dot-1" />
                        <input type="radio" name="gender" value="female" id="dot-2" />
                        <div className="category">
                            <label for="dot-1">
                                <span className="dot one"></span>
                                <span>Male</span>
                            </label>
                            <label for="dot-2">
                                <span className="dot two"></span>
                                <span>Female</span>
                            </label>
                        </div>
                    </div>
                    <div className="input__box">
                        <span className="details">Password</span>
                        <input type="password" name="password" placeholder="********" required/>
                    </div>
                    <div className="input__box">
                        <span className="details">Confirm Password</span>
                        <input type="password" name="cpassword" placeholder="********" required/>
                    </div>
                    <div className="button">
                        <input onClick={()=>setShowSlide(true)} id="next" value="Next" />
                    </div>
                </div>
                <div className={ !ShowSlide ? "user__details hidden" : "user__details"} id="slide2">
                    <div className="input__box">
                        <span className="details">Occupation</span>
                        <input type="text" name="occupation" placeholder="Occupation" required/>
                    </div>
                    <div className="input__box">
                        <span className="details">Salary</span>
                        <input type="Number" name="salary" placeholder="salary" required/>
                    </div>
                    <div className="input__box">
                        <span className="details">Education</span>
                        <input type="text" name="education" placeholder="johnWC98" required/>
                    </div>
                    <div className="input__box">
                        <span className="details">Profile </span>
                        <input type="file" name="profile" className="typimg" required/>
                    </div>
                    <div className="input__box">
                        <span className="details">City</span>
                        <input type="text" name="city" placeholder="Ghaziabad" required/>
                    </div>
                    <div className="input__box">
                        <span className="details">State</span>
                        <select name="state" id="state">
                            <option value="">Select State</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                            <option value="Daman and Diu">Daman and Diu</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Puducherry">Puducherry</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                        </select>
                    </div>
                    <div className="input__box">
                        <span className="details">Reigion</span>
                        <select name="reigion" id="">
                            <option value="" default>Select Reigion</option>
                            <option value="Hindu" default>Hindu</option>
                            <option value="Islam" default>Islam</option>
                            <option value="Christian" default>Christian</option>
                            <option value="Sikhism" default>Sikhism</option>
                        </select>
                    </div>
                    <div className="input__box">
                        <span className="details">Mothertoug</span>
                        <select name="mothertoug" id="">
                            <option value="" default>Select Mothertoug</option>
                            <option value="Hindi" default>Hindi</option>
                            <option value="English" default>English</option>
                            <option value="Bhojpuri" default>Bhojpuri</option>
                            <option value="Punjabi" default>Punjabi</option>
                            <option value="Garhwali" default>Garhwali</option>
                            <option value="Marathi" default>Marathi</option>
                            <option value="Bangali" default>Bangali</option>
                            <option value="Odia" default>Odia</option>
                        </select>
                    </div>
                    <div className="button">
                        <input type="submit" id="next" value="Register" />
                    </div>
                </div>
            </form>
        </div>
    </div>
    );
}