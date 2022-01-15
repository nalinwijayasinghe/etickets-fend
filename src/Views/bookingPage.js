import React from 'react';
import { useContext, useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '../Components/appBar';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InfoIcon from '@material-ui/icons/Info';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { EventContext } from '../eventContext';
import { ACCESS_TOKEN, BASE_URL } from '../Components/constants';

export default function BookingPage() {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState({});
    const [venues, setVenues] = useState([]);
    const [selectedDate, setselectedDate] = useContext(EventContext);
    const [movieGenrs, setMovieGenrs] = useState([]);
    const [movieVenues, setMovieVenues] = useState([]);
    const [limit, setLimit] = useState(5);
    const [clientToken, setclientToken] = useState('93d7759d-6988-4700-be5d-bdb805ec1d71');
    const [eventId, setEventId] = useState(0);
    const [venueShowtime, setVenueShowtime] = useState(new Map());
    const [venueDetails, setvenueDetails] = useState({
        vName: "",
        vAddress: "",
        vLocation: ""
    })
    const classes = useStyles();
    const [openVenue, setOpenVenue] = React.useState(false);
    const [movieId, setMovieId] = useContext(EventContext);
    const [slectedTime, setSlectedTime] = useContext(EventContext);


    useEffect(async () => {
        try {
            let res = await fetch(BASE_URL + `/events/${movieId}/showtimes`, {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ' + ACCESS_TOKEN,
                    clientToken: clientToken,
                    Accept: 'application/json',
                },
            });
            let result = await res.json();
            console.log(result)
            setselectedDate(result.dates[0].date);
            let tmpVenueShowTime = new Map();
            result.dates.forEach(
                function (vst) {
                    tmpVenueShowTime.set(vst.date, vst.venues);
                }
            );
            setVenueShowtime(tmpVenueShowTime);
            setIsLoading(false);
        } catch (err) {
            console.log(err);
            setError(err);
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('movieId', movieId)
        setVenues(venueShowtime.get(selectedDate));
        setselectedDate(selectedDate);
    }, []);


    const handleOpenVenue = (venueInfo) => {
        setOpenVenue(true);
        setvenueDetails({
            vName: venueInfo.name,
            vAddress: "",
            vLocation: venueInfo.location
        });
    };

    const handleCloseVenue = () => {
        setOpenVenue(false);
    };

    const loadVenueShowTimes = (date) => {
        setselectedDate(date);

    }
    const getShowTime = (selectedShowTime) => {
        setSlectedTime(selectedShowTime);
        
    }

    return (
        <>
            <AppBar />
            {(!isLoading) ?
                (
                    <div>
                        {(error != null) ?
                            <p>Sorry !!!! Could not load the show times for</p> :
                            (
                                <>

                                    <div className={classes.titleBackground}>
                                        <Container className={classes.movieDetailsContainer}>

                                            <div className={classes.movieNameSeatPlan}>{items.title}</div>
                                            {movieGenrs.map(item =>
                                            (
                                                <div className={classes.tagRow}>
                                                    <div className={classes.movieTags}>{item}</div>
                                                </div>
                                            ))
                                            }
                                        </Container>

                                    </div>
                                    <div className={classes.datesBackground}>
                                        <Container className={classes.dateDetailsContainer}>
                                            {

                                                [...venueShowtime.keys()].map((x, i) =>

                                                    <Button onClick={() => loadVenueShowTimes(x)}>
                                                        <div className={selectedDate === x ? classes.singleDateActive : classes.selectedDateInactive}>
                                                            <div className={classes.dateText}>{x}</div>
                                                        </div>
                                                    </Button>
                                                )
                                            }
                                        </Container>
                                    </div>
                                    <Container>
                                        <div className={classes.dateTextLine}>{selectedDate}</div>
                                        {(venueShowtime.get(selectedDate)).map(item =>
                                        (
                                            <Grid className={classes.theareSingleGrid} >
                                                <Grid item sm={4}>
                                                    <div className={classes.theatreDetails}>
                                                        <div className={classes.theatreName}>{item.name}</div>
                                                        <Button
                                                            variant="text"
                                                            className={classes.infoBtn}
                                                            endIcon={<InfoIcon />}
                                                            onClick={() => { handleOpenVenue(item) }}
                                                        >
                                                            Info
                                                        </Button>
                                                    </div>
                                                </Grid>
                                                <Grid item sm={8}>
                                                    <div className={classes.timeSlots}>
                                                        {
                                                            item.showtimes.map((object, i) =>
                                                                <Link className={classes.Links} to="/seatmap"><Button onClick={() => getShowTime(object.startTime)} className={classes.timeBtn} variant="outlined">{object.startTime}</Button></Link>)
                                                        }
                                                    </div>
                                                </Grid>

                                            </Grid>
                                        ))
                                        }
                                    </Container>
                                    {/* Venue Modal Start */}
                                    <Modal
                                        aria-labelledby="transition-modal-title"
                                        aria-describedby="transition-modal-description"
                                        className={classes.modal}
                                        open={openVenue}
                                        onClose={handleCloseVenue}
                                        closeAfterTransition
                                        BackdropComponent={Backdrop}
                                        BackdropProps={{
                                            timeout: 500,
                                        }}
                                    >
                                        <Fade in={openVenue}>
                                            <div className={classes.paperVenue}>
                                                <h4 className={classes.venueHeading} id="transition-modal-title">{venueDetails.vName}</h4>
                                                <div>{venueDetails.vLocation}</div>
                                            </div>
                                        </Fade>
                                    </Modal>
                                    {/* Venue Modal End */}
                                </>
                            )}

                    </div>
                ) : (<div className={classes.loadingDiv}><p>Loading...</p></div>)
            }
        </>

    );
}

const useStyles = makeStyles((theme) => ({
    titleBackground: {
        backgroundColor: '#3b3b3b',
        padding: 24
    },
    loadingDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    movieDetailsContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    movieNameSeatPlan: {

        fontSize: '25px',
        color: '#fff'
    },
    tagRow: {
        display: 'flex',
        flexDirection: 'row'
    },
    movieTags: {
        borderRadius: 15,
        border: '1px solid #7b7878',
        color: '#7b7878',
        padding: '0px 10px',
        fontSize: 12,
        lineHeight: 2,
        width: 'fit-content',
        margin: '5px 5px 0 5px'
    },
    datesBackground: {
        boxShadow: "1px 3px 11px #ddd"
    },
    dateDetailsContainer: {
        display: 'flex'

    },
    singleDate: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#b3b3b3',
        padding: '5px 10px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        minWidth: '35px',
    },
    singleDateActive: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#d95305',
        padding: '5px 10px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        minWidth: '35px',
    },
    selectedDateInactive: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#898989',
        padding: '5px 10px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        minWidth: '35px',
    },
    dateText: {
        fontWeight: 'bold',
        color: '#fff'
    },

    theareSingleGrid: {
        margin: '10px 0',
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        padding: '10px 15px',
    },
    timeBtn: {
        margin: '5px 8px',
        borderColor: '#48ff84',
        color: '#1b6734'
    },
    theatreName: {
        fontWeight: 'bold',
        color: '#3b3b3b'
    },
    dateTextLine: {
        fontSize: 16,
        margin: '15px 0',
        fontWeight: 'bold',
        color: '#0d9dd2'
    },
    infoBtn: {
        fontSize: '12px',
        color: '#d95305'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #7b7878',
        borderRadius: 5,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    paperVenue: {
        backgroundColor: theme.palette.background.paper,
        //border: '1px solid #7b7878',
        borderRadius: 5,
        boxShadow: theme.shadows[5],
        minWidth: 500
        //padding: theme.spacing(2, 4, 3),
    },
    Links: {
        textDecoration: 'none',

    },
    venueHeading: {
        margin: 0,
        backgroundColor: '#d95305',
        color: '#fff',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        padding: 15
    }

}));