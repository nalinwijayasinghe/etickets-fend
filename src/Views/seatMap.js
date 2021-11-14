import React, { useState } from 'react';
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
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


export default function SeatMap() {
    const classes = useStyles();
    const [selectedColor, setSelectedColor] = useState(false);
    const [selectedSeat,setSelectedSeat] = useState([]);
    const [adultTicket,setAdultTicket] =useState(0);
    const [childTicket,setChildTicket] = useState(0);
    // const [childTicket,setChildTicket] =useState([0]);
    const options = [
        'one', 'two', 'three'
      ];
    const defaultOption = options[0];

    function doThis() {
        setSelectedColor(!selectedColor);}

    const selectSeat = (id) => {
        console.log(id)
        console.log(selectedSeat)
        selectedSeat.push(id);
        setSelectedSeat(selectedSeat)
        console.log("user select a seat " + selectedSeat    );
        setAdultTicket( selectedSeat.length)

    }
    const onAdultChange = (symbol)=>{
        console.log("on adult change")
        if(symbol==="+"){
            setAdultTicket( adultTicket+1)
        }else{
            setAdultTicket( adultTicket-1)
        }
        
    }

    const onChildChange=(symbol)=>{
        console.log("on adult change")
        if(symbol==="+"){
            setChildTicket( childTicket+1)
        }else{
            setChildTicket( childTicket-1)
        }
    }

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
                            <div className={classes.dateText}>11.00 am</div>

                        </div>
                    </Button>
                    <Button>
                        <div className={classes.singleDate}>
                            <div className={classes.dateText}>13.00 pm</div>

                        </div>
                    </Button>

                </Container>
            </div>
            <Container>
                <div className={classes.dateTextLine}>Monday, September 06, 2021:X{[...selectedSeat]}</div>
                <div>Selected Seats :{selectedSeat.map((seat, i) =>
                                                <span>{seat}</span>)}</div>
                {selectedSeat.length >0?
                (
                <div>
                    <div><span>Adult:{adultTicket}</span>:
                    <span>
                    <div className={classes.btnAndText}>
                                    <div className={classes.incDecBtn} onClick={onAdultChange("+")}>-</div>
                                    <div className={classes.bookingDetailRowRight}>{adultTicket}</div>
                                    <div className={classes.incDecBtn} onClick={onAdultChange("-")}>+</div>
                                </div>
                        {/* <Dropdown options={Array.from(Array(selectedSeat.length).keys())} onChange={onAdultChange} value={Array.from(Array(selectedSeat.length).keys())[1]} placeholder="Select an option" />; */}
                    </span>:
                    <span>{500* selectedSeat.length}</span></div>
                    <div><span>Child</span>:
                    <span>
                    <div className={classes.btnAndText}>
                                    <div className={classes.incDecBtn} onClick={onChildChange("+")}>-</div>
                                    <div className={classes.bookingDetailRowRight}>{childTicket}</div>
                                    <div className={classes.incDecBtn} onClick={onChildChange("-")}>+</div>
                                </div>
                        {/* <Dropdown options={Array.from(Array(selectedSeat.length).keys())} onChange={onAdultChange} value={selectedSeat[0]} placeholder="Select an option" />; */}
                    </span>
                    <span>{500* selectedSeat.length}</span></div>
                </div>
                ):
                (<div><span></span></div>)
            }

                                                
                <div className={classes.seatMap}>
                    {/* Seat Row */}
                    <div className={classes.seatRow}>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData} onClick={() => selectSeat("C11")} >C11</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData} onClick={() => selectSeat("C12")}>C12</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData} onClick={() => selectSeat("C13")}>C13</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData} onClick={() => selectSeat("C14")}>C14</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData} style={{ display: 'none' }}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}  
                             style={{backgroundColor:selectedColor?'green':''}}>A1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>



                    </div>
                    {/* Seat Row */}
                    {/* Seat Row */}
                    <div className={classes.seatRow}>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData} style={{ display: 'none' }}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData} onClick={doThis} style={{backgroundColor:selectedColor?'green':''}}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>



                    </div>
                    {/* Seat Row */}
                    {/* Seat Row */}
                    <div className={classes.seatRow}>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData} style={{ display: 'none' }}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData} onClick={doThis} style={{backgroundColor:selectedColor?'green':''}}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>
                        <div className={classes.singleSeat}>
                            <div className={classes.seatData}>C1</div>
                        </div>



                    </div>
                    {/* Seat Row */}


                </div>

            </Container>

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
        borderRadius: 5,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    seatMap: {
        maxWidth: 1140,
        overflowX: 'auto',
        margin: '0 auto'
    },
    seatRow: {
        display: 'flex',
        margin: '10px',
        justifyContent: 'center'
    },
    singleSeat: {
        width: 30,
        //height:45,
        margin: '0px 5px'
    },
    seatData: {
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid green',

        fontSize: 13,
        color: '#505050',
        "&:hover": {
            backgroundColor: 'green',
            cursor: 'pointer',
            color: '#fff'
        },


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
