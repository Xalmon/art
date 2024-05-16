import React from 'react'
import style from "./Carousel.module.css"




const Carousel = ({image,title}) => {
  return (
    <div className={style.main}>
      <img className={style.images} src={image} alt="" />
    <span className={style.title}>{title}</span>
    </div>
  )
}

export default Carousel