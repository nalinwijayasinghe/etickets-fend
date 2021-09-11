import React from 'react';
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

    return (

        <>
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