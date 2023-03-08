import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";
import bulk from '../../assets/image/bulkdot.png';
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Receipts = () => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState);
    };
    return ( 
        <div className="receipt">
            <Navbar/>
            <div className="app-container">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar}/>
                <div className="body-inner">
                    <div className="dashboard-top nairaaccount-top">
                        <Link to='/nairaaccount'>
                            <div className="back">   
                                <FaChevronLeft/>
                            </div>
                        </Link>
                        <div className="account-top">
                            <p>Receipt</p>
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
                            <p className="add-account">Saved transaction history could not be retrieved please try again </p>
                            <p className="bulk-link">Refresh</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Receipts;