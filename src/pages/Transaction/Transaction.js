import { FaChevronLeft } from "react-icons/fa";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { IoNotifications } from "react-icons/io5";
import credit from '../../assets/image/credit.png';
import debit from '../../assets/image/debit.png'
import './Transaction.css'
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { connect } from "react-redux";
import { fetchTransaction } from "../../Redux/Transaction/TransactionAction";
const Transaction = ({transactionData, fetchTransaction}) => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState);
    };  
    useEffect(() => {
        fetchTransaction()
    }, []);
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
                            {transactionData && transactionData?.transaction && transactionData?.transaction.map((transaction, key)=>{
                                return(
                                    <Link to={`/receipt/${transaction._id}`} key={transaction._id}>
                                        <div className="transaction-receipt">
                                            <div className="transaction-status">
                                                {transaction.type === 1 && (
                                                    <img src={debit} alt="Image 1" />
                                                )}
                                                {transaction.type === 0 && (
                                                    <img src={credit} alt="Image 2" />
                                                )}
                                                <div className="transaction-amount-name">
                                                    {transaction.type === 1 && (
                                                        <p className="transaction-name">{transaction.referenceData.creditAccountName ?? "************"}</p>
                                                    )}
                                                    {transaction.type === 0 && (
                                                        <p className="transaction-name">CREDIO/{transaction.from ?? "************"}</p>
                                                    )}
                                                    {transaction.type === 1 && (
                                                        <p className="transaction-history-amount">₦{transaction.amount ?? "************"} outgoing transaction</p>
                                                    )}
                                                    {transaction.type === 0 && (
                                                        <p className="transaction-history-amount">₦{transaction.amount ?? "************"} incoming transaction</p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="transaction-time">
                                                <p className="transaction-time">{transaction.createdAt.slice(0, 10) ?? "************"}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
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
        profileData: state.profile,
        transactionData: state.transaction
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTransaction: () => dispatch(fetchTransaction())
    };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Transaction);