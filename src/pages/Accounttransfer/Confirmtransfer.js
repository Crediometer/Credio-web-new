import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import consts from '../Login/keys/const';
import JSEncrypt from 'jsencrypt';
import { connect } from "react-redux";
import { fetchBank, postData, reqData } from "../../Redux/Bank/BankAction";
import { depositData } from "../../Redux/Deposit/DepositAction";
import './Confirmtransfer.css'
const Confirmtransfer = ({
    nameData,
    depositData,
    reqData,
    deposit
  }) => {
    const [combinedpin, setCombinedpin] = useState('');
    // const [reference, setReference] = useState("")
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState);
    };
    const [pin, setPin] = useState("");
    const atmpin = useRef(null);
    useEffect(() => {
        if (pin.length === 1) {
        atmpin1.current.focus();
        }
    }, [pin.length]);
    const onChangepin1 = (e) => {
        const value = e.target.value
        // var encrypt = new JSEncrypt();
        // encrypt.setPublicKey(`${consts.pub_key}`);
        // var encrypted = encrypt.encrypt(value);
        setPin(value)
    };
    const [pin1, setPin1] = useState("");
    const atmpin1 = useRef(null);
    useEffect(() => {
        if (pin1.length === 1) {
        atmpin2.current.focus();
        }
    }, [pin1.length]);
    const onChangepin2 = (e) => {
        const value = e.target.value
        // var encrypt = new JSEncrypt();
        // encrypt.setPublicKey(`${consts.pub_key}`);
        // var encrypted = encrypt.encrypt(value);
        setPin1(value)
    };
    const [pin2, setPin2] = useState("");
    const atmpin2 = useRef(null);
    useEffect(() => {
        if (pin2.length === 1) {
        atmpin3.current.focus();
        }
    }, [pin2.length]);
    const onChangepin3 = (e) => {
        const value = e.target.value
        // var encrypt = new JSEncrypt();
        // encrypt.setPublicKey(`${consts.pub_key}`);
        // var encrypted = encrypt.encrypt(value);
        setPin2(value)
    };
    const [pin3, setPin3] = useState("");
    const atmpin3 = useRef(null);
    const onChangepin4 = (e) => {
        const value = e.target.value
        setPin3(value)
        const pins = `${pin}${pin1}${pin2}${value}`
        console.log(pins)
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(`${consts.pub_key}`);
        var encrypted = encrypt.encrypt(pins);
        console.log(encrypted)
        setCombinedpin(encrypted);
    };

    const reference = 're3z6182'

    // const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    // let result = "";
    // for (let i = 0; i < 8; i++) {
    //   result += characters.charAt(Math.floor(Math.random() * characters.length));
    // }
    // setReference(result);
    const handleSubmit = (e) => {
      e.preventDefault();
      reqData({
        nameEnquiryReference: nameData.bankname.transferData.nameEnquiryReference,
        debitAccountNumber: nameData.bankname.transferData.debitAccountNumber,
        beneficiaryAccountNumber: nameData.bankname.transferData.beneficiaryAccountNumber,
        beneficiaryBankCode: nameData.bankname.transferData.beneficiaryBankCode,
        beneficiaryAccountName: nameData.bankname.transferData.beneficiaryAccountName,
        narration: nameData.bankname.transferData.narration,
        amount:nameData.bankname.transferData.amount,
        saveBeneficiary: nameData.bankname.transferData.saveBeneficiary,
        saveBeneficiaryForUs:nameData.bankname.transferData.saveBeneficiaryForUs,
        pin:combinedpin,
        paymentReference:reference
      });
      console.log(deposit)
      // setDepositState({...depositstate, ...{deposit}, ...{combinedpin:pin }})
      // console.log(combinedpin)
      // console.log(depositstate)
      depositData(deposit);
    }

    return ( 
        <div className="confirmtransfer body">
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
                    <div className="confirmtransfer-body">
                        <div className="confirmtransfer-body-inner">
                            <div className="receiver-details">
                                <div className="preview-1 preview-upper">
                                <div className="preview-left">
                                    <p className="receipt-head">Bank Name</p>
                                    {/* <p className="receipt-body-2">{getName()}</p> */}Sterling Bank
                                </div>
                                <div className="preview-right">
                                    <p className="receipt-head">Amount</p>
                                    <p className="receipt-body-2">
                                        N{nameData.bankname.transferData.amount}
                                    </p>
                                </div>
                                </div>
                                <div className="preview-1">
                                <div className="preview-left">
                                    <p className="receipt-head">Account Number</p>
                                    <p className="receipt-body-2">
                                        {nameData.bankname.transferData.beneficiaryAccountNumber}
                                    </p>
                                </div>
                                <div className="preview-right">
                                    <p className="receipt-head">Commision</p>
                                    <p className="receipt-body-2">N10.00</p>
                                </div>
                                </div>
                                <div className="preview-1">
                                <div className="preview-left">
                                    <p className="receipt-head">Account Name</p>
                                    <p className="receipt-body-2">
                                        {nameData.bankname.transferData.beneficiaryAccountName}
                                    </p>
                                </div>
                                <div className="preview-right">
                                    <p className="receipt-head">Balance</p>
                                    <p className="receipt-body-2">N50.00</p>
                                </div>
                                </div>
                            </div>
                            <div className="field-container">
                                <div className="field-1">
                                    <div className="pinfield">
                                        <input
                                        type="text"
                                        maxlength="1"
                                        onChange={onChangepin1}
                                        ref={atmpin}
                                        autoFocus
                                        ></input>
                                    </div>
                                </div>
                                <div className="field-1">
                                    <div className="pinfield">
                                        <input
                                        type="text"
                                        maxlength="1"
                                        onChange={onChangepin2}
                                        ref={atmpin1}
                                        ></input>
                                    </div>
                                </div>
                                <div className="field-1">
                                    <div className="pinfield">
                                        <input
                                        type="text"
                                        maxlength="1"
                                        onChange={onChangepin3}
                                        ref={atmpin2}
                                        ></input>
                                    </div>
                                </div>
                                <div className="field-1">
                                    <div className="pinfield">
                                        <input
                                        type="text"
                                        maxlength="1"
                                        onBlur={onChangepin4}
                                        ref={atmpin3}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <div className="transfer-submit ">
                                <button
                                // onClick={() => setOpenModal(true)}
                                type="submit"
                                value="Continue"
                                className="submit-2"
                                onClick={handleSubmit}
                                >
                                Finish
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

    return {
      bankData: state.bankname,
      nameData: state,
      deposit: state.bankname.transferData
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
      depositData: (depositState)=>{
        dispatch(depositData(depositState))
    }
    };
  };

export default connect(mapStoreToProps, mapDispatchToProps)(Confirmtransfer);