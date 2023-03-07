import { useEffect, useState } from "react";
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
import MoonLoader from "react-spinners/MoonLoader";
import { Link } from "react-router-dom";
import Mastercard from "../../Components/Mastercard/Mastercard";
import Navbar from "../../Components/Navbar/Navbar";
import { connect } from "react-redux";
import { fetchProfile } from "../../Redux/Profile/ProfileAction";
import { fetchTransaction } from "../../Redux/Transaction/TransactionAction";
const Dashboard = ({ profileData,fetchProfile, transactionData, fetchTransaction, loading, error}) => {
    const score = profileData?.profile?.message?.nairaPercentage;
    const score2 = 39
    const [sidebar, setSidebar] = useState(false);
    const tenttransaction = transactionData.transaction.slice(0, 10);
    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState);
    };
    useEffect(() => {
        fetchTransaction()
        fetchProfile();
    }, []);
    return ( 
        <div className="dashboard body">
            <Navbar/>
            <div className="app-container">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar}/>
                {/* <div className="loader">
                    {profileData.loading && (
                        <div>
                        {" "}
                        {spinner ? (
                            <MoonLoader
                            color={"#B11226"}
                            loading={spinner}
                            size={50}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                            />
                        ) : (
                            <div className="loader-2"></div>
                        )}
                        </div>
                    )}
                </div> */}
                  {loading ? (
                        <div className="loader">
                            <MoonLoader
                            color={"#B11226"}
                            loading={loading}
                            size={50}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                            />
                        </div>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                    <div className="body-inner">
                        <div className="dashboard-top">
                            <div className="navbar-mobile" onClick={toggleSidebar}>
                                <FaBars/>
                            </div>
                            <div className="username">
                                <p>Dear {profileData?.profile?.message?.profile?.businessName ??"********"}</p>
                            </div>
                            <Link to='/notification'>
                                <div className="dashboard-notification">
                                    <IoNotifications/>
                                </div>
                            </Link>
                        </div>
                        <div className="dashboard-body">
                            <div className="dashboard-left">
                                    {(profileData?.profile?.message?.profile?.pinCode === "") ? (
                                        <div className="kyc-status">
                                            <div className="kyc-status-left">
                                                <p className="kyc">KYC STATUS</p>
                                                <p className="kyc-body">Full Identity Verification Incomplete</p>
                                            </div>
                                            <div className="kyc-status-right">
                                                <HiOutlineDocumentPlus/>
                                            </div>
                                    </div>
                                    ):(<div></div>)}
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
                                            <p className="account-amount">Payment ₦{profileData?.profile?.message?.lastPayment??"********"}</p>
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
                                            <p className="amount-saved">₦14.100,00</p>
                                        </div>
                                    </div>
                                    <div className="saving-right">
                                        <Link to='/saving'>
                                            <FaChevronRight/>
                                        </Link>
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
                                    {tenttransaction.map((transaction)=>{
                                        return(
                                            <div className="single-transaction">
                                                <div className="transaction-history-left">
                                                    <div className="transaction-icon">
                                                    {transaction.type === 1 && (
                                                        <img src={debit} alt="Image 1" />
                                                    )}
                                                    {transaction.type === 0 && (
                                                        <img src={credit} alt="Image 2" />
                                                    )}
                                                    </div>
                                                    <div className="transaction-history-text">
                                                        {transaction.type === 1 && (
                                                            <p className="transaction-history-name">{transaction.referenceData.creditAccountName ?? "************"}</p>
                                                        )}
                                                        {transaction.type === 0 && (
                                                            <p className="transaction-history-name">CREDIO/{transaction.from ?? "************"}</p>
                                                        )}
                                                            {transaction.type === 1 && (
                                                                <p className="transaction-amount">₦{transaction.amount ?? "************"} outgoing transaction</p>
                                                        )}
                                                        {transaction.type === 0 && (
                                                                <p className="transaction-amount">₦{transaction.amount ?? "************"} incoming transaction</p>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="saving-right">
                                                    <p className="transaction-date">{transaction.createdAt.slice(0, 10) ?? "************"}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
               )}
            </div>
        </div>
    );
}



const mapStoreToProps = (state) => {
    console.log("states   ", state);
    return {
      profileData: state.profile,
      transactionData: state.transaction,
      loading: state.profile.loading,
      error: state.profile.error
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchProfile: () => dispatch(fetchProfile()),
      fetchTransaction: () => dispatch(fetchTransaction())
    };
  };
  
export default connect(mapStoreToProps, mapDispatchToProps)(Dashboard);