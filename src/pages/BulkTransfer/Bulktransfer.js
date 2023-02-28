import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import bulk from '../../assets/image/bulkdot.png';
import { IoNotifications } from "react-icons/io5";
import { FaChevronCircleLeft, FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
import './Bulktransfer.css';
const Bulktransfer = () => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState);
    };
    return ( 
        <div className="bulktransfer">
            <Navbar/>
            <div className="app-container">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar}/>
                <div className="body-inner">
                    <div className="dashboard-top nairaaccount-top">
                        <div className="navbar-mobile empty" onClick={toggleSidebar}>
                            <FaChevronLeft/>
                        </div>
                        <div className="account-top">
                            <p>Bulk Transfer</p>
                        </div>
                        <div className="dashboard-notification">
                            <IoNotifications/>
                        </div>
                    </div>
                    <div className="bulktransfer-body">
                        <div className="bulktransfer-inner">
                            <div className="bulk-image">
                                <img src={bulk}></img>
                            </div>
                            <p className="add-account">Add Account to Transfer to </p>
                            <p className="bulk-link">Click Here</p>
                        </div>
                        <div className="bulk-add-account">
                            <p>Add New Account</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Bulktransfer;