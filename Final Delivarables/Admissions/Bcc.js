import React from "react";
import { Carousel } from 'react-bootstrap';
import i5 from './img7.jpg'
import i6 from './img5.jpg'
import i7 from './img6.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './c1.css';
class Bcc extends React.Component {
    render() {
        return (
            <div>
                <div className='container-fluid' >
                    <div className="row">
                        <div className="col-sm-12">
                            <center><h3>Prominent Alumni<br></br>__________________</h3></center>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Carousel className="r">
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={i5} height="500px" width="500px"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Reita Patricia</h3>
                                        <p>Data Scientist, Google.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={i6} height="500px" width="500px"
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Amelia George</h3>
                                        <p>Senior Software Engineer, Microsoft </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={i7} width="500px" height="500px"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Kenneth Carol</h3>
                                        <p>Software Engineer Level VI, Facebook </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}
export default Bcc;
