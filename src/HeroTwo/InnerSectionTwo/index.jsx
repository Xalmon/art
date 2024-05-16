import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import {TopArtworks} from "./topArtworks"
import Carousel from '../Carousel/Carousel';
import style from "./index.module.css"


const InnerSectionTwo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    SlideToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    arrows:false
  };

  return (
    <div className={style.main} style={{height:"530px"}}>
      <div style={{position:"relative",top:"30px"}}>
      <Slider {...settings} >
       {TopArtworks.map((item)=>(<Carousel 
       image={item.image} title={item.title}/>))}
      </Slider>
      </div>
    </div>
  )
}

export default InnerSectionTwo