import React,{ useState } from 'react'
import { BsJustify , BsBoxArrowInLeft, BsHeartFill, BsGeoAlt, BsCreditCard, BsBell, BsCalendarEvent, BsBagFill } from 'react-icons/bs';
import style from "./SideBar.module.css"
import { useNavigate } from "react-router-dom";
import OrderContent from "../CollectorSidebarList/OrderContent.jsx"
import ProfilePage from '../../pages/CollectorProfile/ProfilePage.jsx';
import Favorites from '../CollectorSidebarList/Favorites.jsx';
import Event from '../CollectorSidebarList/Event.jsx';
import { useDispatch } from 'react-redux';
import { logOut } from '../../component/state/Authentication/Action.js';
import Address from '../CollectorSidebarList/Address.jsx';
import Payment from '../CollectorSidebarList/Payment.jsx';
import Notification from '../CollectorSidebarList/Notification.jsx';




const IconSideBar = () => {
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
        <aside id={style.mainTwo}>
        <div style={{marginLeft: "30px",marginTop:"20px"}}>
          <BsJustify onClick={()=>navigate('/dashboard')} style={{color:"white", fontSize:"2.5rem"}}/>
        </div>
        <ul className={style.sidebar_list}>
            <li className={style.sidebar_list_item}>
                <a href="orders" className={style.a}  onClick={(e) => { e.preventDefault(); handleItemClick('orders'); }}>
                    < BsBagFill className={style.icons}/> 
                </a>
            </li>
            <li className={style.sidebar_list_item}>
                <a href="favorites" className={style.a}>
                    < BsHeartFill className={style.icons} onClick={(e) => { e.preventDefault(); handleItemClick('favorites'); }}/> 
                </a>
            </li>
            <li className={style.sidebar_list_item}>
                <a href="address" className={style.a}  >
                    < BsGeoAlt className={style.icons} onClick={(e) => { e.preventDefault(); handleItemClick('address'); }}/>  
                </a>
            </li>
            <li className={style.sidebar_list_item}>
                <a href="payment" className={style.a}>
                    < BsCreditCard className={style.icons} onClick={(e) => { e.preventDefault(); handleItemClick('payment'); }}/>  
                </a>
            </li>
            <li className={style.sidebar_list_item}>
                <a href="notification" className={style.a}>
                    < BsBell className={style.icons} onClick={(e) => { e.preventDefault(); handleItemClick('notification'); }}/>  
                </a>
            </li>
            <li className={style.sidebar_list_item}>
                <a href="order" className={style.a} onClick={(e) => { e.preventDefault(); handleItemClick('event') }} >
                    < BsCalendarEvent className={style.icons}/>  
                </a>
            </li>
    
        </ul>
        <div  type='click' onClick={handleNavigate} className={style.log}>
           <BsBoxArrowInLeft  className={style.icons}/> 
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

export default IconSideBar
