import { useState } from "react";
import { FaBars, FaChevronRight, FaHeadset, FaShare } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import './Setting.css';
const Setting = () => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState);
    };
    return ( 
        <div className="setting">
            <Navbar/>
            <div className="app-container">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar}/>
                <div className="body-inner">
                    <div className="dashboard-top nairaaccount-top">
                        <div className="navbar-mobile empty" onClick={toggleSidebar}>
                            <FaBars/>
                        </div>
                        <div className="account-top">
                            <p>Account Settings</p>
                        </div>
                        <div className="dashboard-notification">
                            <IoNotifications/>
                        </div>
                    </div>
                    <div className="setting-body">
                        <div className="settings-profile">
                            <div className="profile-image">
                                <img src="https://source.unsplash.com/random/?People/"></img>
                            </div>
                            <p className="settings-name">GojdNamse</p>
                            <p className="settings-title">Credio CUstomer</p>
                        </div>

                        <div className="setting-action">
                            <div className="setting-action-inner">
                                <div className="action-set">
                                    <div className="setting-icon-name">
                                        <div className="setting-icon">
                                            <FaHeadset/>
                                        </div>
                                        <p className="setting-name">Chat with us</p>
                                    </div>
                                    <div className="setting-next">
                                        <FaChevronRight/>
                                    </div>
                                </div>
                                <div className="action-set">
                                    <div className="setting-icon-name">
                                        <div className="setting-icon">
                                            <FaShare/>
                                        </div>
                                        <p className="setting-name">Invite a friend</p>
                                    </div>
                                    <div className="setting-next">
                                        <FaChevronRight/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Setting;