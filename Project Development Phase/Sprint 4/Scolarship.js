import React from 'react';
import './Admissions.css';
import './Scholarship.css'
import i1 from './img4.png'
import ig1 from './img8.jpg'
import ig2 from './img9.jpg'
import ig3 from './img10.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
function Scolarship() {
    return (
        <div className='Scolarship'>
            <div className="topic">
                <img src={i1} width="18%" height="18%" alt="fireSpot" />
                <h1>Harvard University</h1>
            </div>
            <div className="ad1"><h3>Scholarships and Grants<br></br>_______________________</h3></div>
            <div className="ad2">When you qualify for financial aid from Harvard, we use a combination of resources to create an
                individualized aid package to meet your demonstrated need. This may include scholarship funds and student employment,
                as well as any awards you have earned from outside sources. Parent and student loans are also available for interested families.
                Because Harvard is committed to affordability, our scholarships are designed to cover 100% of your demonstrated financial need. Here is our process:
                <ul><li>First we determine your award by establishing your parent contribution</li>
                <li>Then we factor in student employment and any outside awards you have received</li>
                <li>Your remaining need will be covered by scholarship funds which are grant-based and never need to be repaid</li></ul>
                Scholarship funds come from a variety of sources, including Harvard endowment funds, gifts from alumni, general tuition revenues, and federal and state grants.

                The Faculty of Arts and Sciences Scholarship program includes more than 2,000 individual endowment and gift funds,
                established by generous alumni and donors, including a transformational $150 million gift from Ken Griffin 89. We report to many of these donors annually using the information students share with us over the summer.
            </div>
            <div className="ad1"><h3>Outside Awards<br></br>______________</h3></div>
            <div className="ad2">Like many of our students, you may receive scholarship funds from sources outside Harvard, such as secondary schools, civic organizations, your parental employers, corporations, the National Merit Scholarship Programs, VA Benefits, and the ROTC.

                Since the intent of these awards is that they be used for educational purposes, you must report them to Harvard and apply them toward your college expenses. We will consider your outside awards as a part of your overall financial aid funding.

                Funds from outside awards are incorporated into your financial aid package in two steps:

                <ul><li>First to replace the term-time job expectation.</li>
                    <li>If you have outside awards that exceed your term-time work expectation the remaining amount would replace an
                    equal amount of Harvard scholarship.</li></ul>
                Since outside awards are additional resources that reduce your financial need, they cannot be used to replace your parent contribution.

                Report your outside awards through the Outside Awards Reporting System. Find where to send checks and Verification of Enrollment forms on our website.
            </div>
            <div className="ad1"><h3>Loans<br></br>_____</h3></div>
            <div className="ad2"> You are not expected to take out loans as part of your financial aid package. Our aid packages are designed to cover your financial need without additional borrowing. In fact, most of our students graduate debt-free. However, you may choose to pursue loans to help cover your student or family contribution. Students may request loans using our Student Loan Request Form.

                If you are interested in a loan, we will help you find one that works for you. You may also consider federal or private parent loans.
            </div>
            <div className="cs">
                <div className="cs1"><img
                    src={ig1} height="250px" width="250px"
                    alt="First slide"
                />
                    <h5>Hispanic and Latino Scholarship</h5>
                    <a href="https://www.cappex.com/scholarships/hispanic-latinos"><button>View</button></a>
                </div>
                <div className="cs2"><img
                    src={ig2} height="250px" width="250px"
                    alt="First slide"
                />
                    <h5>LGBTQ Scholarship</h5>
                    <a href="https://www.cappex.com/scholarships/lgbtq"><button>View</button></a>
                </div>
                <div className="cs3"><img
                    src={ig3} height="250px" width="250px"
                    alt="First slide"
                />
                    <h5>Woman Scholarship</h5>
                    <a href="https://www.cappex.com/scholarships/women"><button>View</button></a>
                </div>
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

export default Scolarship;