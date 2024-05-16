import React from 'react'
import style from "./Style.module.css"
import ArtworkCategoryTable from './ArtworkCategoryTable'

const ArtworkCategory = () => {
  return (
    <div id={style.com}>
        <div className='px-[60rem] relative top-4'>
        <ArtworkCategoryTable/>
        </div>
        
        </div>
  )
}

export default ArtworkCategory