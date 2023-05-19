import './Home.css';
import couple1 from './image/couple1.png';
import couple2 from './image/couple2.png';
import couple3 from './image/couple3.png';
import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <>
            <section className="mid">
                <h1>The Best Proof of Love is Trust</h1>
                <NavLink className="regi" to="/regisiter">REGISITER NOW</NavLink>
            </section>
            <section className="midnext">
                <div className="text">
                    <h1>We Build your dream around you.</h1>
                    <h2>Experience | Excallance | With Perfection</h2>
                </div>
                <div className="searchbox">
                    <form action="findbest" method="post">
                        <div className="field">
                            <select name="mother_tong" id="">
                                <option value="">Select Mother Tongue</option>
                                <option value="hindi">Hindi</option>
                                <option value="bhojpuri">Bhojpuri</option>
                                <option value="punjabi">Punjabi</option>
                                <option value="english">English</option>
                            </select>
                            <select name="reigion" id="">
                                <option value="">Select Reigion</option>
                                <option value="hindu">Hindu</option>
                                <option value="muslim">Muslim</option>
                                <option value="christian">Christian</option>
                                <option value="sikhism">Sikhism</option>
                            </select>
                        </div>
                        <div className="field">
                            <select name="gender" id="">
                                <option value="">Select Gender</option>
                                <option value="hindi">Male</option>
                                <option value="bhojpuri">Female</option>
                            </select>
                            <select name="country" id="">
                                <option value="">Select Country</option>
                                <option value="india">India</option>
                                <option value="china">China</option>
                                <option value="pakistan">Pakistan</option>
                                <option value="srilanka">Sri Lanka</option>
                            </select>
                        </div>
                        <div className="field">
                            <button type="submit">Search</button>
                        </div>
                    </form>
                </div>
            </section>
            <section className="couple">
                <div className="recipe-card">
                    <img className="recipe-preview" src={couple1} alt="noodle" />
                    <strong className="recipe-title">marriage couple</strong>
                    <span className="recipe-level">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quisquam unde cupiditate, quidem nulla beatae libero sequi error ullam natus repudiandae illo dolorum dolorem nesciunt!</span>
                </div>
                <div className="recipe-card">
                    <img className="recipe-preview" src={couple2} alt="noodle" />
                    <strong className="recipe-title">marriage couple</strong>
                    <span className="recipe-level">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quisquam unde cupiditate, quidem nulla beatae libero sequi error ullam natus repudiandae illo dolorum dolorem nesciunt!</span>
                </div>
                <div className="recipe-card">
                    <img className="recipe-preview" src={couple3} alt="noodle" />
                    <strong className="recipe-title">marriage couple</strong>
                    <span className="recipe-level">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quisquam unde cupiditate, quidem nulla beatae libero sequi error ullam natus repudiandae illo dolorum dolorem nesciunt!</span>
                </div>
            </section>
        </>
    );
}