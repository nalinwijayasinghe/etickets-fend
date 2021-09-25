import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '../Components/appBar';
import MovieBanner from '../images/movieBanner.jpg';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MovieCard from '../Components/movieCard';
import EventCard from '../Components/eventCardComponent';
import Grid from '@material-ui/core/Grid';
import HeroSection from '../Components/homaPageBanner';
import Carousel from '../Components/movieCarousel';
import Button from '@material-ui/core/Button';
import Footer from '../Components/footer';

export default function Payments() {
    const classes = useStyles();
    const [adultsSeats, setadultsSeats] = useState(5);
    const [childrenSeats, setchildrenSeats] = useState(0)

    const seatIncriments = () => {
        setadultsSeats(adultsSeats + 1);
        setchildrenSeats(childrenSeats - 1)
    }
    const seatDecriments = () => {
        setadultsSeats(adultsSeats - 1);
        setchildrenSeats(childrenSeats + 1)
    }

    const seatIncrimentsChildren = () => {
        setadultsSeats(adultsSeats - 1);
        setchildrenSeats(childrenSeats + 1)
    }
    const seatDecrimentsChildren = () => {
        setadultsSeats(adultsSeats + 1);
        setchildrenSeats(childrenSeats - 1)
    }

    return (

        <div className={classes.root}>
            <AppBar />


            <Container>
                <div className={classes.subHeader}>
                    <Typography variant="button">
                        Booking Summary
                    </Typography>
                </div>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <div className={classes.bookingDetailRow}>
                                <div className={classes.bookingDetailRowLeft}> Sofa-C7,C9 ( 2 Tickets )</div>
                                <div className={classes.bookingDetailRowRight}> Rs. 500</div>
                            </div>
                            <div className={classes.bookingDetailRow}>
                                <div className={classes.bookingDetailRowLeft}> Number of seats - Adults</div>
                                <div className={classes.btnAndText}>
                                    <div className={classes.incDecBtn} onClick={seatDecriments}>-</div>
                                    <div className={classes.bookingDetailRowRight}>{adultsSeats}</div>
                                    <div className={classes.incDecBtn} onClick={seatIncriments}>+</div>
                                </div>

                            </div>
                            <div className={classes.bookingDetailRow}>
                                <div className={classes.bookingDetailRowLeft}> Number of seats - Children</div>
                                <div className={classes.btnAndText}>
                                    <div className={classes.incDecBtn} onClick={seatDecrimentsChildren}>-</div>
                                    <div className={classes.bookingDetailRowRight}>{childrenSeats}</div>
                                    <div className={classes.incDecBtn} onClick={seatIncrimentsChildren}>+</div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div>adhDGHGH</div>
                        </Grid>

                    </Grid>
                </div>
            </Container>


        </div>

    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },

    subHeader: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#e6e6e6',
        padding: 10,
        borderRadius: 4
    },
    bookingDetailRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        webkitBoxShadow: "1px 3px 5px #ececec",
        mozBoxShadow: "1px 3px 5px #ececec",
        boxShadow: "1px 3px 5px #ececec",
        padding: 10,
        borderRadius: 5,
        marginBottom: 20
    },
    incDecBtn: {
        width: 25,
        height: 25,
        borderRadius: 25,
        backgroundColor: '#fe7e3f',
        color: '#fff',
        textAlign: 'center',
        fontSize:20,
        lineHeight:1
    },
    btnAndText:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    bookingDetailRowRight:{
        marginLeft:10,
        marginRight:10
    }
}));