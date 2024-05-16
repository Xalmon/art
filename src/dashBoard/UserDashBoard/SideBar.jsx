import React,{ useState }  from 'react'
import { BsJustify, BsBoxArrowInLeft, BsHeartFill, BsGeoAlt, BsCreditCard, BsBell, BsCalendarEvent, BsBagFill } from 'react-icons/bs';
import style from "./SideBar.module.css"
import { useNavigate } from "react-router-dom";
import OrderContent from "../CollectorSidebarList/OrderContent.jsx"
import ProfilePage from '../../pages/CollectorProfile/ProfilePage.jsx';
import Favorites from '../CollectorSidebarList/Favorites.jsx';
import Event from '../CollectorSidebarList/Event.jsx';
import Address from '../CollectorSidebarList/Address.jsx';
import Payment from '../CollectorSidebarList/Payment.jsx';
import Notification from '../CollectorSidebarList/Notification.jsx';
import { useDispatch } from 'react-redux';
import { logOut } from '../../component/state/Authentication/Action.js';
import {useSelector} from "react-redux";






const SideBar = () => {
    const {auth} = useSelector(store=>store)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    

    const [selectedContent, setSelectedContent] = useState(null);

    const handleItemClick = (content) => {
        setSelectedContent(content);
    };

    const handleNavigate = () => {
        dispatch(logOut())
        navigate("/")

    }

  return (
    <div>
         {selectedContent === null && (
                <div >
                    <ProfilePage/>
                </div>
            )}
    <aside id={style.main}>
    <div style={{marginLeft: "30px",marginTop:"20px"}}>
      <BsJustify onClick={()=>navigate('/iconSidebars')} style={{color:"white", fontSize:"2.5rem"}}/>
    </div>
    <div className={style.info}>
        <h1>
            HELLO,
        </h1>
        <p>
        {auth.user?.firstName.toUpperCase()}
        </p>
        <h2>
            Welcome to your dashboard
        </h2>
    </div>
    <ul className={style.sidebar_list}>
        <li className={style.sidebar_list_item}>
            <a href='/'  onClick={(e) => { e.preventDefault(); handleItemClick('orders'); }} className={style.a} >
                < BsBagFill className={style.icon}/>  Orders
            </a>
        </li>
        <li className={style.sidebar_list_item}>
            <a href="/" onClick={(e) => { e.preventDefault(); handleItemClick('favorites'); }} className={style.a}>
                < BsHeartFill className={style.icon}/>  Favorite
            </a>
        </li>
        <li className={style.sidebar_list_item}>
            <a href="address" onClick={(e) => { e.preventDefault(); handleItemClick('address'); }}  className={style.a}>
                < BsGeoAlt className={style.icon}/>  Address
            </a>
        </li>
        <li className={style.sidebar_list_item}>
            <a href="payment" onClick={(e) => { e.preventDefault(); handleItemClick('payment'); }}  className={style.a}>
                < BsCreditCard className={style.icon}/>  Payment
            </a>
        </li>
        <li className={style.sidebar_list_item}>
            <a href="notification" onClick={(e) => { e.preventDefault(); handleItemClick('notification'); }}  className={style.a}>
                < BsBell className={style.icon}/>  Notification
            </a>
        </li>
        <li className={style.sidebar_list_item}>
            <a href="order" className={style.a} onClick={(e) => { e.preventDefault(); handleItemClick('event') }}>
                < BsCalendarEvent className={style.icon} />  Event
            </a>
        </li>

    </ul>
    <div type='click' onClick={handleNavigate} className={style.log}>
       <BsBoxArrowInLeft   className={style.icon}/> Logout
    </div>
    
</aside>
<div className={style.content}>
                {selectedContent === 'orders' && <OrderContent />}
                {selectedContent === 'favorites' && <Favorites/>}
                {selectedContent === 'event' && <Event/>}
                {selectedContent === 'address' && <Address/>}
                {selectedContent === 'payment' && <Payment/>}
                {selectedContent === 'notification' && <Notification/>}
            </div>
</div>
  )
}

export default SideBar