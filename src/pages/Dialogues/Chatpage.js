import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import './Chatpage.css'
const Chatpage = () => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState);
    };
    return ( 
        <div className="chatpage">
            <Navbar/>
            <div className="app-container">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar}/>
                <div className="body-inner chat-inner">
                    <div className="chat-top">
                        <div className="chat-top-left">
                            <FaChevronLeft/>
                        </div>
                        <div className="chat-top-right">
                            <div className="chat-image sender-image">

                            </div>
                            <div className="chat-sender">
                                <p className="chat-sender-name">BLESSED TASTE</p>
                                <p className="chat-sender-number">16-01-2023</p>
                            </div>
                        </div>
                    </div>
                    <div className="chat-messages">

                    </div>
                    <div className="chat-type">
                        <input
                        type="text"
                        placeholder="Send a message"
                        > 
                        </input>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Chatpage;