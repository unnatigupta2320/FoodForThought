import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import React from "react";
import foodImage from '../resources/foodimage.jpg';
import hungerImage from '../resources/hunger2.jpg';
import '../styling/CarouselImage.css';
import {Button, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    button: {
        fontFamily: "sans-serif",
        fontWeight: 200,
        fontSize: "10px"
    },
}));

export default function ImageCarousel() {
    const { button } = useStyles();
    return (
        <Carousel
            showIndicators={true}
            infiniteLoop={true}
            useKeyboardArrows={true}
            autoPlay={true}
            swipeable={true}
            emulateTouch={true}
            showThumbs={false}
        >
            <div class="image">
                <img src={foodImage} alt="FoodImage" />
                <div class="contentOnImage">
                    <h2>
                        <span>Just had a party? About to dispose leftover food??
                            Wait!!
                        </span>
                    </h2>
                    <br />
                </div>
            </div>
            <div class="image">                
                <div class="">
                <img src={hungerImage} alt="HungryKids" />
                    <div class="contentOnImage">
                    
                    <h2>
                        <span>
                            That food can feed at least some from huge list of 19 crore people in India sleep hungry every day!!
                        </span>
                    </h2>
                    <Button
                        href="/donatefood"
                        className = {button}
                        class = "button"
                    >
                        Donate Leftover Food
                    </Button>
                    <br />

                    </div>                
                    
                </div>
            </div>
        </Carousel>

    );
}