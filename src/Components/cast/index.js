import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';



export default function CastPage(props) {
    const classes = useStyles();
    console.log(props.cast,"cast page before split");
    console.log(props.cast.split(","),"split cast page");
   // const [castitems,setCastitems]=useState(props.cast.split(","));
   // console.log(castitems);
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
           {props.cast.split(",").map(item=>(
            
                <Grid item xs={6} sm={6} md={3} sm={4} lg={2}>
                    <Paper elevation={0} className={classes.paper}>
                        <Avatar className={classes.avatarImage} alt="Remy Sharp" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F968210608%2F960x0.jpg%3Ffit%3Dscale" />
                        <Typography variant="subtitle2" gutterBottom>
                            {item}
                        </Typography>
                        <Typography variant="caption"  gutterBottom>
                            Actor
                        </Typography>
                    </Paper>
                </Grid>
        
            ))
            } 
            </Grid>       
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },

    avatarImage: {
        width: 100,
        height: 100
    }
}));