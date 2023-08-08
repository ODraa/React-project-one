import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css';
import image1 from '../images/slider-image/p1.jpg' 
// 2000 x 1229
import image2 from '../images/slider-image/p4.jpg'
import image3 from '../images/slider-image/p3.jpg'

function Slider() {
    return (
        <div>
            <Carousel className= "custom-carousel">
                <Carousel.Item>
                    <img src = {image1} className="d-block w-100" alt="..." />
                </Carousel.Item>
                <Carousel.Item>
                    <img src = {image2} className="d-block w-100" alt="..." />
                </Carousel.Item>
                <Carousel.Item>
                    <img src = {image3} className="d-block w-100" alt="..." />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider;