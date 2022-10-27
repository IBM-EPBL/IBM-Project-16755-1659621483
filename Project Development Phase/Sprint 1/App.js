import './App.css';
import i1 from './img1.png'
import React from 'react';
import Navbar from './components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapCarouselComponent from './pages/BootstrapCarouselComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons'

function App() {
    return (
        <div><div className="c0">
            <Navbar />
            <div className="c1">
                <img src={i1} width="20%" height="20%" alt="fireSpot" /><br></br>
                <h1>HAVARD</h1>
            </div>
            <div className="campustour">
                <iframe width="1400" height="700" src="https://www.youtube.com/embed/_86tHnzxF3Q"
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             </div>
            <div>
                <div className="t1"><h3> About Harvard<br></br>_____________</h3></div>
                <div className="t2">
                    Harvard University possesses the title of America's oldest learning institution,
                    founded in 1636. At its inception, this university's name was "New College," and its purpose was mainly
                    to educate clergy. In 1639, the school's name became Harvard University,
                        so named for the Rev. John Harvard.
                   With some 17,000 Puritans migrating to New England by 1636,
                        Harvard was founded in anticipation of the need for training clergy for the new commonwealth, a "church in the wilderness". Harvard was established in 1636 by vote of the Great and General Court of the Massachusetts Bay Colony. In 1638, the school received a printing p
                        ress‍—‌the only press at the time in what is now the United States, until Harvard acquired a second in 1659
                On March 13, 1639, the college was renamed Harvard College after clergyman John Harvard, a University of Cambridge
                alumnus who had willed the new school £779 pounds sterling and his library of some 400 books</div>
            </div>
            <div className="car">
            <BootstrapCarouselComponent /> </div>
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

export default App;