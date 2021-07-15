import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import React from "react";
import volunteer from '../resources/volunteer.jpg';
import { useState } from 'react';
import '../styling/CarouselImage.css';
import { Button, makeStyles, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    form: {
        marginTop:30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '500px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
        heading: {
            top:"10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }
    },
}));

export default function Volunteer() {
    const classes = useStyles();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setcontactNumber] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
    };
    return (
        <div>
            <Carousel
            showIndicators={false}            
            showThumbs={false}
        >
            <div class="imagevolunteer">
                <img src={volunteer} alt="FoodImage" />
            </div>
        </Carousel>
        <form className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h4">
                Let's Contribute Towards a Better Future!
                </Typography>
                <Typography variant="h5" style={{marginTop:20,color:"#3f51b5"}}>
                    Our Mission~ Stop food wastage | Feed the Poor 
                </Typography>
                <Typography variant="h6" style={{marginTop:20,marginBottom:20, color:"black", fontStyle:"italic"}}>
                    Tell us why you'll be a good volunteer in our enthusiastic, empathetic and passionate and dynamic team! 
                </Typography>
                <TextField
                    label="First Name"
                    variant="filled"
                    required
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <TextField
                    label="Last Name"
                    variant="filled"
                    required
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <TextField
                    label="Email"
                    variant="filled"
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    label="Contact Number"
                    variant="filled"
                    required
                    value={contactNumber}
                    onChange={e => setcontactNumber(e.target.value)}
                />
                <TextField
                    label="Why you want to volunteer for a newly started cause?"
                    variant="filled"
                    required
                    multiline
                    value={feedback}
                    rows="3"
                    onChange={e => setFeedback(e.target.value)}
                />
                <TextField
                    label="Tell us why you'll be a good match for Position!!"
                    variant="filled"
                    required
                    multiline
                    value={feedback}
                    rows="5"
                    onChange={e => setFeedback(e.target.value)}
                />
                <div>
                    <Button variant="contained" href="/">
                        Changed my Mind
                    </Button>
                    <Button type="submit" variant="contained" color="primary">
                        Ready to Join!!
                    </Button>
                </div>
            </form>
        </div>
        
        

    );
}