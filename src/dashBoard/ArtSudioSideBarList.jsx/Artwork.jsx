import React from 'react'
import style from "./Style.module.css"
import ArtworkTable from './ArtworkTable';

const Artwork = () => {
  return (
    <div id={style.com} >
         <div className='flex px-[50rem]'>
         <ArtworkTable/>
         </div>
       </div>
  )
}

export default Artwork