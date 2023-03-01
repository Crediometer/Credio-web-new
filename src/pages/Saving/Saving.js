import { useState } from "react";
import { FaChevronLeft, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import SavingCard from "../../Components/Savingcard/Savingcard";
import Sidebar from "../../Components/Sidebar/Sidebar";
import './Saving.css';
const Saving = () => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState);
    };
    return ( 
        <div className="saving">
            <Navbar/>
            <div className="app-container">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar}/>
                <div className="body-inner saving-inner">
                    <div className="dashboard-top nairaaccount-top">
                        <div className="profile-back" >
                            <Link to='/dashboard'>
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
                    <div className="saving-body">
                        <div className="total-saving">
                            <p className="total-saving-head">Total savings</p>
                            <p className="saving-amount">₦ 14.100,00</p>
                        </div>
                        <div className="saving-card">
                            <SavingCard/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Saving;