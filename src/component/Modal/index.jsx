import React from 'react'
import style from "./index.module.css"

const Modal = ({isVisible,onClose,children}) => {
    if(!isVisible) return null;

    const handleClose = (e)=>{
        if(e.target.id === 'wrapper') onClose();
    
      }

  return (
    <div className={style.main} id='wrapper' onClick={handleClose}>
      <div className={style.major}>
        <button className={style.button} onClick={()=> onClose()}>
            EXIT
        </button>
        <div className={style.modal}>
          {children}
        </div>
        </div>  
    </div>
  )
}

export default Modal

