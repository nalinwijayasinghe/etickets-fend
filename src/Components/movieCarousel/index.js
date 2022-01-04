import React, { useState, useEffect, useContext } from 'react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {ACCESS_TOKEN} from '../constants';
import { useHistory } from "react-router-dom";
import { EventContext } from '../../eventContext';
//import { colors } from '@material-ui/core';

export default function MoviesCarousel() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    //const [limit, setLimit] = useState(5);
    const [movieId, setMovieId] = useContext(EventContext);
    const [clientToken, setclientToken] = useState('93d7759d-6988-4700-be5d-bdb805ec1d71');
    //const [eventId,setEventId]=useState(0);
    const history = useHistory();




    useEffect(()=>{
        fetch("http://ec2-3-6-92-221.ap-south-1.compute.amazonaws.com:8081/v1/events/online?eventTypes=MOVIE",
        {
            method:'GET',headers: {
                Authorization:'Bearer '+ACCESS_TOKEN,
                 clientToken: clientToken,
                 Accept: 'application/json', },
        })
        .then(res => res.json())
        .then(
            (result) => {
                console.log('Movie card is running on carousel');
                //console.log(result);
                //console.log(result.events);
                //console.log(result.genres,"genres");
                setIsLoaded(true);
                setItems(result.events);


            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )

    },[])
    const updateId = (mId) => {
        
        //alert(mId);
       setMovieId(mId);
       //window.location.href='/moviedetails'
       history.push("/moviedetails");
      
    }
    // const images = [
    //     "https://nlk.bmscdn.com/showcaseimage/eventimage/fast--furious-9-23-07-2021-07-57-39-017.jpg",
    //     "https://samfillingham.com/wp-content/uploads/2020/05/2200-1000px-banner-Muna-1310x595.jpg",
    //     "https://cdn.shopify.com/s/files/1/0548/8404/0870/files/In_The_Poster_Mobile_Banner_-_Personalized_Movie_Poster_33709a9e-63ba-43c4-9770-3ab112786ba9_1600x.jpg?v=1617639691",
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQfWF1QCraNzDnaB7E3GfCGh4w8hpV5lZIg&usqp=CAU",
    //     "https://igmedia.blob.core.windows.net/igmedia/telugu/reviews/padmavat-movie-review.jpg"];

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Carousel showDots={true} autoPlay={true} responsive={responsive} autoPlaySpeed={3000}  infinite={true} >

            {items.map((item, idx) => (
                        <div key={'carouselItem'+idx} style={ {  height: 300, marginRight: 5, marginLeft: 5, backgroundImage: `url(${item.thumbnail})`, borderRadius: 5, backgroundPosition:'center center', backgroundSize:'cover', backgroundRepeat:'no-repeat' }} onClick={() => updateId(item.eventId)}>                     
                         <div style={{color:'white'}}><h1>{item.title}</h1></div>
                        </div>
                       
                        

            ))}
        </Carousel>
    );
}

