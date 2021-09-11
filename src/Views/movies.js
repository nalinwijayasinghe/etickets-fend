import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '../Components/appBar';



export default function Movies() {
    const classes = useStyles();


    return (
        <>
            <AppBar />
            
            <div>Movies</div>
        </>
    );
}

const useStyles = makeStyles((theme) => ({

    

}));
