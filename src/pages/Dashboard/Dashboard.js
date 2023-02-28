import { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import {HiOutlineDocumentPlus} from 'react-icons/hi2';
import {SiMoleculer} from 'react-icons/si'
import {FiArrowUpRight} from 'react-icons/fi'
import credit from '../../assets/image/credit.png';
import debit from '../../assets/image/debit.png';
import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import './Dashboard.css';
import { FaBars, FaChevronRight, FaFilter } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";
import Mastercard from "../../Components/Mastercard/Mastercard";
import Navbar from "../../Components/Navbar/Navbar";
const Dashboard = () => {
    const score = 66;
    const score2 = 39
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState);
    };
    return ( 
        <div className="dashboard body">
            <Navbar/>
            <div className="app-container">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar}/>
                <div className="body-inner">
                    <div className="dashboard-top">
                        <div className="navbar-mobile" onClick={toggleSidebar}>
                            <FaBars/>
                        </div>
                        <div className="username">
                            <p>Dear Ibrarch</p>
                        </div>
                        <div className="dashboard-notification">
                            <IoNotifications/>
                        </div>
                    </div>
                    <div className="dashboard-body">
                        <div className="dashboard-left">
                            <div className="kyc-status">
                                <div className="kyc-status-left">
                                    <p className="kyc">KYC STATUS</p>
                                    <p className="kyc-body">Full Identity Verification Incomplete</p>
                                </div>
                                <div className="kyc-status-right">
                                    <HiOutlineDocumentPlus/>
                                </div>
                            </div>
                            <div className="bank-card">
                                <Mastercard/>
                            </div>
                            <div className="my-account">
                                <p className="my-account-header">My Accounts</p>
                                <div className="account-type">
                                    <div className="naira-account">
                                        <div className="account-progressbar">
                                            <CircularProgressbar
                                                value={score}
                                                text ={`${score}%`}
                                                circleRatio={0.7}
                                                styles={{
                                                    trail: {
                                                        strokeLinecap: "butt",
                                                        transform: "rotate(-126deg)",
                                                        transformOrigin: 'center center'
                                                    },
                                                    path:{
                                                        strokeLinecap: "butt",
                                                        transform: "rotate(-126deg)",
                                                        transformOrigin: 'center center',
                                                        stroke: '#90ee90',
                                                    },
                                                    text:{
                                                        fill: '#8C9495'
                                                    }
                                                }}
                                                strokeWidth={10}
                                            />
                                        </div>
                                        <p className="account">Naira account</p>
                                        <p className="account-amount">Payment ₦120</p>
                                        <Link to='/nairaaccount'><button className="account-button">Pay</button></Link>
                                    </div>
                                    <div className="dollar-account">
                                        <div className="account-progressbar">
                                            <CircularProgressbar
                                                value={score2}
                                                text ={`${score2}%`}
                                                circleRatio={0.7}
                                                styles={{
                                                    trail: {
                                                        strokeLinecap: "butt",
                                                        transform: "rotate(-126deg)",
                                                        transformOrigin: 'center center'
                                                    },
                                                    path:{
                                                        strokeLinecap: "butt",
                                                        transform: "rotate(-126deg)",
                                                        transformOrigin: 'center center',
                                                        stroke: '#FAF33B',
                                                    },
                                                    text:{
                                                        fill: '#8C9495'
                                                    }
                                                }}
                                                strokeWidth={10}
                                            />
                                        </div>
                                        <p className="account"> Dollar account</p>
                                        <p className="account-amount">Payment ₦120</p>
                                        <button className="account-button">Pay</button>
                                    </div>
                                </div>
                            </div>
                            <div className="my-saving">
                                <div className="saving-left">
                                    <div className="saving-icon">
                                        <SiMoleculer/>
                                    </div>
                                    <div className="saving-text">
                                        <p className="saving-header">My savings</p>
                                        <p className="saving-amount">₦14.100,00</p>
                                    </div>
                                </div>
                                <div className="saving-right">
                                    <FaChevronRight/>
                                </div>
                            </div>
                        </div>
                        <div className="dashboard-right">
                            <div className="transaction-header">
                                <p className="transaction">Transaction History</p>
                                {/* <div className="transaction-right">
                                    <div className="categories">
                                        <FaFilter/>
                                        <p>Categories</p>
                                    </div>
                                    <div className="date">
                                        <BsCalendar3/>
                                        <p>Date</p>
                                    </div>
                                </div> */}
                            </div>
                            <div className="transaction-body">
                                <div className="single-transaction">
                                    <div className="transaction-history-left">
                                        <div className="transaction-icon">
                                            <img src={credit}></img>
                                        </div>
                                        <div className="transaction-history-text">
                                            <p className="transaction-history-name">Ayodabo Blessing Odunayo//0164332950</p>
                                            <p className="transaction-amount">N 5,000 Outgoing Transaction </p>
                                        </div>
                                    </div>
                                    <div className="saving-right">
                                        <p className="transaction-date">20-2-2022</p>
                                    </div>
                                </div>
                                <div className="single-transaction">
                                    <div className="transaction-history-left">
                                        <div className="transaction-icon">
                                            <img src={debit}></img>
                                        </div>
                                        <div className="transaction-history-text">
                                            <p className="transaction-history-name">Ayodabo Blessing Odunayo//0164332950</p>
                                            <p className="transaction-amount">N 5,000 Outgoing Transaction </p>
                                        </div>
                                    </div>
                                    <div className="saving-right">
                                        <p className="transaction-date">20-2-2022</p>
                                    </div>
                                </div>
                                <div className="single-transaction">
                                    <div className="transaction-history-left">
                                        <div className="transaction-icon">
                                            <img src={debit}></img>
                                        </div>
                                        <div className="transaction-history-text">
                                            <p className="transaction-history-name">Ayodabo Blessing Odunayo//0164332950</p>
                                            <p className="transaction-amount">N 5,000 Outgoing Transaction </p>
                                        </div>
                                    </div>
                                    <div className="saving-right">
                                        <p className="transaction-date">20-2-2022</p>
                                    </div>
                                </div>
                                <div className="single-transaction">
                                    <div className="transaction-history-left">
                                        <div className="transaction-icon">
                                            <img src={credit}></img>
                                        </div>
                                        <div className="transaction-history-text">
                                            <p className="transaction-history-name">Ayodabo Blessing Odunayo//0164332950</p>
                                            <p className="transaction-amount">N 5,000 Outgoing Transaction </p>
                                        </div>
                                    </div>
                                    <div className="saving-right">
                                        <p className="transaction-date">20-2-2022</p>
                                    </div>
                                </div>
                                <div className="single-transaction">
                                    <div className="transaction-history-left">
                                        <div className="transaction-icon">
                                            <img src={credit}></img>
                                        </div>
                                        <div className="transaction-history-text">
                                            <p className="transaction-history-name">Ayodabo Blessing Odunayo//0164332950</p>
                                            <p className="transaction-amount">N 5,000 Outgoing Transaction </p>
                                        </div>
                                    </div>
                                    <div className="saving-right">
                                        <p className="transaction-date">20-2-2022</p>
                                    </div>
                                </div>
                                <div className="single-transaction">
                                    <div className="transaction-history-left">
                                        <div className="transaction-icon">
                                            <img src={credit}></img>
                                        </div>
                                        <div className="transaction-history-text">
                                            <p className="transaction-history-name">Ayodabo Blessing Odunayo//0164332950</p>
                                            <p className="transaction-amount">N 5,000 Outgoing Transaction </p>
                                        </div>
                                    </div>
                                    <div className="saving-right">
                                        <p className="transaction-date">20-2-2022</p>
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
 
export default Dashboard;