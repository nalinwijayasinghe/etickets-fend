import React, { useState, useEffect, useContext } from 'react';
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
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import SeatPicker from "react-seat-picker";
import { ACCESS_TOKEN } from '../Components/constants';

import "./seat_style.css";


export default function SeatMap() {
    const classes = useStyles();
    let seat = {
        id: '',
        number: ''
    }
    const [selectedColor, setSelectedColor] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [selectedSeat, setSelectedSeat] = useState([]);
    const [adultTicket, setAdultTicket] = useState(0);
    const [childTicket, setChildTicket] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [rows, setRows] = useState([]);
    const [error, setError] = useState(null);
    const [numberOfSeatsValue, setnumberOfSeatsValue] = useState(1);
    const [numberOfSeats, setnumberOfSeats] = useState([1, 2, 3, 4, 5, 6]);

    const [clientToken, setclientToken] = useState('93d7759d-6988-4700-be5d-bdb805ec1d71');
    // const [childTicket,setChildTicket] =useState([0]);
    const options = [
        'one', 'two', 'three'
    ];
    const defaultOption = options[0];

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const selectNumberOfSeats = (numberOfSeat) => {
        setnumberOfSeatsValue(numberOfSeat);
        setOpen(false);
    }

    useEffect(() => {
        console.log("ddddddddddddddddddddddddddddddddddddddddd")
        setChildTicket(8);
        fetch("http://ec2-3-6-92-221.ap-south-1.compute.amazonaws.com:8081/v1/seats?eventDate=2021-11-16&eventId=20&experienceId=1&showtimeId=19&venueId=2",
            {
                method: 'GET', headers: {
                    Authorization: 'Bearer ' + ACCESS_TOKEN,
                    clientToken: clientToken,
                    Accept: 'application/json',
                },
            })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('Concert card is running....');
                    // console.log(result);
                    // console.log(result.ticketData);
                    let data =result.ticketData;
                    console.log(data);
                    setRows(data);
                    console.log(",,,,,,,,,,,,,dddddddcccc,,,,,,,,,,,,,,,,,,,"+rows.length);
                    //  console.log(rows[0].seats[0][0].id)
                    //let x=rows[0].seats;
                    // for (let row in rows) {
                    //     let type = result.ticketData[row];
                    //     console.log("......................ssssssssssssssssssssssssss")
                    //     let y=type.seats;
                    //     console.log("............yyyyyyyyyyyyyyyyyyyyyyyyyyyssssssssssssss"+y[0][0].id)
                    //     for (let s in y){
                    //         let se = y[s];
                    //         for (let j in se){
                    //             if(se[j]!=null){
                    //                 console.log("seat id ::-====================::::: "+ se[j].id);
                    //             }
                                
                    //         }
                            
                    //     }
                    // }
                    // console.log(">>>>>>>>>>>>>>>>>>>>>>...... c.c.>>>"+x[0][0].id)
                    // rows.map(function(seatType){
                    //     (seatType.seats).map(function(seatRow){
                    //         seatRow.map(function(eachSeat){
                    //             console.log(eachSeat.id);
                    //         })
                    //     })
                    // });
                    
                    console.log(",,,,,,xxx,,,,,,,,ffffffff,,,,,,,,,,,,,,,,,,,,,,");
                    setChildTicket(7);
                    setIsLoaded(true);
                    console.log(isLoaded);
                    // console.log(childTicket);

                },
                (error) => {
                    console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
                    setIsLoaded(true);
                    setError(error);
                }
            )

    }, []);

    // function doThis() {
    //     setSelectedColor(!selectedColor);}

    const selectSeat = (id) => {
        // console.log(selectedSeat)
         //setSelectedSeat(selectedSeat)
         //console.log("user select a seat " + selectedSeat);
        console.log('idddddddddddddddddddddddd' + id)
        // console.log(selectedSeat)
        selectedSeat.push(id);
        numberOfSeatsValue >= selectedSeat.length ? setSelectedSeat([...selectedSeat]) : setSelectedSeat([]);



        //setSelectedSeat(selectedSeat)
        console.log("user select a seat " + selectedSeat);
        //  setAdultTicket( selectedSeat.length)

    }
    // const onAdultChange = (symbol)=>{
    //     console.log("on adult change")
    //     if(symbol==="+"){
    //         setAdultTicket( adultTicket+1)
    //     }else{
    //         setAdultTicket( adultTicket-1)
    //     }

    // }

    // const onChildChange=(symbol)=>{
    //     console.log("on adult change")
    //     if(symbol==="+"){
    //         setChildTicket( childTicket+1)
    //     }else{
    //         setChildTicket( childTicket-1)
    //     }
    // }

    // const addSeatCallback = ({ row, number, id }, addCb) => {
    //     // this.setState(
    //     //   {
    //     //     loading: true
    //     //   },
    //     //   async () => {
    //     // await new Promise(resolve => setTimeout(resolve, 1500));
    //     console.log(`Added seat ${number}, row ${row}, id ${id}`);
    //     const newTooltip = `tooltip for id-${id} added by callback`;
    //     // const newSelectedSeat =[
    //     //     ...selectSeat,
    //     //     {
    //     //         seatTypeId:"1",
    //     //         number:id

    //     //     }
    //     // ]
    //     selectedSeat.push(id);
    //     //setSelectedSeat(selectedSeat)
    //     console.log("user select a seat " + selectedSeat);
    //     //setAdultTicket( selectedSeat.length)
    //     addCb(row, number, id, newTooltip);
    //     console.log("user select a seat " + selectedSeat);
    //     // this.setState({ loading: false });
    //     //   }
    //     // );
    // };

    // const removeSeatCallback = ({ row, number, id }, removeCb) => {
    //     // this.setState(
    //     //   {
    //     //     loading: true
    //     //   },
    //     //   async () => {
    //     // await new Promise(resolve => setTimeout(resolve, 1500));
    //     console.log(`Removed seat ${number}, row ${row}, id ${id}`);
    //     // A value of null will reset the tooltip to the original while '' will hide the tooltip
    //     const newTooltip = ["A", "B", "C"].includes(row) ? null : "";
    //     removeCb(row, number, newTooltip);
    //     // this.setState({ loading: false });
    //     //   }
    //     // );
    // };



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
                    <Button className={classes.seatNumberBtn} onClick={handleOpen}>Select number of seats</Button>
                </Container>
            </div>
            <Container>
                {isLoaded ? (
                    <div>



                        <div id="seatplan" className={classes.seatMap}>
                            {rows.map((row) => (
                                //    <div>{row.name}</div>
                                (row.seats).map((seatRows) => (
                                    <div key={'seatRow'+seatRows} className={classes.seatRow}>
                                        {seatRows.map((seatRow) => (
                                            (seatRow != null) ?
                                                <div key={'seatRow'+seatRow} className={classes.singleSeat}>
                                                    <div className={classes.seatData} onClick={() => selectSeat(seatRow.number)} style={{ backgroundColor: selectedColor ? 'green' : '' }}>{seatRow.number}</div>
                                                </div> : <div></div>

                                        ))}
                                    </div>
                                ))
                            )
                            )
                            }
                        </div>
                    </div>

                ) : (
                    <p>eeeeee</p>
                )}
                <div className={classes.dateTextLine}>Monday, September 06, 2021:X{[...selectedSeat]}</div>
                <div>{numberOfSeatsValue}</div>
                <div className={classes.seatLabelAndvalue}>Selected Seats :{selectedSeat.map((seat, i) =>
                    <div className={classes.selectedSeatItem}>{seat}</div>)}</div>
                {selectedSeat.length > 0 ?
                    (
                        <div>
                            <div><span>Adult:{adultTicket}</span>:

                                <span>{500 * selectedSeat.length}</span></div>
                            <div><span>Child</span>:
                                <span>
                                    <div className={classes.btnAndText}>
                                        {/* <div className={classes.incDecBtn} onClick={onChildChange("+")}>-</div>
                                    <div className={classes.bookingDetailRowRight}>{childTicket}</div>
                                    <div className={classes.incDecBtn} onClick={onChildChange("-")}>+</div> */}
                                    </div>
                                    {/* <Dropdown options={Array.from(Array(selectedSeat.length).keys())} onChange={onAdultChange} value={selectedSeat[0]} placeholder="Select an option" />; */}
                                </span>
                                <span>{500 * selectedSeat.length}</span></div>
                        </div>
                    ) :
                    (<div><span></span></div>)
                }
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
                        {numberOfSeats.map((seatVal) => (
                            <Button onClick={() => selectNumberOfSeats(seatVal)}>{seatVal}</Button>
                        ))}

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
        boxShadow: "1px 3px 11px #ddd",
        display: 'flex',
        flexDirection: 'row'
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
        fontSize: 20,
        lineHeight: 1
    },
    btnAndText: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    bookingDetailRowRight: {
        marginLeft: 10,
        marginRight: 10
    },
    Links: {
        textDecoration: 'none',

    },
    seatNumberBtn: {
        marginLeft: 'auto'
    },
    selectedSeatItem:{
        color:'#0d9dd2',
        fontSize:16,
        fontWeight:'bold',
        margin:'0 10px'
    },
    seatLabelAndvalue:{
        display:'flex'
    }

}));
