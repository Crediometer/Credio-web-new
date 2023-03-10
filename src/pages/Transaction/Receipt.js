import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useParams } from "react-router-dom";
import './Receipt.css';
import { connect } from "react-redux";
import { fetchTransaction } from "../../Redux/Transaction/TransactionAction";
import { fetchSingle } from "../../Redux/Transaction/SingleAction";
const Receipt = ({transactions,fetchTransaction}) => {
    const {id} = useParams();
    useEffect(() => {
        fetchTransaction();
    }, [fetchTransaction]);
    console.log(transactions)
    const transactiondata = transactions.transaction.find((item) => item._id === id);
    console.log(transactiondata)
    
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState);
    };
    return ( 
        <div className="receipt body">
            <Navbar/>
            <div className="app-container">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar}/>
                <div className="body-inner">
                    <div className="dashboard-top nairaaccount-top">
                        <div className="navbar-mobile empty" onClick={toggleSidebar}>
                            <FaBars/>
                        </div>
                        <div className="account-top">
                            <p>Transaction Receipt Page </p>
                        </div>
                        <div className="dashboard-notification">
                            <IoNotifications/>
                        </div>
                    </div>
                    <div className="receipt-body">
                        <div className="receipt-body-inner">
                            <div className="receipt-content">
                                <div className="transaction-receipt-2">
                                    <p className="transaction-head">Transaction Receipt</p>
                                    <p className="transaction-content">20/02/2023</p>
                                </div>
                                <div className="transaction-details">
                                    <p className="transaction-head">Transaction Details</p>
                                </div>
                            </div>
                            <div className="details-content">
                                <div className="amount-fee">
                                    <div className="amount-content">
                                        <p className="transaction-head">Transaction Amount</p>
                                        <p className="transaction-content">{transactiondata.referenceData.amount ?? "************"}</p>
                                    </div>
                                    <div className="amount-content amount-content-right">
                                        <p className="transaction-head">Transaction Fee</p>
                                        <p className="transaction-content">N {transactiondata.referenceData.fees ?? "************"}</p>
                                    </div>
                                </div>
                                <div className="amount-fee">
                                    <div className="amount-content">
                                        <p className="transaction-head">Transaction Type </p>
                                        {transactiondata.type === 1 && (
                                            <p className="transaction-content">Outgoing Transfer</p>
                                        )}
                                        {transactiondata.type === 0 && (
                                             <p className="transaction-content">Incoming Transfer</p>
                                        )}
                                    </div>
                                    <div className="amount-content amount-content-right">
                                        <p className="transaction-head">Transaction ID</p>
                                        <p className="transaction-content">{transactiondata.referenceData._id ?? "************"}</p>
                                    </div>
                                </div>
                                <div className="amount-fee">
                                    <div className="amount-content">
                                        <p className="transaction-head">Remark</p>
                                        <p className="transaction-head transaction-head-2">Beneficiary Details </p>
                                    </div>
                                </div>
                            </div>
                            <div className="beneficiary-content">
                                <div className="amount-fee">
                                    <div className="amount-content">
                                        <p className="transaction-head">Account Number</p>
                                        <p className="transaction-content">{transactiondata.referenceData.creditAccountNumber ?? "************"}</p>
                                    </div>
                                    <div className="amount-content amount-content-right">
                                        <p className="transaction-head ">Bank</p>
                                        <p className="transaction-content">STERLING BANK</p>
                                    </div>
                                </div>
                                <div className="amount-fee">
                                    <div className="amount-content">
                                        <p className="transaction-head">Account Name </p>
                                        <p className="transaction-content">{transactiondata.referenceData.creditAccountName ?? "************"}</p>
                                    </div>
                                </div>
                                <div className="status-head">
                                    <p className="transaction-head transaction-head-2">Status</p>
                                </div>
                            </div>
                            <div className="status">
                                <div className="amount-fee">
                                    <p className="transaction-head">Response Code </p>
                                    <p className="transaction-head">Message</p>
                                </div>
                            </div>
                            <div className="receipt-share">
                                <button>
                                    Share
                                </button>
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
        transactions: state.transaction
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTransaction: () => dispatch(fetchTransaction())
    };
};
export default connect(mapStoreToProps, mapDispatchToProps)(Receipt);