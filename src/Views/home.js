import React from 'react';
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

export default function Home() {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <AppBar />
           <div style={{paddingTop:10, paddingBottom:25, width:'100%', }}>
            <Carousel/>
            </div>
            <Container>
            <div className={classes.subHeader}>
                <Typography  variant="button">
                    Movies
                </Typography>
                </div>
                <Grid container spacing={3}>
                <MovieCard />
                
                </Grid>
            </Container>
            <Container>
                <div className={classes.subHeader}>
                <Typography  variant="button">
                    Events
                </Typography>
                </div>
                <Grid container spacing={3}>
                <EventCard />
               
                </Grid>
            </Container>
            <Footer/>
        </div>
        
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    media: {
        height: 300,

        width: '100%' // 16:9
    },
    subHeader:{
        marginTop:20,
        marginBottom:20,
        backgroundColor:'#e6e6e6',
        padding:10,
        borderRadius:4
    }
}));