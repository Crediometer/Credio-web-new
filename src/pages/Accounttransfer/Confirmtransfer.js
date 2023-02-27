import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import Sidebar from "../../Components/Sidebar/Sidebar";
import './Confirmtransfer.css'
const Confirmtransfer = () => {
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
        // const value = e.target.value
        // setPin3(value)
        // const pins = `${pin}${pin1}${pin2}${value}`
        // console.log(pins)
        // var encrypt = new JSEncrypt();
        // encrypt.setPublicKey(`${consts.pub_key}`);
        // var encrypted = encrypt.encrypt(pins);
        // console.log(encrypted)
        // setCombinedpin(encrypted);
    };
    return ( 
        <div className="confirmtransfer body">
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
                                {/* N{nameData.bankname.transferData.amount} */}N 2,000.00
                                </p>
                            </div>
                            </div>
                            <div className="preview-1">
                            <div className="preview-left">
                                <p className="receipt-head">Account Number</p>
                                <p className="receipt-body-2">
                                {/* {nameData.bankname.transferData.beneficiaryAccountNumber} */}099464746
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
                                {/* {nameData.bankname.transferData.beneficiaryAccountName} */}Ayodabo Blessing Odunayo//0164332950
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
                            // onClick={handleSubmit}
                            type="submit"
                            value="Continue"
                            className="submit-2"
                            >
                            Finish
                            </button>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    );
}
 
export default Confirmtransfer;