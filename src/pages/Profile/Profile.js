import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy, FaQrcode, FaStar, FaWeightHanging } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import './Profile.css';
const Profile = () => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState);
    };
    return ( 
        <div className="profile">
            <Navbar/>
            <div className="app-container">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar}/>
                <div className="body-inner profile-inner">
                    <div className="dashboard-top nairaaccount-top">
                        <div className="profile-back" onClick={toggleSidebar}>
                            <Link to='/dashboard'>
                                <FaChevronLeft/>
                            </Link>
                        </div>
                        <div className="account-top profile-top">
                            <p>Profile</p>
                        </div>
                        <div className="profile-setting">
                            <Link to='/setting'>
                                <IoSettingsSharp/>
                            </Link>
                            
                        </div>
                    </div>
                    <div className="profile-score">
                        <p className="your-score">Your credit score</p>
                        <p className="profile-credit-score">10</p>
                    </div>
                    <div className="profile-details">
                        <div className="profile-details-inner">
                            <div className="card-rating">
                                <p className="rating-head">Credit Rating</p>
                                <div className="card-stars">
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                </div>
                                <div className="ask">
                                    <p className="ask-credit"><FaWeightHanging/>Ask For Credit</p>
                                    <FaChevronRight/>
                                </div>
                            </div>
                            <div className="profile-information">
                                <div className="profile-info">
                                    <p className="info-head">Transfer Code:</p>
                                    <p className="info-result">7453 56789 7595</p>
                                </div>
                                <div className="profile-info">
                                    <p className="info-head">Name:</p>
                                    <p className="info-result">CREDIO/TOUREARTH</p>
                                </div>
                                <div className="profile-info">
                                    <p className="info-head">Bank Name:</p>
                                    <p className="info-result">SAFE HAVEN MFB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile-button">
                        {/* <div className="profile-button-inner"> */}
                            <div className="profile-copy">
                                <button>Copy <FaCopy/></button>
                            </div>
                            <div className="profile-qr">
                                <button>QR Code <FaQrcode/></button>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Profile;