import { FaChevronLeft } from "react-icons/fa";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useState } from "react";
import { IoNotifications } from "react-icons/io5";
import credit from '../../assets/image/credit.png';
import debit from '../../assets/image/debit.png'
import './Transaction.css'
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
const Transaction = () => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState);
    };
    return (
        <div className="transaction body">
            <Navbar/>
            <div className="app-container">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar}/>
                <div className="body-inner">
                    <div className="dashboard-top">
                        <div className="back">
                            <Link to='/nairaaccount'>
                                <FaChevronLeft/>
                            </Link>
                        </div>
                        {/* <div className="username">
                            <p>Dear Ibrarch</p>
                        </div> */}
                        <div className="dashboard-notification">
                            <IoNotifications/>
                        </div>
                    </div>
                    <div className="transaction-body">
                        <div className="transaction-title">
                            <p className="transaction-text">Transactions History</p>
                            <div className="transactions">
                                <Link to='/receipt'>
                                    <div className="transaction-receipt">
                                        <div className="transaction-status">
                                            <img src={credit}></img>
                                            <div className="transaction-amount-name">
                                                <p className="transaction-name">Ayodabo Blessing Odunayo//0164332950</p>
                                                <p className="transaction-history-amount">N 5,000 Outgoing Transaction </p>
                                            </div>
                                        </div>
                                        <div className="transaction-time">
                                            <p className="transaction-time">20-2-2022</p>
                                        </div>
                                    </div>
                                </Link>
                                <div className="transaction-receipt">
                                    <div className="transaction-status">
                                        <img src={debit}></img>
                                        <div className="transaction-amount-name">
                                            <p className="transaction-name">Ayodabo Blessing Odunayo//0164332950</p>
                                            <p className="transaction-history-amount">N 5,000 Outgoing Transaction </p>
                                        </div>
                                    </div>
                                    <div className="transaction-time">
                                        <p className="transaction-time">20-2-2022</p>
                                    </div>
                                </div>
                                <div className="transaction-receipt">
                                    <div className="transaction-status">
                                        <img src={credit}></img>
                                        <div className="transaction-amount-name">
                                            <p className="transaction-name">Ayodabo Blessing Odunayo//0164332950</p>
                                            <p className="transaction-history-amount">N 5,000 Outgoing Transaction </p>
                                        </div>
                                    </div>
                                    <div className="transaction-time">
                                        <p className="transaction-time">20-2-2022</p>
                                    </div>
                                </div>
                                <div className="transaction-receipt">
                                    <div className="transaction-status">
                                        <img src={credit}></img>
                                        <div className="transaction-amount-name">
                                            <p className="transaction-name">Ayodabo Blessing Odunayo//0164332950</p>
                                            <p className="transaction-history-amount">N 5,000 Outgoing Transaction </p>
                                        </div>
                                    </div>
                                    <div className="transaction-time">
                                        <p className="transaction-time">20-2-2022</p>
                                    </div>
                                </div>
                                <div className="transaction-receipt">
                                    <div className="transaction-status">
                                        <img src={debit}></img>
                                        <div className="transaction-amount-name">
                                            <p className="transaction-name">Ayodabo Blessing Odunayo//0164332950</p>
                                            <p className="transaction-history-amount">N 5,000 Outgoing Transaction </p>
                                        </div>
                                    </div>
                                    <div className="transaction-time">
                                        <p className="transaction-time">20-2-2022</p>
                                    </div>
                                </div>
                                <div className="transaction-receipt">
                                    <div className="transaction-status">
                                        <img src={credit}></img>
                                        <div className="transaction-amount-name">
                                            <p className="transaction-name">Ayodabo Blessing Odunayo//0164332950</p>
                                            <p className="transaction-history-amount">N 5,000 Outgoing Transaction </p>
                                        </div>
                                    </div>
                                    <div className="transaction-time">
                                        <p className="transaction-time">20-2-2022</p>
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
 
export default Transaction;