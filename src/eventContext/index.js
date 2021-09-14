import React, {useState, createContext} from "react";

export const EventContext = createContext();

export const EventProvider = props =>{
    const [movieId, setMovieId] = useState(()=>{
        const moid = localStorage.getItem('movieId');
        return moid ? moid : '';

    });


    return(
    <EventContext.Provider value={[movieId, setMovieId]}>
        {props.children}
        </EventContext.Provider>);
}