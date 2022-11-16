import React from 'react';
import './Admissions.css';
import i1 from './img4.png'
import Bcc from './Bcc'
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
function Admissions() {
    return (
        <div>
            <div className="topic">
                <img src={i1} width="18%" height="18%" alt="fireSpot" />
                <h1>Harvard University</h1>
                <button><Link to="./Pre" path="relative">Predict</Link></button>
            </div>
            <div className="ad1"><h3>Application TimeLine<br></br>____________________</h3></div>
            <div className="ad2">You may apply to Harvard under either our Restrictive Early Action or our Regular Decision program,
                both of which allow you to compare admission and financial aid offers from other institutions and to wait until
                May 1 to make a final college choice.<br></br><br></br>
                <ul><li>Restrictive Early Action candidates apply by November 1 and receive notification by mid-December.</li>
                <li>Regular Decision candidates apply by January 1 and receive notification by the end of March.</li></ul><br></br>
                You are welcome to apply to Harvard using the Common Application or the Coalition Application, Powered by Scoir. The Common Application opens on August 1 for applicants to start completing their application. The Coalition Application is being developed in partnership with Scoir/Technolutions for the 2022-23 application cycle and opens on September 1.
            </div>
            <div className="ad1"><h3>First-Year Application Requirements<br></br>___________________________________</h3></div>
            <div className="ad2">All first-year applicants both international and U.S. candidates must complete the Common
                Application or apply Coalition, Powered by Scoir, along with the required supplements. You will need to submit:
                <br></br><ul>
                <li>Common Application or apply Coalition, Powered by Scoir</li>
                <li>Harvard College Questions for the Common Application or Coalition Application Harvard supplement</li>
                <li>$85 fee (or request a fee waiver)</li>
                <li>SAT or ACT (with or without writing)  optional for 2022-2026 application cycles</li>
                <li>Optional: AP or other examination results</li>
                <li>School Report (which includes a counselor letter) and high school transcript</li>
                <li>Teacher Report (2)</li>
                <li>Midyear School Report (after your first semester grades))</li>
                <li>Final School Report (for admitted students only)</li></ul>
            </div>
            <div className="ad3">
                <div className="ad1"><h3>Admission Statistics<br></br>____________________</h3></div>
                <div className="ad4">
                    <div><h2>61,221</h2>
                        <h5>applicants</h5>
                    </div>
                    <div><h2>1098</h2>
                        <h5>admitted</h5>
                    </div>
                    <div><h2>36</h2>
                        <h5>in waiting list</h5>
                        </div>
                </div>
            </div>
            <div className="car1">
                <Bcc /> </div>
            <div className="si">
                <div className="singleCol social-media-icons-white d-flex justify-content-center">
                    <a href="https://www.facebook.com/Harvard/">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://twitter.com/Harvard?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://www.instagram.com/harvard/?hl=en">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com/school/harvard-university/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </div>
        </div>

    );
}

export default Admissions;