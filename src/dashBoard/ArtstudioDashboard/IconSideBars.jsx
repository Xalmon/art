import React,{useState} from 'react'
import { BsJustify ,BsUpload,BsClockHistory, BsBrush, BsGrid1X2Fill,BsInfoCircle,  BsBoxArrowInLeft,  BsCalendarEvent, BsBagFill } from 'react-icons/bs';
import style from "./SideBar.module.css"
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logOut } from '../../component/state/Authentication/Action.js';
import Event from '../CollectorSidebarList/Event.jsx';
import DashBoard from '../ArtSudioSideBarList.jsx/DashBoard.jsx';




const IconSideBar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleNavigate = () => {
        dispatch(logOut())
        navigate("/")

    }

    const [selectedContent, setSelectedContent] = useState(null);

    const handleItemClick = (content) => {
        setSelectedContent(content);
    };


    return (
        <div>
            {selectedContent === null && (
                <div >
                    <DashBoard/>
                </div>
            )}
        <aside id={style.mainTwo}>
        <div style={{marginLeft: "40px",marginTop:"20px"}}>
          <BsJustify onClick={()=>navigate('/artStudioDashboard')} style={{color:"white", fontSize:"2.5rem"}}/>
        </div>
        <ul className={style.sidebar_list}>
        <li className={style.sidebar_list_item}>
                <a href="" className={style.a}>
                    < BsGrid1X2Fill className={style.icons}/>  
                </a>
            </li>
            <li className={style.sidebar_list_item}>
                <a href="" className={style.a}>
                    < BsUpload className={style.icons}/>  
                </a>
            </li>
            <li className={style.sidebar_list_item}>
                <a href="" className={style.a}>
                    < BsBagFill className={style.icons}/>  
                </a>
            </li>
            <li className={style.sidebar_list_item}>
                <a href="" className={style.a}>
                    <  BsBrush className={style.icons}/>  
                </a>
            </li>
            <li className={style.sidebar_list_item}>
                <a href="" className={style.a}>
                    < BsClockHistory className={style.icons}/>  
                </a>
            </li>
            
            <li className={style.sidebar_list_item}>
                <a href="" className={style.a}>
                    <  BsInfoCircle className={style.icons}/> 
                </a>
            </li>
            <li className={style.sidebar_list_item}>
                <a href="event" className={style.a} onClick={(e) => { e.preventDefault(); handleItemClick('event') }}>
                    < BsCalendarEvent className={style.icons}  />  
                </a>
            </li>
    
        </ul>
        <div onClick={handleNavigate} className={style.log}>
           <BsBoxArrowInLeft  className={style.icons}/> 
        </div>
    </aside>
    <div className={style.content}>
                {selectedContent === 'event' && <Event/>}
            </div>
    </div>
    
  )
}

export default IconSideBar