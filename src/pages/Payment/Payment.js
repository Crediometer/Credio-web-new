import { FaBars, FaCreditCard, FaQrcode, FaReceipt } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import credit from '../../assets/image/credit.png';
import debit from '../../assets/image/debit.png';
import './Payment.css';
import { useEffect, useState } from "react";
import { BiTransfer } from "react-icons/bi";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchTransaction } from "../../Redux/Transaction/TransactionAction";
const Payment = ({transactionData, fetchTransaction}) => {
    const [sidebar, setSidebar] = useState(false);
    const tenttransaction = transactionData.transaction.slice(0, 10);
    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState);
    };
    useEffect(() => {
        fetchTransaction()
      }, []);
    return ( 
        <div className="payment body">
            <Navbar/>
            <div className="app-container">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar}/>
                <div className="body-inner payment-inner">
                    <div className="dashboard-top nairaaccount-top">
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
                            <div className="scrollable-outer">
                                <div className="scrollable">
                                    {tenttransaction.map((transaction)=>{
                                        return(
                                            <div className="single-recent-transaction">
                                                {transaction.type === 1 && (
                                                    <img src={debit} alt="Image 1" />
                                                )}
                                                {transaction.type === 0 && (
                                                    <img src={credit} alt="Image 2" />
                                                )}
                                                {transaction.type === 1 && (
                                                    <p>{transaction.referenceData.creditAccountName ?? "************"}</p>
                                                )}
                                                {transaction.type === 0 && (
                                                    <p>CREDIO/{transaction.from ?? "************"}</p>
                                                )}
                                            </div>
                                        )
                                    })}
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
                        <div className="account-action payment-action-2">
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
 
const mapStoreToProps = (state) => {
    console.log("states   ", state);
    return {
      transactionData: state.transaction
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchTransaction: () => dispatch(fetchTransaction())
    };
  };
  

export default connect(mapStoreToProps, mapDispatchToProps)(Payment);