import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import background from "../images/MainBanner.jpg";
import { Container } from '@material-ui/core';

export default function Home() {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <div className={classes.MainBanner}>
                <div className={classes.OverlayDiv}>
                    <Container className={classes.bannerContainer}>
                        <div className={classes.mainHeader}>Watch <span style={{color:'#e4d804'}}>Movies</span></div>
                    </Container>
                </div>
            </div>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    media: {
        height: 300,

        width: '100%' // 16:9
    },
    subHeader:{
        marginTop:20,
        marginBottom:20
    },
MainBanner:{
    backgroundImage: `url(${background})`,
    width:'100%',
    minHeight:350,
    position:'relative',
    backgroundPosition:'center',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
},
OverlayDiv:{
    backgroundColor:'rgba(0, 0, 0, 0.8)',
    position:'absolute',
    width:'100%',
    height:'100%',
    zIndex:10,
    display:'flex'
},
bannerContainer:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
},
mainHeader:{
    fontSize:'6vw',
    color:'#fff',
    fontWeight:'bold'
}
}));