import React from 'react'
import image from "../assets/images/sculpture.jpg"
import style from "./index.module.css"
import image1 from "../assets/images/display.jpg"
import image2 from "../assets/images/performance.jpg"
import image3 from "../assets/images/arya.jpeg"
import image4 from "../assets/images/hands.jpeg"
import image5 from "../assets/images/mother.jpg"
import image6 from "../assets/images/pen.jpeg"
import image7 from "../assets/images/multiple.jpg"
import image8 from "../assets/images/saved.jpg"
import image9 from "../assets/images/work.jpeg"
import image0 from "../assets/images/yemisi.jpeg"

const LandingPage = () => {
  return (
    <div > 
      <div  className={style.img}>
      <div className={style.position}>
      <img className={style.image} src={image} alt="image" />
      </div>
      <div className={style.info}>
      <div className={style.logo}>
              
                <p>Art<span>Xpress</span></p>
               </div>
      <div>
        <h1 className={style.one}>
         WELCOME TO ONE OF THE BEST <span style={{color:"black",marginLeft:"340px"}}>ONLINE ARTSTUDIO</span>
        </h1>
      </div>
      <div>
        <h1 className={style.text}>
        Unlock a world of creativity and inspiration at ArtXpress, your premier destination for 
        purchasing breathtaking artistic drawings online. Dive into a curated collection of 
        handcrafted masterpieces crafted by talented artists from around Nigeria. Whether 
        you're an art connoisseur seeking the perfect addition to your collection or a newcomer  eager to explore the beauty of visual arts, ArtXpress has something for everyone.
        </h1>
      </div>
      <div>
        <button className={style.button}>EXPLORE</button>
      </div>
      <div>
        <button className={style.button} style={{background: "black", marginLeft: "70%"}}>Login</button>
      </div>
      </div>
      </div>
      <div className={style.second}>
        <div className={style.pic}>
        <img className={style.pics} src={image1} alt="image" />
        <img className={style.pics} src={image2} alt="image" />
        <img className={style.pics} src={image3} alt="image" />
        <img className={style.pics} src={image4} alt="image" />
        <img className={style.pics} src={image5} alt="image" />
        <img className={style.pics} src={image6} alt="image" />
        <img className={style.pics} src={image7} alt="image" />
        <img className={style.pics} src={image8} alt="image" />
        <img className={style.pics} src={image9} alt="image" />
        <img className={style.pics} src={image0} alt="image" />
        </div>

      </div>
      </div>
  )
}

export default LandingPage