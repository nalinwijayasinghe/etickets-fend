import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

import { useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { EventContext } from '../eventContext';
import {ACCESS_TOKEN} from '../Components/constants';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    Links: {
        textDecoration: 'none',

    },
    trucatedText: {
        maxWidth: '100%',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    }
});

export default function MovieCardComponent(props) {
    const classes = useStyles();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [limit, setLimit] = useState(7);
    const [clientToken, setclientToken] = useState('93d7759d-6988-4700-be5d-bdb805ec1d71');
    const [eventId,setEventId]=useState(0);
    const [movieId, setMovieId] = useContext(EventContext);
    const [movieGenres, setMovieGenres] = useContext(EventContext);

    const history = useHistory();

    useEffect(()=>{
        fetch("http://ec2-3-6-92-221.ap-south-1.compute.amazonaws.com:8081/v1/events/online?eventTypes=MOVIE",
        {
            method:'GET',headers: {
                Authorization:'Bearer '+ACCESS_TOKEN,
                 clientToken: clientToken,
                 Accept: 'application/json', },
        })
        .then(res => res.json())
        .then(
            (result) => {
                console.log('Movie card is running');
                console.log(result);
                console.log(result.events);
                console.log(result.genres,"genres");
                setIsLoaded(true);
                setItems(result.events);


            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )

    },[])

    const updateId = (mId) => {
        
        //alert(mId);
       setMovieId(mId);
       //window.location.href='/moviedetails'
       history.push("/moviedetails");
      
    }

    return (
        <>
            {items.slice(0, limit ? limit : items.length).map(item => 
            (
                
                <Grid key={item.eventId} item xs={12} md={3} sm={6} xl={3}>
                    <Card className={classes.root} onClick={() => updateId(item.eventId)} >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt={item.title}
                                height="250"
                                image={item.thumbnail}
                                title={item.title}
                            />
                            <CardContent>
                                <Typography className={classes.trucatedText} gutterBottom variant="h5" component="h2">
                                    {item.title}
                                </Typography>
                               {/* {item.genres.map(item=>( */}
                                    <Typography className={classes.trucatedText} variant="body2" color="textSecondary" component="p">
                                         Relese Year :{item.year}
                                    </Typography>
                                {/* ))} */}
                            </CardContent>
                        </CardActionArea>
                        {/* <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button onClick={() => updateId(item.eventId)} size="small" color="primary">
                                Details
                            </Button>
                           
                        </CardActions> */}
                    </Card>
                </Grid>
            )
            )
           }



            {/* <Grid item xs={12} md={3} sm={6} xl={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="250"
                            image="https://static.toiimg.com/photo/73491567.jpeg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
                            </Typography>
                            <Typography className={classes.trucatedText} variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Link className={classes.Links} to="/moviedetails"> <Button size="small" color="primary">
                            Details
                        </Button>
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} md={3} sm={6} xl={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="250"
                            image="https://static.toiimg.com/photo/73491567.jpeg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
                            </Typography>
                            <Typography className={classes.trucatedText} variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Link className={classes.Links} to="/moviedetails"> <Button size="small" color="primary">
                            Details
                        </Button>
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} md={3} sm={6} xl={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="250"
                            image="https://static.toiimg.com/photo/73491567.jpeg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
                            </Typography>
                            <Typography className={classes.trucatedText} variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Link className={classes.Links} to="/moviedetails"> <Button size="small" color="primary">
                            Details
                        </Button>
                        </Link>
                    </CardActions>
                </Card>
            </Grid> */}
        </>

    );
}