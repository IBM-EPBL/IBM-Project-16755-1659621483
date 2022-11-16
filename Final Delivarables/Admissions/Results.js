

import React from 'react';
import './Admissions.css';
import './courses.css';
import i1 from './img4.png'
import './PrepGuide.css'
import './Results.css'
function Results() {
    const [accepted, setAccepted] = React.useState(false);
    React.useEffect(() => {
        if (window.sessionStorage.getItem('prediction')) {
            setAccepted(window.sessionStorage.getItem('prediction'));
        }
    }, []);
    return (
        <div>
            <div className="f0">
            <div className="topic">
                <img src={i1} width="18%" height="18%" alt="fireSpot" />
                <h1>Harvard University</h1>
                </div>
                <div className="f1">Your Chance Of Admit is </div>
                <div className="f2">{accepted}</div>
                </div>
        </div>
        
    );
}

export default Results;