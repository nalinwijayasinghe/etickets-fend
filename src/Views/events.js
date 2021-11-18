import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '../Components/appBar';
import EventCard from '../Components/eventCardComponent';
import Grid from '@material-ui/core/Grid';


export default function Events() {
    const classes = useStyles();


    return (
        <>
            <AppBar />
            <Container style={{marginTop:25, marginBottom:25}}>
                <Grid container spacing={3}>
                    <EventCard/>
                </Grid>
            </Container>

        </>
    );
}

const useStyles = makeStyles((theme) => ({



}));
