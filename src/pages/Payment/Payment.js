import { FaBars, FaCreditCard, FaQrcode, FaReceipt } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import credit from '../../assets/image/credit.png';
import debit from '../../assets/image/debit.png';
import './Payment.css';
import { useState } from "react";
import { BiTransfer } from "react-icons/bi";
import { Link } from "react-router-dom";
const Payment = () => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState);
    };
    return ( 
        <div className="payment body">
            <Navbar/>
            <div className="app-container">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar}/>
                <div className="body-inner">
                    <div className="dashboard-top">
                        <div className="navbar-mobile empty" onClick={toggleSidebar}>
                            <FaBars/>
                        </div>
                        <div className="account-top">
                            <p>Payments</p>
                        </div>
                        <div className="dashboard-notification">
                            <IoNotifications/>
                        </div>
                    </div>
                    <div className="payment-body">
                        <div className="recent-transaction">
                            <p className="recent-transaction-head">Recent transactions</p>
                            <div className="recent-transaction-inner">
                                <div className="single-recent-transaction">
                                    <img src={credit}></img>
                                    <p>SOLA-OYETUNJI</p>
                                </div>
                                <div className="single-recent-transaction">
                                    <img src={credit}></img>
                                    <p>SOLA-OYETUNJI</p>
                                </div>
                                <div className="single-recent-transaction">
                                    <img src={debit}></img>
                                    <p>RASHEED-OYETUNJI</p>
                                </div>
                                <div className="single-recent-transaction">
                                    <img src={debit}></img>
                                    <p>SOLA-OYETUNJI</p>
                                </div>
                                <div className="single-recent-transaction">
                                    <img src={credit}></img>
                                    <p>SOLA-OYETUNJI</p>
                                </div>
                            </div>
                        </div>
                        <div className="account-action payment-transfer">
                            <p className="account-action-text">Transfers</p>
                            <div className="account-action-inner payment-action">
                                <Link to='/transfer'>
                                    <div className="operation action">
                                        <div className="actionicon">
                                            <BiTransfer/>
                                        </div>
                                        <div className="action-details">
                                            <p className="detail-title">By Accounts </p>
                                            <p className="detail-word">Transferring between your accounts</p>
                                        </div>
                                    </div>
                                </Link>
                                <div className="account-details action">
                                    <div className="actionicon">
                                        <FaQrcode/>
                                    </div>
                                    <div className="action-details">
                                        <p className="detail-title">Scan QR-Code</p>
                                        <p className="detail-word">Pay by scanning a QR-code</p>
                                    </div>
                                </div>
                                <div className="account-details action">
                                    <div className="actionicon">
                                        <FaCreditCard/>
                                    </div>
                                    <div className="action-details">
                                        <p className="detail-title">By card number</p>
                                        <p className="detail-word">Account number, limit and all data</p>
                                    </div>
                                </div>
                                <div className="operation action">
                                    <div className="actionicon">
                                        <BiTransfer/>
                                    </div>
                                    <div className="action-details">
                                        <p className="detail-title">Transfer between Cards</p>
                                        <p className="detail-word">Transferring between your accounts</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="account-action">
                            <p className="account-action-text">History</p>
                            <div className="account-action-inner">
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
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Payment;