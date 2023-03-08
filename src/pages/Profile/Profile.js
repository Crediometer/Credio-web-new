import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCopy, FaQrcode, FaStar, FaWeightHanging } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import './Profile.css';
import { connect } from "react-redux";
import { fetchProfile } from "../../Redux/Profile/ProfileAction";
import { fetchTransaction } from "../../Redux/Transaction/TransactionAction";
import { fetchcredit } from "../../Redux/Credit/CreditAction";
const Profile = ({ profileData,fetchProfile, transactionData, fetchTransaction, fetchCredit, creditData}) => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState);
    };
    useEffect(() => {
        fetchTransaction()
        fetchProfile();
      }, []);
    return ( 
        <div className="profile">
            <Navbar/>
            <div className="app-container">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar}/>
                <div className="body-inner profile-inner">
                    <div className="dashboard-top nairaaccount-top">
                        <div className="profile-back" onClick={toggleSidebar}>
                            <Link to='/dashboard'>
                                <FaChevronLeft/>
                            </Link>
                        </div>
                        <div className="account-top profile-top">
                            <p>Profile</p>
                        </div>
                        <div className="profile-setting">
                            <Link to='/setting'>
                                <IoSettingsSharp/>
                            </Link>
                            
                        </div>
                    </div>
                    <div className="profile-score">
                        <p className="your-score">Your credit score</p>
                        {(creditData.credit) ? (
                            creditData.credit.map((item) => <div>
                                {item}
                            </div>)
                        ):(<div> <p className="profile-credit-score">0</p></div>)}
                    </div>
                    <div className="profile-details">
                        <div className="profile-details-inner">
                            <div className="card-rating">
                                <p className="rating-head">Credit Rating</p>
                                <div className="card-stars">
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                    <FaStar/>
                                </div>
                                <div className="ask">
                                    <p className="ask-credit"><FaWeightHanging/>Ask For Credit</p>
                                    <FaChevronRight/>
                                </div>
                            </div>
                            {profileData && profileData?.profile && (
                                <div className="profile-information">
                                    <div className="profile-info">
                                        <p className="info-head">Transfer Code:</p>
                                        <p className="info-result">{profileData?.profile?.message?.profile?.vaults.accountNumber ??"********"}</p>
                                    </div>
                                    <div className="profile-info">
                                        <p className="info-head">Name:</p>
                                        <p className="info-result">{profileData?.profile?.message?.profile?.vaults.accountName ??"********"}</p>
                                    </div>
                                    <div className="profile-info">
                                        <p className="info-head">Bank Name:</p>
                                        <p className="info-result">SAFE HAVEN MFB</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="profile-button">
                        {/* <div className="profile-button-inner"> */}
                            <div className="profile-copy">
                                <button>Copy <FaCopy/></button>
                            </div>
                            <div className="profile-qr">
                                <button>QR Code <FaQrcode/></button>
                            </div>
                        {/* </div> */}
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
      transactionData: state.transaction,
      creditData: state.credit
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchProfile: () => dispatch(fetchProfile()),
      fetchTransaction: () => dispatch(fetchTransaction()),
      fetchCredit: () => dispatch(fetchcredit())
    };
  };

export default connect(mapStoreToProps, mapDispatchToProps)(Profile);