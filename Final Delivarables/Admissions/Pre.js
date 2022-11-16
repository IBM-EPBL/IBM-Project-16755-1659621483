import React from 'react'
import './Pre.css'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Pre() {
    const [gre, setGre] = useState('');
    const [toefl, setToefl] = useState('');
    const [university,setUniversity]=useState('')
    const [sop, setSop] = useState('');
    const [lor, setLor] = useState('');
    const [cgpa, setCgpa] = useState('');
    const navigate = useNavigate();

    function Predict(event) {
        event.preventDefault();
        if (gre && toefl && sop && lor && cgpa) {
            const predictionParams = {
                gre,
                toefl,
                university,
                sop,
                lor,
                cgpa,
            };
            const headers = {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            };
            axios.post('http://127.0.0.1:8000/predict', predictionParams, { headers })
                .then((response) => {
                    predictionParams.prediction = response.data.prediction;
                    [predictionParams.date, predictionParams.time] = new Date().toLocaleString().split(', ');
                    sessionStorage.setItem('prediction', response.data.prediction);
                    navigate('/results');
                }) // eslint-disable-line no-console
                .catch((ex) => console.log(ex)); // eslint-disable-line no-console
        }
    }
        return (
            <div>
                <body>
                    <div class="pre-wrapper">
                        <form action="" class="form" onSubmit={Predict }>
                            <h2>Prediction</h2>
                            <div class="input-group">

                                <input type="number" name="Gre" id="gre" value={gre} onChange={(e) => setGre(e.target.value)} />
                                <label for="Gre">GRE</label>
                            </div>
                            <div class="input-group">
                                <input
                                    type="number"
                                    name="Toefl"
                                    id="toefl" value={toefl} onChange={(e) => setToefl(e.target.value)}
                                />
                                <label for="Toefl">TOEFL</label>
                            </div>
                            <div class="input-group">
                                <input
                                    type="number"
                                    name="University"
                                    id="university" value={university} onChange={(e) => setUniversity(e.target.value)}
                                />
                                <label for="University">University</label>
                            </div>
                            <div class="input-group">
                                <input
                                    type="number"
                                    name="Sop"
                                    id="sop" value={sop} onChange={(e) => setSop(e.target.value)}

                                />
                                <label for="Sop">SOP</label>
                            </div>
                            <div class="input-group">
                                <input
                                    type="number"
                                    name="Lor"
                                    id="lor" value={lor} onChange={(e) => setLor(e.target.value)}

                                />
                                <label for="Lor">LOR</label>
                            </div>
                            <div class="input-group">
                                <input
                                    type="number"
                                    name="Cgpa"
                                    id="cgpa" value={cgpa} onChange={(e) => setCgpa(e.target.value)}

                                />
                                <label for="Cgpa">CGPA</label>
                            </div>
                            <input  type="submit" value="Submit" class="submit-btn" />
                        </form>
                    </div>
                </body>
            </div>
        );
    }
    export default Pre;