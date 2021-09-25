import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '../Components/appBar';
import MovieCard from '../Components/movieCard';
import Grid from '@material-ui/core/Grid';


export default function Movies() {
    const classes = useStyles();


    return (
        <>
            <AppBar />
            <Container style={{marginTop:25, marginBottom:25}}>
                <Grid container spacing={3}>
                    <MovieCard />

                </Grid>
            </Container>

        </>
    );
}

const useStyles = makeStyles((theme) => ({



}));
