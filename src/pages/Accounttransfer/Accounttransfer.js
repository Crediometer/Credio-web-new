import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoNotifications } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Mastercard from '../../Components/Mastercard/Mastercard';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './Accounttransfer.css'
const Accounttransfer = () => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState);
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
                                        <select>
                                            <optgroup>
                                                <option>Select a Bank</option>
                                            </optgroup>
                                        </select>
                                    </div>
                                    <div className="account-number">
                                        <input
                                            type='text'
                                            placeholder='Account Number'
                                            className='transferfield'
                                        >
                                        </input>
                                    </div>
                                    <div className="transfer-amount">
                                        <input
                                            type='text'
                                            placeholder='Amount'
                                            className='transferfield'
                                        >
                                        </input>
                                    </div>
                                    <div className="transfer-comment">
                                        <textarea 
                                        placeholder='Make a Comment'
                                        className='textfield'
                                        >
                                        </textarea>
                                    </div>
                                    <div className="transfer-beneficiary">
                                        <input
                                            type='text'
                                            placeholder='Add as beneficiary'
                                            className='transferfield'
                                        >
                                        </input>
                                    </div>
                                </div>
                                <div className="transfer-submit">
                                    <Link to='/confirm'>
                                        <button>Continue</button>
                                    </Link>  
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Accounttransfer;