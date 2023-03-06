import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoNotifications } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import Mastercard from '../../Components/Mastercard/Mastercard';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './Accounttransfer.css';
import {Switch} from 'antd';
import { connect } from 'react-redux';
import { fetchBank, reqData, postData} from '../../Redux/Bank/BankAction';
const Accounttransfer = ({ bankData, fetchBank, postData, nameData, reqData }) => {

    const [sidebar, setSidebar] = useState(false);
    const [nibssCode, setnibssCode] = useState(null);
    const [accountNumber, setaccountNumber] = useState("");
    const [amount, setAmount] = useState("");
    const [narration, setnarration] = useState("");
    const debitAccountNumber = "0118462550";
    const saveBeneficiary = false;
    const saveBeneficiaryForUs = false;
    const history = useNavigate();
    const [postState, setPostState] = useState({});


    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState);
    };

    useEffect(() => {
        fetchBank();
        console.log(bankData);
    }, []);
    
    // HANDLE FOR BANK SELECT
    const handleBank = (e) => {
        const value = e.target.value;
        setnibssCode(value);
        console.log(value);
        handleFetchData();
        setPostState({ ...postState, ...{ nibssCode } });
    };

    // HANDLE FOR ACCOUNT NUMBER
    const handleNumber = (e) => {
        const value = e.target.value;
        console.log(value);
        setaccountNumber(value);
        handleFetchData();
        setPostState({ ...postState, ...{ accountNumber } });
    };

    // HANDLE FOR AMOUNT
    const handleAmount = (e) => {
        const value = e.target.value;
        console.log(value);
        setAmount(value);
        // setDepositState({ ...depositState, ...{ amount } });
        // console.log("state -- ", depositState);
    };

    // HANDLE FOR COMMENT
    const handleComment = (e) => {
        const value = e.target.value;
        console.log(value);
        setnarration(value);
        // setDepositState({
        //   ...depositState,
        //   ...{ narration },
        //   ...{ saveBeneficiary },
        //   ...{ saveBeneficiaryForUs },
        //   ...{ debitAccountNumber },
        // });
        // console.log("state -- ", depositState);
    };

    //HANDLE TO FETCH ACCOUNT NAME
    const handleFetchData = () => {
        console.log(
          "this method has been called::: ",
          nibssCode,
          accountNumber.toString().length
        );
        if (nibssCode !== "" && accountNumber.toString().length >= 9) {
          postData(postState);
        }
    };

    //HANDLE TO SUBMIT TRANSACTION
    const handleSubmit = (e) => {
        e.preventDefault();
        reqData({
          nameEnquiryReference: nameData.bankname.accountDetails.data.sessionId,
          debitAccountNumber,
          beneficiaryAccountNumber: accountNumber,
          beneficiaryBankCode: nibssCode,
          beneficiaryAccountName: nameData.bankname.accountDetails.data.accountName,
          narration,
          amount,
          saveBeneficiary,
          saveBeneficiaryForUs,
        });
        history(`/confirm`);
    };
    return ( 
        <div className="accounttransfer body">
            <Navbar/>
            <div className="app-container">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar}/>
                <div className="body-inner">
                    <div className="dashboard-top">
                        <div className="navbar-mobile empty" onClick={toggleSidebar}>
                            <FaBars/>
                        </div>
                        <div className="account-top">
                            <p>Account Transfer</p>
                        </div>
                        <div className="dashboard-notification">
                            <IoNotifications/>
                        </div>
                    </div>
                    <div className="accounttransfer-body">
                        <div className="account-card">
                            <div className="account-card-inner">
                                <Mastercard/>
                            </div>
                        </div>
                        <div className="transfer-form">
                            <form>
                                <div className="transfer-form-inner">
                                    <div className='select-bank'>
                                        <select
                                         value={nibssCode}
                                         onBlur={handleBank}
                                         onChange={handleBank}
                                        >
                                            <optgroup>
                                                {bankData &&
                                                bankData.bank &&
                                                bankData.bank.map((banks) => {
                                                    return (
                                                    <option value={banks.routingKey}>{banks.name}</option>

                                                    );
                                                })}
                                            </optgroup>
                                        </select>
                                    </div>
                                    <div className="account-number">
                                        <input
                                            type='text'
                                            placeholder='Account Number'
                                            className='transferfield'
                                            onBlur={handleNumber}
                                            onChange={handleNumber}
                                            required
                                        >
                                        </input>
                                        <p className="receiver-account-name">{
                                            nameData &&
                                            nameData.bankname.accountDetails &&
                                            nameData.bankname.accountDetails &&
                                            nameData.bankname.accountDetails.data &&
                                            nameData.bankname.accountDetails.data.accountName
                                            }
                                        </p>
                                    </div>
                                    <div className="transfer-amount">
                                        <input
                                            type='text'
                                            placeholder='Amount'
                                            className='transferfield'
                                            onBlur={handleAmount}
                                            onChange={handleAmount}
                                            required
                                        >
                                        </input>
                                    </div>
                                    <div className="transfer-comment">
                                        <textarea 
                                        placeholder='Make a Comment'
                                        className='textfield'
                                        onBlur={handleComment}
                                        onChange={handleComment}
                                        >
                                        </textarea>
                                    </div>
                                    <div className="transfer-beneficiary">
                                        <p>Add as a beneficiary</p>
                                        <div className="transfer-switch">
                                            <Switch/>
                                        </div>
                                    </div>
                                </div>
                                <div className="transfer-submit">
                                        <button
                                            onClick={handleSubmit}
                                        >Continue</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStoreToProps = (state) => {
    return {
      bankData: state.bankname,
      nameData: state,
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchBank: () => dispatch(fetchBank()),
        postData: (postState) => {
        dispatch(postData(postState));
        },
        reqData: (depositState) => {
        dispatch(reqData(depositState));
        },
    };
};
  

export default connect(mapStoreToProps, mapDispatchToProps)(Accounttransfer);