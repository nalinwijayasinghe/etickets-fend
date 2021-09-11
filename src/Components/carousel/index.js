import React, { useState } from 'react';
import Slider from "react-slick";
import { makeStyles } from '@material-ui/core/styles';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import background from '../../images/MainBanner.jpg';
import './carousel.css';


const images = [
    "https://picsum.photos/800/300/?random",
    "https://picsum.photos/800/301/?random",
    "https://picsum.photos/800/302/?random",
    "https://picsum.photos/800/303/?random",
    "https://picsum.photos/800/304/?random"];




export default function CarouselPae() {
    const classes = useStyles();

    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft />
            </div>
        );
    };

    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        infinite: true,
        autoplay: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: 0,
        nextArrow:false,
        prevArrow:false,
        beforeChange: (current, next) => setImageIndex(next),
    };


    return (
        
                <div className="slider">
                    <Slider {...settings}>
                        {images.map((img, idx) => (
                            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                                <img src={img} alt={img} />
                            </div>
                        ))}
                    </Slider>
                </div>
          
    );
}

const useStyles = makeStyles((theme) => ({

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

}));
