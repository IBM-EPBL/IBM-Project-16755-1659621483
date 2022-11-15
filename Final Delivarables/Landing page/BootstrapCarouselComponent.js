import React from "react";
import { Carousel } from 'react-bootstrap';
import i2 from './img3.jpg'
import i3 from './img2.jpg'
import i4 from './img1.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';
class BootstrapCarouselComponent extends React.Component {
    render() {
        return (
            <div>
                <div className='container-fluid' >
                    <div className="row">
                        <div className="col-sm-12">
                            <center><b><h1>Testimonials</h1></b></center>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Carousel className="r">
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={i2} height="500px" width="500px"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Peter</h3>
                                        <p>Everything I could have asked for. Campus is easy to navigate and welcoming. Classes are collaborative and professors have many opportunities outside of class for extra help and office hours. Part of the social culture is studying so you are never choosing between friends or academics. The teaching teams understand and value your passions outside of academia and are very willing to work around extracurricular activities.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={i3} height="500px" width="500px"
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Angelina</h3>
                                        <p>The opportunities are unmatched! There are always amazing people and things
                                            to learn from. There are many ways to get involved with a diverse array of things,
                                            and the people have been really kind in my experience.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={i4} width="500px" height="500px"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Harvey</h3>
                                        <p>The opportunities are unmatched! There are always amazing
                                            people and things to learn from. There are many ways to get
                                            involved with a diverse array of things, and the people have been really kind
                                            in my experience.</p>
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
export default BootstrapCarouselComponent;
