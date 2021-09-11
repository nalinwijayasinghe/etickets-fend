import React from 'react';
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

export default function BookingPage() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <AppBar />

            <div className={classes.titleBackground}>
                <Container className={classes.movieDetailsContainer}>
                    <div className={classes.movieNameSeatPlan}>The Easy Reach</div>
                    <div className={classes.tagRow}>
                        <div className={classes.movieTags}>Romantic</div>
                        <div className={classes.movieTags}>Comedy</div>
                    </div>
                </Container>
            </div>
            <div className={classes.datesBackground}>
                <Container className={classes.dateDetailsContainer}>
                    <Button>
                        <div className={classes.singleDateActive}>
                            <div className={classes.dateText}>06</div>
                            <div className={classes.dateText}>mon</div>
                        </div>
                    </Button>
                    <Button>
                        <div className={classes.singleDate}>
                            <div className={classes.dateText}>07</div>
                            <div className={classes.dateText}>tue</div>
                        </div>
                    </Button>
                </Container>
            </div>
            <Container>
                <div className={classes.dateTextLine}>Monday, September 06, 2021</div>
                <Grid className={classes.theareSingleGrid} >

                    <Grid item sm={4}>
                        <div className={classes.theatreDetails}>
                            <div className={classes.theatreName}>Sri Venkata Gangaratnam Theatre</div>
                            <Button
                                variant="text"
                                className={classes.infoBtn}
                                endIcon={<InfoIcon/>}
                            >
                                Info
                            </Button>
                        </div>
                    </Grid>
                    <Grid item sm={8}>
                        <div className={classes.timeSlots}>
                            <Button className={classes.timeBtn} onClick={handleOpen} variant="outlined">11.05 am</Button>
                            <Button className={classes.timeBtn} variant="outlined">11.05 am</Button>
                            <Button className={classes.timeBtn} variant="outlined">11.05 am</Button>
                        </div>
                    </Grid>

                </Grid>
                <Grid className={classes.theareSingleGrid}>

                    <Grid item sm={4}>
                        <div className={classes.theatreDetails}>
                            <div className={classes.theatreName}>Sri Venkata Gangaratnam Theatre</div>
                            <Button
                                variant="text"
                                className={classes.infoBtn}
                                endIcon={<InfoIcon/>}
                            >
                                Info
                            </Button>
                        </div>
                    </Grid>
                    <Grid item sm={8}>
                        <div className={classes.timeSlots}>
                            <Button className={classes.timeBtn} variant="outlined">11.05 am</Button>
                            <Button className={classes.timeBtn} variant="outlined">11.05 am</Button>
                            <Button className={classes.timeBtn} variant="outlined">11.05 am</Button>
                        </div>
                    </Grid>

                </Grid>
            </Container>
            {/* Modal Start */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Select number of seats</h2>
                        <Link className={classes.Links} to="/seatmap"><Button>01</Button></Link>
                    </div>
                </Fade>
            </Modal>
            {/* Modal End */}
        </>
    );
}

const useStyles = makeStyles((theme) => ({
    titleBackground: {
        backgroundColor: '#3b3b3b',
        padding: 24
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
        display: 'flex'
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
        fontSize: 12,
        margin: '15px 0'
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
        borderRadius:5,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    Links: {
        textDecoration: 'none',

    },

}));
