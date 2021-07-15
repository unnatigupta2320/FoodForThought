import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import React from "react";
import aboutus from '../resources/aboutus.jpg';
import '../styling/CarouselImage.css';

export default function AboutUs() {
    return (
        <Carousel
            showIndicators={false}            
            showThumbs={false}
        >
            <div class="imageabout">
                <img src={aboutus} alt="FoodImage" />
                <div class="contentOnImage">
                    <h1>
                        <span>About Us
                        </span>
                    </h1>
                    <br />
                </div>
            </div>
        </Carousel>

    );
}