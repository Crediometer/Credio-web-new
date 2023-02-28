import { useState } from "react";
import { FaBars, FaChevronLeft } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import './Notification.css';
const Notification = () => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState);
    };
    return ( 
        <div className="notification">
            <Navbar/>
            <div className="app-container">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar}/>
                <div className="body-inner">
                    <div className="dashboard-top nairaaccount-top">
                        <Link to='/dashboard'>
                            <div className="navbar-mobile empty">
                                <FaChevronLeft/>
                            </div>
                        </Link>
                        <div className="account-top">
                            <p></p>
                        </div>
                        <div className="dashboard-notification">
                            <IoNotifications/>
                        </div>
                    </div>
                    <div className="notification-body">
                        <div className="notification-image">

                        </div>
                        <p className="notification-feedback">You do not have any notification at the moment.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Notification;