import React from 'react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function MoviesCarousel() {

    const images = [
        "https://nlk.bmscdn.com/showcaseimage/eventimage/fast--furious-9-23-07-2021-07-57-39-017.jpg",
        "https://samfillingham.com/wp-content/uploads/2020/05/2200-1000px-banner-Muna-1310x595.jpg",
        "https://cdn.shopify.com/s/files/1/0548/8404/0870/files/In_The_Poster_Mobile_Banner_-_Personalized_Movie_Poster_33709a9e-63ba-43c4-9770-3ab112786ba9_1600x.jpg?v=1617639691",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQfWF1QCraNzDnaB7E3GfCGh4w8hpV5lZIg&usqp=CAU",
        "https://igmedia.blob.core.windows.net/igmedia/telugu/reviews/padmavat-movie-review.jpg"];

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
        <Carousel showDots={true} autoPlay={true} responsive={responsive} autoPlaySpeed={3000} infinite={true}>

            {images.map((img, idx) => (
                <div style={{ height: 300, marginRight: 5, marginLeft: 5, backgroundImage: `url(${img})`, borderRadius: 5, backgroundPosition:'center center', backgroundSize:'cover', backgroundRepeat:'no-repeat' }}>

                </div>
            ))}
        </Carousel>
    );
}

