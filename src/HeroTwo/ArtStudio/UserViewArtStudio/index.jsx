import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from "./index.module.css";



const Modal = ({images}) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    SlideToScroll: 1,
    dots: true,
    autoplay:true,
    autoplaySpeed:2000,
    arrows:false
  };

  return (
    <div className={style.mains} id='wrapper'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img  src={image} alt="" className={style.image} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Modal;
