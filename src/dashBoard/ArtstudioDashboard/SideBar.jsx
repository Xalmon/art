import React,{useState,useEffect} from 'react'
import { BsJustify ,BsUpload,BsClockHistory,BsBrush, BsGrid1X2Fill,BsInfoCircle, BsCalendarEvent, BsBagFill,BsBoxArrowInLeft } from 'react-icons/bs';
import style from "./SideBar.module.css"
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logOut } from '../../component/state/Authentication/Action.js';
import {useSelector} from "react-redux";
import Event from '../CollectorSidebarList/Event.jsx';
import DashBoard from '../ArtSudioSideBarList.jsx/DashBoard.jsx';
import { ArtStudioOrders } from '../ArtSudioSideBarList.jsx/ArtStudioOrders.jsx';
import Artwork from '../ArtSudioSideBarList.jsx/Artwork.jsx';
import ArtworkCategory from '../ArtSudioSideBarList.jsx/ArtworkCategory.jsx';
import ArtStudioDetails from '../ArtSudioSideBarList.jsx/ArtStudioDetails.jsx';
import CreateArtStudioForm from '../../pages/CreateArtStudioForm/CreateArtStudioForm.jsx';
import { getArtStudioGenre, getArtstudioById } from '../../component/state/ArtStudio/Action.js';
import { getArtworkByArtStudioId } from '../../component/state/Artwork/Action.js';
import { getArtStudiosOrder } from '../../component/state/ArtStudioOrder/Action.js';




const SideBar = () => {

    const {auth,artStudio} = useSelector(store=>store)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const jwt = localStorage.getItem("jwt")

    const [selectedContent, setSelectedContent] = useState(null);

    const handleItemClick = (content) => {
        setSelectedContent(content);
    };

    const handleNavigate = () => {
        dispatch(logOut())
        navigate("/")

    }

    // useEffect(()=>{
    //     dispatch(getArtStudioGenre({jwt,artStudioId:artStudio.usersArtStudio?.id}));
        
    //     dispatch(getArtStudiosOrder({
    //         jwt,artStudioId:artStudio.usersArtStudio?.id
    //     }))
    // },[])

    console.log("user artstudio: ",artStudio.usersArtStudio)

  return (
    <div>
        {selectedContent === null && (
                <div >
                  {
                  !artStudio.usersArtStudio? <CreateArtStudioForm/>:
                  <DashBoard/>}
                </div>
            )}
    <aside id={style.main}>
    <div style={{marginLeft: "30px",marginTop:"20px"}}>
      <BsJustify onClick={()=>navigate('/iconSidebar')} style={{color:"white", fontSize:"2.5rem"}}/>
    </div>
    <div className={style.info}>
        <h1>
            HELLO,
        </h1>
        <p>
        {auth.user?.firstName.toUpperCase()}
        </p>
        <h2>
            Welcome to your ArtStudio dashboard
        </h2>
    </div>
    <ul className={style.sidebar_list}>
    <li className={style.sidebar_list_item}>
            <a href="dashboard" className={style.a} onClick={(e) => { e.preventDefault(); handleItemClick('dashboard') }}>
                < BsGrid1X2Fill className={style.icon} />  DashBoard
            </a>
        </li>
        <li className={style.sidebar_list_item}>
            <a href="artwork" className={style.a} onClick={(e) => { e.preventDefault(); handleItemClick('artwork') }}>
                < BsUpload className={style.icon} />  Artwork
            </a>
        </li>
        <li className={style.sidebar_list_item}>
            <a href="artstudioOrders" className={style.a} onClick={(e) => { e.preventDefault(); handleItemClick('artstudioOrders') }}>
                < BsBagFill className={style.icon}/>  Orders
            </a>
        </li>
        <li className={style.sidebar_list_item}>
            <a href="artworkCategory" className={style.a}  onClick={(e) => { e.preventDefault(); handleItemClick('artworkCategory') }}>
                <  BsBrush className={style.icon}/>  Artwork Category
            </a>
        </li>
        <li className={style.sidebar_list_item}>
            <a href="" className={style.a}>
                < BsClockHistory className={style.icon}/>  Sales History
            </a>
        </li>
        
        <li className={style.sidebar_list_item}>
            <a href="artStudioDetails" className={style.a} onClick={(e) => { e.preventDefault(); handleItemClick('artStudioDetails') }}>
                <  BsInfoCircle className={style.icon}/>  Details
            </a>
        </li>
        <li className={style.sidebar_list_item}>
            <a href="event" className={style.a} onClick={(e) => { e.preventDefault(); handleItemClick('event') }}>
                < BsCalendarEvent className={style.icon}/>  Event
            </a>
        </li>

    </ul>
    <div onClick={handleNavigate} className={style.log}>
       <BsBoxArrowInLeft  className={style.icon}/> Logout
    </div>
    
</aside>
<div className={style.content}>
                {selectedContent === 'event' && <Event/>}
                {selectedContent === 'dashboard' && <DashBoard/>}
                {selectedContent === 'artstudioOrders' && <ArtStudioOrders/>}
                {selectedContent === 'artwork' && <Artwork/>}
                {selectedContent === 'artworkCategory' && <ArtworkCategory/>}
                {selectedContent === 'artStudioDetails' && <ArtStudioDetails/>}
            </div>
</div>
  )
}

export default SideBar