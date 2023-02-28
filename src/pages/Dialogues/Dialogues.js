import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import './Dialogues.css';
const Dialogues = () => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState);
    };
    return ( 
        <div className="dialogues body">
            <Navbar/>
            <div className="app-container">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar}/>
                <div className="body-inner">
                    <div className="dashboard-top nairaaccount-top">
                        <div className="navbar-mobile empty" onClick={toggleSidebar}>
                            <FaBars/>
                        </div>
                        <div className="account-top">
                            <p>Dialogues</p>
                        </div>
                        <div className="dashboard-notification">
                            <IoNotifications/>
                        </div>
                    </div>
                    <div className="dialogue-body">
                        <div className="messages">
                            <div className="message-sender">
                                <div className="sender-image"></div>
                                <p className="sender-name">DEALER IN GOODS AND SEVERICES</p>
                            </div>
                            <p className="message-time">16-01-2023</p>
                        </div>
                        <div className="messages">
                            <div className="message-sender">
                                <div className="sender-image"></div>
                                <p className="sender-name">DEALER IN GOODS AND SEVERICES</p>
                            </div>
                            <p className="message-time">16-01-2023</p>
                        </div>
                        <div className="messages">
                            <div className="message-sender">
                                <div className="sender-image"></div>
                                <p className="sender-name">DEALER IN GOODS AND SEVERICES</p>
                            </div>
                            <p className="message-time">16-01-2023</p>
                        </div>
                        <div className="messages">
                            <div className="message-sender">
                                <div className="sender-image"></div>
                                <p className="sender-name">DEALER IN GOODS AND SEVERICES</p>
                            </div>
                            <p className="message-time">16-01-2023</p>
                        </div>
                        <div className="messages">
                            <div className="message-sender">
                                <div className="sender-image"></div>
                                <p className="sender-name">DEALER IN GOODS AND SEVERICES</p>
                            </div>
                            <p className="message-time">16-01-2023</p>
                        </div>
                        <div className="messages">
                            <div className="message-sender">
                                <div className="sender-image"></div>
                                <p className="sender-name">DEALER IN GOODS AND SEVERICES</p>
                            </div>
                            <p className="message-time">16-01-2023</p>
                        </div>
                        <div className="messages">
                            <div className="message-sender">
                                <div className="sender-image"></div>
                                <p className="sender-name">DEALER IN GOODS AND SEVERICES</p>
                            </div>
                            <p className="message-time">16-01-2023</p>
                        </div>
                        <div className="messages">
                            <div className="message-sender">
                                <div className="sender-image"></div>
                                <p className="sender-name">DEALER IN GOODS AND SEVERICES</p>
                            </div>
                            <p className="message-time">16-01-2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Dialogues;