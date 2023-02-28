import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import Mastercard from "../../Components/Mastercard/Mastercard";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import './Accountdetails.css'
const Accountdetails = () => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState);
    };
    return ( 
        <div className="accountdetails">
            <Navbar/>
            <div className="app-container">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar}/>
                <div className="body-inner">
                    <div className="dashboard-top">
                        <div className="navbar-mobile empty" onClick={toggleSidebar}>
                            <FaBars/>
                        </div>
                        <div className="account-top">
                            <p>Account details</p>
                        </div>
                        <div className="dashboard-notification">
                            <IoNotifications/>
                        </div>
                    </div>
                    <div className="accountdetails-body">
                        <div className="account-card">
                            <div className="account-card-inner account-card-details">
                                <Mastercard/>
                            </div>
                        </div>
                        <div className="bank-account-details">
                            <div className="bank-account-details-inner">
                                <div className="sub-account-details">
                                    <p className="detail-topic">Tier level</p>
                                    <p className="detail-result">1</p>
                                </div>
                                <div className="sub-account-details">
                                    <p className="detail-topic">BVN</p>
                                    <p className="detail-result">98475775776</p>
                                </div>
                                <div className="sub-account-details">
                                    <p className="detail-topic">Director’s Name </p>
                                    <p className="detail-result">Adebayo Johnson</p>
                                </div>
                                <div className="sub-account-details">
                                    <p className="detail-topic">Account Type</p>
                                    <p className="detail-result">Current Account</p>
                                </div>
                                <div className="sub-account-details">
                                    <p className="detail-topic">Bank Name </p>
                                    <p className="detail-result">SAFE HEAVEN MFB</p>
                                </div>
                                <div className="sub-account-details">
                                    <p className="detail-topic">Status </p>
                                    <p className="detail-result">ACTIVE </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Accountdetails;