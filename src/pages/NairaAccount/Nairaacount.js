import { useState } from "react";
import { BiTransfer } from "react-icons/bi";
import { FaBars, FaCreditCard, FaPeopleArrows, FaQrcode, FaReceipt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { IoNotifications, IoWarningOutline } from "react-icons/io5";
import {RxCounterClockwiseClock} from 'react-icons/rx'
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import './Nairaacount.css'
const Nairaacount = () => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState);
    };
    return ( 
        <div className="nairaacount body">
            <Navbar/>
            <div className="app-container">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar}/>
                <div className="body-inner">
                    <div className="dashboard-top nairaaccount-top">
                        <div className="navbar-mobile empty" onClick={toggleSidebar}>
                            <FaBars/>
                        </div>
                        <div className="account-top">
                            <p>Naira Account</p>
                        </div>
                        <div className="dashboard-notification">
                            <IoNotifications/>
                        </div>
                    </div>
                    <div className="nairaaccount-body">
                        <div className="naira-balance">
                            <p className="balance-title">Your balance</p>
                            <p className="balance-amount">₦ 19.250,69</p>
                        </div>
                        <div className="nairaaccount-action">
                            <div className="account-action">
                                <p className="account-action-text">Account Actions</p>
                                <div className="account-action-inner">
                                    <Link to='/transactions'>
                                        <div className="operation action">
                                            <div className="actionicon">
                                                <RxCounterClockwiseClock/>
                                            </div>
                                            <div className="action-details">
                                                <p className="detail-title">Operation History</p>
                                                <p className="detail-word">View all transactions on this account</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to='/accountdetails'>
                                        <div className="account-details action">
                                            <div className="actionicon">
                                                <IoWarningOutline/>
                                            </div>
                                            <div className="action-details">
                                                <p className="detail-title">Account </p>
                                                <p className="detail-word">Account number details and all data</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="receipt action">
                                        <div className="actionicon">
                                            <FaReceipt/>
                                        </div>
                                        <div className="action-details">
                                            <p className="detail-title">Receipts</p>
                                            <p className="detail-word">Saved receipts from previous payment</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="transfer-action">
                                <p className="account-action-text">Transfers</p>
                                <div className="account-action-inner">
                                    <Link to='/transfer'>
                                        <div className="operation action">
                                            <div className="actionicon">
                                                <BiTransfer/>
                                            </div>
                                            <div className="action-details">
                                                <p className="detail-title">Transfer between Accounts </p>
                                                <p className="detail-word">Transferring between your accounts</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="account-details action">
                                        <div className="actionicon">
                                            <FaCreditCard/>
                                        </div>
                                        <div className="action-details">
                                            <p className="detail-title">By card number</p>
                                            <p className="detail-word">Account number, limit and all data</p>
                                        </div>
                                    </div>
                                    <div className="receipt action">
                                        <div className="actionicon">
                                            <FaPeopleArrows/>
                                        </div>
                                        <div className="action-details">
                                            <p className="detail-title">Beneficiaries</p>
                                            <p className="detail-word">Send money quickly to your saved contacts</p>
                                        </div>
                                    </div>
                                    <div className="account-details action">
                                        <div className="actionicon">
                                            <FaQrcode/>
                                        </div>
                                        <div className="action-details">
                                            <p className="detail-title">Scan QR-Code</p>
                                            <p className="detail-word">Pay by scanning a QR-code</p>
                                        </div>
                                    </div>
                                    <Link to='/bulktransfer'>
                                        <div className="receipt action">
                                            <div className="actionicon">
                                                <HiUserGroup/>
                                            </div>
                                            <div className="action-details">
                                                <p className="detail-title">Bulk Transfer</p>
                                                <p className="detail-word">Transfer money to multiple people with one click x</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    );
}
 
export default Nairaacount;