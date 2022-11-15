import React from 'react';
import './Admissions.css';
import './courses.css';
import i1 from './img4.png'
import './PrepGuide.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
function Courses() {
    return (
        <div>
            <div className="topic">
                <img src={i1} width="18%" height="18%" alt="fireSpot" />
                <h1>Harvard University</h1>
            </div>
            <div className="ad1"><h3>Term-Time Research<br></br>__________________</h3></div>
            <div className="ad2">During the academic year, you can conduct research for credit, as determined by the director of undergraduate study in each department.
                Students can also receive funding from one of many sources. Additionally, many faculty members across academic departments hire students directly to serve as research assistants.

                The Harvard College Research Program (HCRP) provides term-time and summer grants for students conducting independent research in collaboration with a faculty mentor.
                The Faculty Aide Program (FAP) provides half of a student's total wages when working for an approved faculty member as a research assistant.
                The Mellon Mays Undergraduate Fellowship Program (MMUF) provides a term-time stipend, as well as the option for summer research funds, to a group of approximately 20 juniors and seniors, selected in the spring of their sophomore years.
            </div>
            <div className="ad3">
                <div className="ad1"><h3>Faculty Engagement<br></br>____________________</h3></div>
                <div className="ad4">
                    <div><h2>130+</h2>
                        <h5>Freshman Seminars</h5>
                    </div>
                    <div><h2>400+</h2>
                        <h5>First-year Advisers</h5>
                    </div>
                    <div><h2>7:1</h2>
                        <h5>Student to faculty ratio</h5>
                    </div>
                    <div><h2>12</h2>
                        <h5>Median course size</h5>
                    </div>
                </div>
            </div>
            <div className="tab">
            <table id="customers">
                <tr>
                    <th>S.NO</th>
                    <th>Courses</th>
                    <th>details</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Modern Masterpieces of World Literature</td>
                    <td>https://www.harvardonline.harvard.edu/course/modern-masterpieces-world-literature</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>World Religions Through Their Scriptures</td>
                    <td>https://www.harvardonline.harvard.edu/course/world-religions-through-their-scriptures</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>The Ancient Greek Hero</td>
                    <td>https://www.harvardonline.harvard.edu/course/ancient-greek-hero</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Introduction to AI with python</td>
                        <td>https://www.harvardonline.harvard.edu/course/cs50s-introduction-artificial-intelligence-python</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Introduction to Programming with Python</td>
                        <td>https://www.harvardonline.harvard.edu/course/cs50s-introduction-programming-python</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Web Programming with JS and python</td>
                        <td>https://www.harvardonline.harvard.edu/course/cs50s-web-programming-python-javascript</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Introduction to Game development</td>
                        <td>https://www.harvardonline.harvard.edu/course/cs50s-introduction-game-development</td>
                </tr>
             
                </table>
                </div>
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

export default Courses;