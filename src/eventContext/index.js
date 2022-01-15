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
    const [slectedDateShow, setSlectedDateShow] = useState(() => {
        const sldate = localStorage.getItem('slectedDateShow');
        return sldate ? sldate : '';

    });
    


    return (
        <EventContext.Provider value={[movieId, setMovieId], [slectedTime, setSlectedTime], [slectedDateShow, setSlectedDateShow]}>
            {props.children}
        </EventContext.Provider>);
}