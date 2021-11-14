import React from 'react';
import {useState,useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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

export default function MovieCardComponent() {
    const classes = useStyles();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [limit, setLimit] = useState(5);
    const [clientToken, setclientToken] = useState('93d7759d-6988-4700-be5d-bdb805ec1d71');

    useEffect(()=>{
        fetch("http://ec2-3-6-92-221.ap-south-1.compute.amazonaws.com:8081/v1/events/online?eventTypes=MOVIE",
        {
            method:'GET',headers: {
                Authorization:'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJvbmxpbmUiLCJyb2xlcyI6WyJPTkxJTkUiLCJTVEFGRiJdLCJpc3MiOiIvbG9naW4iLCJleHAiOjE2MzY4Mjg4MDN9.L8kvYCdjb1Yj90VlpxHl1DXK499MSMj9KWyy-KNA8To',
                 clientToken: clientToken,
                 Accept: 'application/json', },
        })
        .then(res => res.json())
        .then(
            (result) => {
                console.log('Concert card is running');
                console.log(result);
                console.log(result.events);
                setIsLoaded(true);
                setItems(result.events);

            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )

    },[])//Why is this array

    return (

        <>
        { items !=null?
        items.slice(0, limit ? limit : items.length).map(item => (
            <Grid item xs={12} md={3} sm={6} xl={3}>
                <Card className={classes.root}>
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
                            <Typography className={classes.trucatedText} variant="body2" color="textSecondary" component="p">
                                Duration : {item.runtime}
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
         ))
         :{}}
        
            {/* <Grid item xs={12} md={3} sm={6} xl={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="250"
                            image="https://www.bignulled.com/composants/uploads/2020/05/2_777669af68dbccabc30c3b6bcaa81825.png"
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
                            image="https://www.bignulled.com/composants/uploads/2020/05/2_777669af68dbccabc30c3b6bcaa81825.png"
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
                            image="https://www.bignulled.com/composants/uploads/2020/05/2_777669af68dbccabc30c3b6bcaa81825.png"
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