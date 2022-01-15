import React, { useState, createContext } from "react";

export const EventContext = createContext();

export const EventProvider = props => {
    const [movieId, setMovieId] = useState(() => {
        const moid = localStorage.getItem('movieId');
        return moid ? moid : '';

    });
    const [slectedTime, setSlectedTime] = useState(() => {
        const sltime = localStorage.getItem('selectedTime');
        return sltime ? sltime : '';

    });
    


    return (
        <EventContext.Provider value={[movieId, setMovieId], [slectedTime, setSlectedTime]}>
            {props.children}
        </EventContext.Provider>);
}