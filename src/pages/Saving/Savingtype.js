import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { savingData } from "../../Redux/Saving/SavingAction";
import { connect } from "react-redux";
import './Savingtype.css';
const Savingtype = ({savingData}) => {
    const [sidebar, setSidebar] = useState(false);
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [savingsType, settime] = useState("");
    // const [paymentType, setType] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [savingState, setsavingState] = useState({});
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1000);
    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState);
    };
    useEffect(() => {
        const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 1000);
        };

        window.addEventListener("resize", handleResize);

        return () => {
        window.removeEventListener("resize", handleResize);
        };
    }, []);
    const handleName = (e) => {
        const value = e.target.value;
        console.log(value);
        setName(value);
        setsavingState({ ...savingState, ...{ name } });
    };
    const handleAmount = (e) => {
        const value = e.target.value;
        console.log(value);
        setAmount(value);
        setsavingState({ ...savingState, ...{ amount } });
    };
    const handletime = (e) => {
        const value = e.target.value;
        settime(value);
        console.log(value);
        setsavingState({ ...savingState, ...{savingsType} });
    };
    const handleCheckbox = (event) => {
        setIsChecked(true);
        const paymentType = event.target.value;
        // setType(value);
        console.log(paymentType);
        setsavingState({ ...savingState, ...{paymentType} });
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(savingState)
        savingData(savingState)
    }
    return ( 
        <div className="savingtype">
            <Navbar/>
            <div className="app-container">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar}/>
                <div className="body-inner savingtype-inner">
                    <div className="dashboard-top nairaaccount-top">
                        <div className="back" >
                            <Link to='/saving'>
                                <FaChevronLeft/>
                            </Link>
                        </div>
                        <div className="account-top ">
                            <p>Savings Type</p>
                        </div>
                        <div className="saving-addddd">
                            {/* <FaPlus/> */}
                        </div>
                    </div>
                    <div className="savingtype-body">
                        <p className="Savingtype-header">
                            Please select the type of savings you want to start
                        </p>
                        <div className="savingtype-body-outer"style={{ display: isSmallScreen || isChecked ? "block" : "flex" }}>
                            <div>
                            <div className="savingtype-body-inner" style={{ display: isSmallScreen || isChecked ? "block" : "flex" }}>
                                <div className="flexible-saving" style={{ width: isSmallScreen || isChecked ? "100%" : "40%" }}>
                                    <p className="saving-type-head">Flexible Savings</p>
                                    <div className="flexible-saving-inner">
                                        <p className="saving-type-body">We’ll automatically debit your naria account at this hour for automated savings. The amount input in the savings amount. Cheers!</p> 
                                        <input
                                            type="radio"
                                            name="type"
                                            className="radio-check"
                                            // checked={isCheckedOne}
                                            onClick={handleCheckbox}
                                            value='0'
                                        ></input> 
                                    </div>
                                </div>
                                <div className="flexible-saving" style={{ width: isSmallScreen || isChecked ? "100%" : "40%" }}>
                                    <p className="saving-type-head">Fixed Savings</p>
                                    <div className="flexible-saving-inner">
                                        <p className="saving-type-body">The amount to be deducted for a particular period of time locked. Early withdrawal of this savings before the maturity date attracts penalty of 5%</p> 
                                        <input
                                            type="radio"
                                            name="type"
                                            className="radio-check"
                                            // checked={isCheckedTwo}
                                            onClick={handleCheckbox}
                                            value="1"
                                        ></input> 
                                    </div>
                                </div>
                            </div>
                            </div>
                            {isChecked && <div className="savingdetails-content-right">
                                <p className="saving-actions">New Saving Plan</p>
                                <div className="savingdetail-action">
                                    <div className="saving-type-form">
                                        <input
                                            type="text"
                                            placeholder="Choose a name "
                                            className="savingfield"
                                            onChange={handleName}
                                            onBlur={handleName}
                                        ></input>
                                    </div>
                                    <div className="saving-type-form">
                                        <input
                                            type="text"
                                            placeholder="Choose an amount to save"
                                            className="savingfield"
                                            onChange={handleAmount}
                                            onBlur={handleAmount}
                                        ></input>
                                    </div>
                                    <div className="saving-type-form">
                                        <select
                                            type="text"
                                            placeholder="N 1000"
                                            className="savingfield"
                                            value={savingsType}
                                            onBlur={handletime}
                                            onChange={handletime}
                                        >
                                            <optgroup>
                                                <option value='0'>Daily</option>
                                                <option value='1'>Weekly</option>
                                                <option value='2'>Monthly</option>
                                                <option value='3'>Anually</option>
                                            </optgroup>
                                        </select>
                                    </div>
                                    <div className="saving-add-button">
                                        <button className="saving-cancle">
                                            Cancle
                                        </button>
                                        <button className="saving-continue" onClick={handleSubmit}>
                                            Continue
                                        </button>
                                    </div>
                                </div>  
                            </div>}
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
        savingData: (savingState) => {
            dispatch(savingData(savingState));
        },
    };
}; 
export default connect(mapStoreToProps, mapDispatchToProps)(Savingtype);