import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import mastercard from '../../assets/image/mastercard.png'
import { FaChevronLeft, FaChevronRight, FaCreditCard, FaPlus } from "react-icons/fa";
import './Savingdetails.css';
import { Link } from "react-router-dom";
import { useState } from "react";
const Savingdetails = () => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState);
    };
    return ( 
        <div className="savingdetails">
            <Navbar/>
            <div className="app-container">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar}/>
                <div className="body-inner saving-inner">
                    <div className="dashboard-top nairaaccount-top">
                        <div className="profile-back" >
                            <Link to='/saving'>
                                <FaChevronLeft/>
                            </Link>
                        </div>
                        <div className="account-top profile-top">
                            <p>My Savings</p>
                        </div>
                        <div className="saving-add">
                            <FaPlus/>
                        </div>
                    </div>
                    <div className="savingdetails-body">
                        <div className="savingdetails-account">
                            <div className="saving-account-type"><img src={mastercard}></img></div>
                            <p className="saving-account-number">**** 5333</p>
                        </div>
                        <div className="savingdetails-content">
                            <div className="savingdetails-content-left">
                                <p className="savingplan-head">Saving Plan #1</p>
                                <div className="saving-plan">
                                    <div className="plans">
                                        <p className="plans-head">Amount saved</p>
                                        <p className="plans-content">₦ 12.000</p>
                                    </div>
                                    <div className="plans">
                                        <p className="plans-head">Contribute</p>
                                        <p className="plans-content">₦ 1.100</p>
                                    </div>
                                    <div className="plans">
                                        <p className="plans-head">Saving type</p>
                                        <p className="plans-content">Monthly</p>
                                    </div>
                                    <div className="plans">
                                        <p className="plans-head">Next save in</p>
                                        <p className="plans-content">12 days</p>
                                    </div>
                                </div>
                            </div>
                            <div className="savingdetails-content-right">
                                <p className="saving-actions">Make a single save</p>
                                <div className="savingdetail-action">
                                    <div className="adding-action">
                                        <div className="adding-action-left">
                                            <div className="addingicon">
                                                <FaPlus/>
                                            </div>
                                            <p className="addingtext">Add from current account</p>
                                        </div>
                                        <div className="adding-action-right">
                                            <FaChevronRight/>
                                        </div>
                                    </div>
                                    <div className="adding-action">
                                        <div className="adding-action-left">
                                            <div className="addingicon">
                                                <FaCreditCard/>
                                            </div>
                                            <p className="addingtext">Add from external card</p>
                                        </div>
                                        <div className="adding-action-right">
                                            <FaChevronRight/>
                                        </div>
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
 
export default Savingdetails;