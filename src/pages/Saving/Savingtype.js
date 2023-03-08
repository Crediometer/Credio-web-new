import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import './Savingtype.css';
const Savingtype = () => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState);
    };
    const [isChecked, setIsChecked] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1000);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
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
                                            type="checkbox"
                                            className="radio-check"
                                            onChange={handleCheckboxChange}
                                        ></input> 
                                    </div>
                                </div>
                                <div className="flexible-saving" style={{ width: isSmallScreen || isChecked ? "100%" : "40%" }}>
                                    <p className="saving-type-head">Fixed Savings</p>
                                    <div className="flexible-saving-inner">
                                        <p className="saving-type-body">The amount to be deducted for a particular period of time locked. Early withdrawal of this savings before the maturity date attracts penalty of 5%</p> 
                                        <input
                                            type="checkbox"
                                            className="radio-check"
                                            onChange={handleCheckboxChange}
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
                                        ></input>
                                    </div>
                                    <div className="saving-type-form">
                                        <input
                                            type="text"
                                            placeholder="Choose an amount to save"
                                            className="savingfield"
                                        ></input>
                                    </div>
                                    <div className="saving-type-form">
                                        <select
                                            type="text"
                                            placeholder="N 1000"
                                            className="savingfield"
                                        >
                                            <optgroup>
                                                <option>Daily</option>
                                                <option>Weekly</option>
                                                <option>Monthly</option>
                                                <option>Anually</option>
                                            </optgroup>
                                        </select>
                                    </div>
                                    <div className="saving-add-button">
                                        <button className="saving-cancle">
                                            Cancle
                                        </button>
                                        <button className="saving-continue">
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
 
export default Savingtype;